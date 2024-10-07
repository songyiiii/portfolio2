import styled from 'styled-components';

export const ContactStyled = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    background-color: white;
    a {
        color: inherit;
    }
    h1 {
        font-size: 6rem;
        text-align: center;
        display: flex;
        align-items: center;
    }
    .icons {
        display: flex;
        font-size: 5rem;
        a {
            margin-right: 20px;
        }
    }
    @media screen and (max-width: 480px) {
        h1 {
            font-size: 1.5rem;
        }
        .icons {
            font-size: 2rem;
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        h1 {
            font-size: 3rem;
        }
        .icons {
            font-size: 3rem;
        }
    }
`;
