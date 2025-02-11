import React, { useRef, useState, useEffect } from 'react'
import { hightlightsSlides } from "../constants";
import { playImg } from '../utils';

const VideoCarousel = () => {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        isStartPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);

    const { isEnd, isStartPlay, videoId, isLastVideo, isPlaying } = video;

    useEffect (() => {
        
        if (loadedData.length > 3) {
            if(!isPlaying) {
                videoRef.current[videoId].pause();
            } else {
                startPlay && videoRef.current[videoId].play();
            }
        }
    },[isPlaying, loadedData])

    useEffect(() => {
        let currentProgress = 0;
        let span = videoSpanRef.current;

        if (span[videoId]) {
            // Animate the progress span
            // You can add your custom animation logic here
            // For example:
            // gsap.to(span[videoId], { scaleX: 1, duration: list.videoDuration || 4 })
        }
    }, [videoId, isStartPlay]);

    return (
        <>
            <div className="flex items-center">
                {hightlightsSlides.map((list, i) => (
                    <div key={list.id} id="slider"
                     className="sm:pr-20 pr-10">
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex-center
                            rounded-3xl overflow-hidden bg-black">
                                <video 
                                    ref={(el) => (videoRef.current[i] = el)}
                                    id="video"
                                    playsInline={true}
                                    muted
                                    preload="auto"
                                    onPlay={() => {
                                        setVideo((prevVideo) => ({
                                            ...prevVideo,
                                            isPlaying: true
                                        }))
                                    }} 
                                    // Add onEnded and onClick handlers if needed
                                    // onEnded={() => handleVideoEnd()}
                                    // onClick={() => handleVideoClick(i)}
                                >
                                    <source src={list.video} type='video/mp4' />
                                </video>
                            </div>

                            <div className="absolute top-12 left-[5%]
                            z-10">
                                {list.textLists.map((text) => (
                                    <p key={text} className="md:text-2xl text-xl font-medium">{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative flex-center mt-10">
                <div className="flex-center py-5 px-7
                    bg-gray-300 backdrop-blur rounded-full">
                        {videoRef.current.map((_,i) => (
                            <span key={i}
                                ref={(el) => (videoDivRef.current[i] = el)}
                                className="mx-2 w-3 h-3 bg-gray-300
                                rounded-full relative cursor-pointer"
                                >
                                <span className="absolute h-full w-full bg-white rounded-full opacity-50" ref={(el) => (videoSpanRef.current[i] = el)} ></span>
                            </span>))}
                </div>

                <button className="control-btn">
                    <img
                    src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
                    />
                </button>
                
            </div>
        </>
    )
}

export default VideoCarousel