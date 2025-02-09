import React, { useRef, useState, useEffect } from 'react'
import { hightlightsSlides } from "../constants";

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

    const { isEnd, isStartPlay, videoId, isLastVideo, isPlaying } = video;

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
        <div className="flex items-center">
            {hightlightsSlides.map((list, i) => (
                <div key={list.id} id="slider"
                 className="sm:pr-20 pr-10">
                    <div className="video-carousel_container">
                        <div className="w-full h-full flex-center
                        rounded-3xl overflow-hidden bg-black">
                            <video 
                                ref={(el) => videoRef.current[i] = el}
                                id="video"
                                playsInline={true}
                                muted
                                preload="auto"
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
    )
}

export default VideoCarousel