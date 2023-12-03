import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
        position:absolute;
        top:1rem;
        left:1rem;
        color: #bdbdbd;
        width:100%;
        z-index:5;
        h2{
            display:inline;
        }
`
const Logo = () => {
    const [hide, Sethide] = useState('hidden');
    const display = () => {
        Sethide('show');
    }
    const conceal = () => {
        Sethide('hidden')
    }

    return (
        <Container>
            <h1 className="fontxl" onMouseOver={display} onMouseLeave={conceal}>F<span className={hide}>ashion</span> S<span className={hide}>tudio</span></h1>
        </Container>
    )
}

export default Logo
