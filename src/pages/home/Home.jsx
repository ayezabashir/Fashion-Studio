import styled from "styled-components"
import Video from "../../components/video/Video"
import Logo from "../../components/logo/Logo"

const Section = styled.section`
        position:relative;
        min-height:200vh;
        overflow:hidden;
`

const Home = () => {
    return (
        <Section>
            <Video />
            <Logo />
            <h1>NavBar</h1>
        </Section>
    )
}

export default Home
