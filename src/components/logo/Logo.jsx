import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #bdbdbd;
  width: 100%;
  z-index: 5;

  svg{
    width:4rem;
    height:auto;
    overflow:visible;
    stroke-linejoin:round;
    stroke-linecap:round;
    g{
        path{
            stroke:#fff;
        }
    }
  }
`;
const Logo = () => {
    return (
        <Container>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 0 24 24"
                width="48px"
                fill="none"
            >
                <g>
                    <motion.path
                        initial={{
                            opacity: 0,
                            pathLength: 0,
                        }}
                        animate={{
                            opacity: 1,
                            pathLength: 1,
                        }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut'
                        }}

                        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
                </g>
            </svg>
        </Container>
    );
};

export default Logo;
