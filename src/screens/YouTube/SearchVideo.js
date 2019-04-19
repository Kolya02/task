import React, { Component } from 'react';

import Form from '../../components/YouTube/Form';

class SearchVideo extends Component {


  render() {
    const { searchValue, handleChange, handleClick } = this.props;
    console.log(this.props);

    return (
      <Form
        searchValue={searchValue}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    );
  }
}

export default SearchVideo;