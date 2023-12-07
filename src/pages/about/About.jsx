import styled from "styled-components"

const Section = styled.section`
        min-height:100vh;
        display:flex;
        position:relative;
        overflow:hidden;
        width:80vw;
`

const Title = styled.h1`
        font-weight: 300;
        position: absolute;
        top:1rem;
        left:5%;
        z-index:5;
`

const LeftSubSec = styled.div`
        width:50%;
`
const RightSubSec = styled.div`
        width:50%;
`

const About = () => {
    return (
        <Section>
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" className="fontxxl">
                About Us
            </Title>
            <LeftSubSec>text</LeftSubSec>
            <RightSubSec>Images</RightSubSec>
        </Section>
    )
}

export default About
