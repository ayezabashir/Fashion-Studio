import styled from "styled-components"
import video from '../../../public/video/girlvideo.mp4'
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
                    <h1 className="fontxxl">Fashion Studio</h1>
                </div>
                <h2 className="fontlg">Fashion, Beauty, Culture</h2>
            </Title>
            <video src={video} muted loop type='video/mp4' autoPlay />
        </VideoContainer>
    )
}

export default Video