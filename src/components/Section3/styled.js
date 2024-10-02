import styled from 'styled-components';

export const ProjectsStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    background-color: white;
    -ms-overflow-style: none;


    &::-webkit-scrollbar {
        display: none;
    }
    .horizontalScrollContent {
        display: flex;
        width: 200vw;
        height: 100%;
    }
`;
