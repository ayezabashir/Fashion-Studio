import styled from "styled-components"
import video from '/video/girlvideo.mp4'
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

const Title = styled.div`
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

const Video = () => {
    return (
        <VideoContainer>
            <DarkEffect />
            <Title>
                <div>
                    <h1 data-scroll data-scroll-delay='0.13' data-scroll-speed="4" className="fontxxl">F</h1>
                    <h1 data-scroll data-scroll-delay='0.09' data-scroll-speed="4" className="fontxxl">a</h1>
                    <h1 data-scroll data-scroll-delay='0.06' data-scroll-speed="4" className="fontxxl">s</h1>
                    <h1 data-scroll data-scroll-delay='0.04' data-scroll-speed="4" className="fontxxl">h</h1>
                    <h1 data-scroll data-scroll-delay='0.03' data-scroll-speed="4" className="fontxxl">i</h1>
                    <h1 data-scroll data-scroll-delay='0.13' data-scroll-speed="4" className="fontxxl">o</h1>
                    <h1 data-scroll data-scroll-delay='0.09' data-scroll-speed="4" className="fontxxl">n&nbsp;</h1>
                    <h1 data-scroll data-scroll-delay='0.06' data-scroll-speed="4" className="fontxxl">S</h1>
                    <h1 data-scroll data-scroll-delay='0.04' data-scroll-speed="4" className="fontxxl">t</h1>
                    <h1 data-scroll data-scroll-delay='0.03' data-scroll-speed="4" className="fontxxl">u</h1>
                    <h1 data-scroll data-scroll-delay='0.13' data-scroll-speed="4" className="fontxxl">d</h1>
                    <h1 data-scroll data-scroll-delay='0.09' data-scroll-speed="4" className="fontxxl">i</h1>
                    <h1 data-scroll data-scroll-delay='0.06' data-scroll-speed="4" className="fontxxl">o</h1>
                </div>
                <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed="2" className="fontlg">Fashion, Beauty, Culture</h2>
            </Title>
            <video src={video} muted loop type='video/mp4' autoPlay />
        </VideoContainer>
    )
}

export default Video
