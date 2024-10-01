import styled from "styled-components";

export const ProjectStyled = styled.div`
/* background-color: black; */
display: flex;
height: 100vh;
position: relative;
.project-section {
    width: 50%;
    background-color: black;
    display: flex;
    align-items: center;
    img {
        width: 100%;
        opacity: 0.3;
    }
    &:nth-of-type(1) {
        border-right: 1px solid white;
    }
}
h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: white;
    font-size: 5rem;
    mix-blend-mode: difference;
}

`