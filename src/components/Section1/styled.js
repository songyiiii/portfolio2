import styled from 'styled-components';

export const Section1Styled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: white;
    padding-bottom: 80px;
    span {
        color: black;
        line-height: 1;
        margin-right: 20px;
        
    }
    @media screen and (max-width: 480px) {
        span {
            font-size: 1.5rem;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        span {
            font-size: 2.7rem;
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        span {
            font-size: 4.7rem;
        }
    }
    @media screen and (min-width: 1025px) {
        span {font-size: 5.7rem;}
    }
`;
