import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {



    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videoDetailDisplay, setVideoDetailDisplay] = useState("none");
    const [videoListWide, setVideoListWide] = useState("sixteen");

    const [videos, search] = useVideos("react js")



    useEffect(() => {

        setSelectedVideo(videos[0]);
        setVideoListWide("sixteen");
        setVideoDetailDisplay("none");

    }, [videos])



    const onVideoSelect = (video) => {

        setSelectedVideo(video);
        setVideoDetailDisplay("block");
        setVideoListWide("five");
    }


    return (<div className="ui container" style={{ margin: 30 }}>
        <SearchBar
            onFormSubmit={search}
        />

        <div className="ui grid">

            <div className="ui row">

                <div className="eleven wide column" style={{ display: videoDetailDisplay }}>

                    <VideoDetail video={selectedVideo} />
                </div>

                <div className={`${videoListWide} wide column`}  >

                    <VideoList videos={videos} videoListWide={videoListWide} onVideoSelect={onVideoSelect} />
                </div>

            </div>

        </div>
    </div>);


}


export default App;