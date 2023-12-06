import styled from "styled-components"

const NavbarContainer = styled.div`
        position:absolute;
        top:0;
        display:flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        z-index:6;
`
const MenuButton = styled.li`
        background-color: #CED1D2;
        color: #000;
        width:15rem;
        height:2.5rem;
        display:flex;
        justify-content: center;
        align-items:center;
        text-transform:uppercase;
        clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
        font-weight:600;
        font-size:1rem;
        cursor:pointer;
`

const NavBar = () => {
    return (
        <NavbarContainer>
            <MenuButton>
                Menu
            </MenuButton>
        </NavbarContainer>
    )
}

export default NavBar
