import React, { Component } from 'react';
import VideoItem from '../YouTube/VideoItem';

class VideoList extends Component {

  render() {
    console.log(videos);
    
    const { videos } = this.props;
    return (
      <div className="d-flex flex-row">
        {videos.map(video => {
          return (
            <VideoItem key={video.id.videoId} video={video} />
          )
        })}
      </div>
    )
  }
}

export default VideoList;