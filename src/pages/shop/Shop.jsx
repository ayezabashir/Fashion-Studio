import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"
import styled from "styled-components"

const ShopContainer = styled.div`
        min-height:100vh;
        width:100%;
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

const Right = styled.div`
        position:absolute;
        left:35%;
        min-height:100vh;
        background-color: #BEBEBE;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        padding-left:30%;
        h1{
            width:5rem;
            margin: 0 2rem;
        }
`

const Shop = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null);
    const HorizontalRef = useRef(null);

    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = HorizontalRef.current;
        let pinWrapWidth = scrollingElement.offsetWidth;
        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: `${pinWrapWidth} bottom`,
                    scroller: '.App',
                    scrub: 1,
                    pin: true,
                },
                height: `${scrollingElement.scrollWidth}px`,
                ease: 'none,'
            })
            t1.to(scrollingElement, {
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: `${pinWrapWidth} bottom`,
                    scroller: '.App',
                    scrub: 1,
                },
                x: -pinWrapWidth,
                ease: 'none',
            })
            ScrollTrigger.refresh();
        }, 1000);
        ScrollTrigger.refresh();

        return () => {

        }
    }, [])

    return (
        <ShopContainer ref={ref}>
            <Title data-scroll data-scroll-speed="-1" className="fontxxl">Shop Now</Title>
            <Left className="fontmd">
                <p>
                    The brand new collection is currently being developed in USA. We create our products using best quality material, including the use of some of the pure fabrics to make our products. All products are made using the best materials, from the finest cotton to the finest fabrics.
                    <br /><br />
                    We have lots of different clothing options like shoes, jackets and dresses. Not only clothes but we also provide unique Jewellery as well. It is great for us to carry our new clothes all around the country and look different.
                </p>
            </Left>
            <Right data-scroll ref={HorizontalRef}>
                <h1>img</h1>
                <h1>img</h1>
                <h1>img</h1>
                <h1>imgwe</h1>
                <h1>imweeg</h1>
                <h1>dews</h1>
                <h1>imsdafsg</h1>
                <h1>imdfs</h1>
                <h1>ierwmg</h1>
                <h1>imgfdg</h1>
                <h1>imfdsg</h1>
                <h1>imdfwwg</h1>
                <h1>imweg</h1>
                <h1>iqqmg</h1>
                <h1>imqeg</h1>
                <h1>img</h1>
            </Right>
        </ShopContainer>
    )
}

export default Shop
