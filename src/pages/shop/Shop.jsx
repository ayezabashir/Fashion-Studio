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
        z-index:6;
        color:#fff;
        text-shadow:1px 1px 1px black;
`

const Left = styled.div`
        width:35%;
        min-height:100vh;
        z-index:5;
        position:fixed;
        left:0;
        background-color:#202020;
        color:#fff;
        display:flex;
        justify-content:center;
        align-items:center;
        p{
            width:80%;
            margin:0 auto;
        }
        
`

const Shop = () => {
    return (
        <ShopContainer>
            <Title data-scroll data-scroll-speed="-1" className="fontxxl">Shop Now</Title>
            <Left className="fontmd">
                <p>
                    The brand new collection is currently being developed in USA. We create our products using best quality material, including the use of some of the pure fabrics to make our products. All products are made using the best materials, from the finest cotton to the finest fabrics.
                    <br /><br />
                    We have lots of different clothing options like shoes, jackets and dresses. Not only clothes but we also provide unique Jewellery as well. It is great for us to carry our new clothes all around the country and look different.
                </p>
            </Left>
        </ShopContainer>
    )
}

export default Shop
