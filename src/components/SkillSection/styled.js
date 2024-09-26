import styled from 'styled-components';

export const SkillSectionStyled = styled.div`
    margin: auto;
    width: 90vw;
    height: 100vh;
    position: relative; /* 캔버스가 영역에 맞게 표시되도록 */
    overflow: hidden; /* 캔버스가 벗어나지 않도록 */
    background-color: white;
    text-align: center;
    h1{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,-10%);
        width: 100%;
    }
    canvas {
        width: 100vw;
        height: 90vh;
    }
`;
