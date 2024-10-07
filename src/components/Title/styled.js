import styled from 'styled-components';

export const TitleStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: white;
    overflow-x: hidden; 
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    .shine {
        background: linear-gradient(
            to right,
            #4d4d4d 0%,
            #dcdcdc 50%,
            #4d4d4d 100%
        );
        background-size: 200% auto; /* 배경 크기 설정 */
        background-position: 0% 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 5s linear infinite; /* 애니메이션 반복 설정 */
        text-decoration: none;
        white-space: nowrap;
        display: inline-block;
    }
    @keyframes shine {
        0% {
            background-position: -200% 0;
        }
        100% {
            background-position: 200% 0;
        }
    }
    @media screen and (max-width: 480px) {
        h1 {
            font-size: 1.5rem;
        }
        h2 {
            font-size: 1rem;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }
        h2 {
            font-size: 1.5rem;
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
    }
    @media screen and (min-width: 1025px) {
    }
`;
