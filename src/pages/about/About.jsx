import styled from "styled-components"

const Section = styled.section`
        min-height:100vh;
        display:flex;
        margin: 0 auto;
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
        font-weight:400;
        position: relative;
        z-index:5;
        margin-top:17%;
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
            <LeftSubSec className="fontmd">
                We are fashion studio based in california. We create unique designs that will blow your mind. We also design unique jewellary pieces. Fashion is an ART that can not be grasped by everyone.
                <br /><br />We are very dedicated to making our products. We offer unique and creative products to a wide range of people. We have a variety of styles, but for most people, all of the options are in the box. We specialize in making things that make you happy.
                <br /><br />We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people. We are always looking to make something that is easy for everyone.
            </LeftSubSec>
            <RightSubSec>Images</RightSubSec>
        </Section>
    )
}

export default About
