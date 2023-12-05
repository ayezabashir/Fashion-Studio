import styled from "styled-components"
import Video from "../../components/video/Video"
import Logo from "../../components/logo/Logo"
import NavBar from "../../components/navbar/NavBar"

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
            <NavBar />
        </Section>
    )
}

export default Home
