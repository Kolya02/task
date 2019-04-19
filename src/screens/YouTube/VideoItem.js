import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoItem extends Component {

  render() {
    const { video } = this.props;
    return (
      <Link to={`/youtube/videolist/${video.id.videoId}`}>
        <img
          src={video.snippet.thumbnails.default.url}
          alt=""
          className="mr-1"
        />
      </Link>
    )
  }
}
export default VideoItem;
