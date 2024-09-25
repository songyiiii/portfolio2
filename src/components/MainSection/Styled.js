import styled from 'styled-components';

export const MainSectionStyled = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: white; 
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .text {
        font-size: 3rem;
        font-weight: bold;
        color: white;
        mix-blend-mode: difference; /* 텍스트가 배경에 따라 색이 바뀜 */
        z-index: 1;
        transition: color 0.5s ease;
    }

    .left, .right {
        position: absolute;
        top: 0;
        width: 50vw;
        height: 100vh;
        background-color: black;
    }

    .left {
        left: 0;
    }

    .right {
        right: 0;
    }
`;
