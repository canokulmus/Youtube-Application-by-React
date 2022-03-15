import React from "react";
import "./VideoItem.css"

const VideoItem = ({ video, onVideoSelect, videoListWide }) => {


    const title = () => {

        if (videoListWide === "sixteen") {
            return video.snippet.title;
        } else {
            return video.snippet.title.length <= 50 ? video.snippet.title : video.snippet.title.substring(0, 50) + "...";
        }
    }

    return (

        <div onClick={() => onVideoSelect(video)} className="item video-item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />

            <div className="content">
                <div className="header">
                    {title()}

                </div>
            </div>

        </div>

    );
}


export default VideoItem;