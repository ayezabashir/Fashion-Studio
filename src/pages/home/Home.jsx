import styled from "styled-components"
import Video from "../../components/video/Video"

const Section = styled.section`
        position:relative;
        min-height:100vh;
        overflow:hidden;
`

const Home = () => {
    return (
        <Section>
            <Video />
            <h1>logo</h1>
            <h1>NavBar</h1>
        </Section>
    )
}

export default Home
