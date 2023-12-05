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
        backgroundColor: #CED1D2;
        color: #fff;
        width:15rem;
        height:2.5rem;
        display:flex;
        justify-content: center;
        align-items:center;
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
