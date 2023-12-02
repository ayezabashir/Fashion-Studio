import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
        position:absolute;
        top:1rem;
        left:1rem;
        color: #bdbdbd;
        width:100%;
        z-index:5;
`
const Logo = () => {
    return (
        <Container>
            <Link to="/">
                Logo
            </Link>
        </Container>
    )
}

export default Logo
