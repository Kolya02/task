import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import SearchVideo from './SearchVideo';
import VideoList from './VideoList';
import VideoSingle from './VideoSingle';
import { apiYoutubeUrl } from '../../utils/constants';

class YouTube extends Component {

  state = {
    searchValue: "",
    videos: [],
    isFetched: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { searchValue } = this.state;
    const apiUrl = `${apiYoutubeUrl}&q=${searchValue}`;
    axios.get(apiUrl)
      .then(response => {
        console.log(response);
        this.setState({ videos: response.data.items, isFetched: true }, () => { 
          console.log("callback", this.props);
        });
      });
  }

  render() {
    const { searchValue, videos } = this.state;

    console.log("render", this.state);
    return (
      <div className="container App">
        <Route
          exact path="/youtube" render={(props) => (
            <SearchVideo
              handleChange ={this.handleChange}
              handleClick  ={this.handleClick}
              searchValue  ={searchValue}
              {...props}
            />
          )}
        />
        <Switch>
          <Route
            exact path="/youtube/videolist" render={(props) => (
              <VideoList
                videos={videos}
                handleClickForItem={this.handleClickForItem}
                {...props}
              />
            )}
          />
          <Route path="/youtube/videolist/:currentId" component={VideoSingle} />
        </Switch>
      </div>
    );
  }
}

export default YouTube;
