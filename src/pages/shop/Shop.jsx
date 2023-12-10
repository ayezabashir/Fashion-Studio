import styled from "styled-components"

const ShopContainer = styled.div`
        min-height:100vh;
        width:100vw;
        height:auto;
        margin:0 auto;
        overflow:hidden;
        display:flex;
        justify-content:flex-start;
        align-items:flex-start;
        position:relative;
`
const Title = styled.h1`
        font-weight: 300;
        position: absolute;
        top:1rem;
        left:5%;
        z-index:5;
`

const Shop = () => {
    return (
        <ShopContainer>
            <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" className="fontxxl">Shop Now</Title>
        </ShopContainer>
    )
}

export default Shop
