import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoSingle extends Component {
  render() {
    console.log(this.props);

    const currentId = this.props.match.params.currentId;
    return (
      <>
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${currentId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <br />
        <Link to="/youtube/videolist" className="btn btn-success mt-3">Back</Link>
      </>
    )
  }
}

export default VideoSingle;