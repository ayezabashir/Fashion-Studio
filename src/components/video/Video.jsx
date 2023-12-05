import styled from "styled-components"
import video from '/video/girlvideo.mp4'
import { motion } from 'framer-motion'

const VideoContainer = styled.section`
        width:100%;
        height:100vh;
        position:relative;

        video{
            height:100vh;
            width:100%;
            object-fit:cover;
        }
`

const DarkEffect = styled.div`
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:1;
        background-color: rgba(32,32,32,0.6);
`

const Title = styled(motion.div)`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        color: #fff;
        z-index:5;

        h1{
            text-shadow:-8px 8px 8px black;
            display:inline-block;
        }
        h2{
            font-weight:400;
            text-transform:capitalize;
            text-shadow:1px 1px 1px black;
        }
`
const container = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 2,
            staggerChildren: 0.3,
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    }
}

const Video = () => {
    return (
        <VideoContainer>
            <DarkEffect />
            <Title variants={container} initial="hidden" animate="show" >
                <div>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.13' data-scroll-speed="4" className="fontxxl">F</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.09' data-scroll-speed="4" className="fontxxl">a</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.06' data-scroll-speed="4" className="fontxxl">s</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4" className="fontxxl">h</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.03' data-scroll-speed="4" className="fontxxl">i</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.13' data-scroll-speed="4" className="fontxxl">o</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.09' data-scroll-speed="4" className="fontxxl">n&nbsp;</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.06' data-scroll-speed="4" className="fontxxl">S</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed="4" className="fontxxl">t</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.03' data-scroll-speed="4" className="fontxxl">u</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.13' data-scroll-speed="4" className="fontxxl">d</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.09' data-scroll-speed="4" className="fontxxl">i</motion.h1>
                    <motion.h1 variants={item} data-scroll data-scroll-delay='0.06' data-scroll-speed="4" className="fontxxl">o</motion.h1>
                </div>
                <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed="2" className="fontlg">Fashion, Beauty, Culture</h2>
            </Title>
            <video src={video} muted loop type='video/mp4' autoPlay />
        </VideoContainer>
    )
}

export default Video
