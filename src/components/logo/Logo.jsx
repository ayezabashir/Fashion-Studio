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
            <h1 className="fontxl">Fashion Studio</h1>
        </Container>
    )
}

export default Logo
