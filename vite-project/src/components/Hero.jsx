import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {heroVideo, smallHeroVideo} from "../utils";

const Hero = () => {
    
    useGSAP(() => {
        gsap.to("#hero", {opacity: 1, delay: 1.5})
    }, [])

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iphone 15 pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video 
                        className="hidden md:block" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                    >
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                    <video 
                        className="block md:hidden" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                    >
                        <source src={smallHeroVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Hero