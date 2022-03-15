import React from "react";
import VideoItem from "./VideoItem";



const VideoList = ({ videos, onVideoSelect, videoListWide }) => {

    const renderedList = videos.map((video) => {

        return <VideoItem
            video={video}
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            videoListWide = {videoListWide}
        />;

    })


    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );

}



export default VideoList;