import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const NavbarContainer = styled(motion.div)`
        position:absolute;
        top:${props => props.menu ? '0' : `-80px`};
        display:flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        z-index:6;
        transition:all 0.3s ease;
`
const MenuItems = styled(motion.ul)`
        position: relative;
        height: 5rem;
        background-color: rgb(32, 32, 32);
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: space-around;
        -webkit-box-align: center;
        align-items: center;
        list-style: none;
        width: 100%;
        padding: 0px 10rem;
`

const MenuButton = styled(motion.li)`
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
        position:absolute;
        top:100%;
        left:50%;
        transform:translateX(-50%);
`
const MenuItem = styled(motion.li)`
        text-transform:uppercase;
        color:#fff;
`

const NavBar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    }
    return (
        <NavbarContainer menu={menu}
            initial={{
                y: '-100%'
            }}
            animate={{
                y: 0,
            }}
            transition={{
                duration: 2,
                delay: 2,
            }}
        >
            <MenuItems
                drag='y'
                dragConstraints={{
                    top: 0,
                    bottom: 70,
                }}
                dragElastic={0.05}
                dragSnapToOrigin
            >
                <MenuButton onClick={toggleMenu}>
                    Menu
                </MenuButton>
                <MenuItem
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                >home</MenuItem>
                <MenuItem
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                >about</MenuItem>
                <MenuItem
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                >shop</MenuItem>
                <MenuItem
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                >new arrival</MenuItem>
            </MenuItems>
        </NavbarContainer>
    )
}

export default NavBar
