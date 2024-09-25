import styled from 'styled-components';

export const Section3_2Styled = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    position: relative;
    background-color: black;
    .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: white;
        font-size: 5rem;
        z-index: 10;
        font-weight: bold;
    }
    .number {
        position: absolute;
        top: 15%;
        left: 80%;
        transform: translate(-15%,-80%);
        font-size: 4rem;
        color: white;
        font-weight:bold;
        z-index: 1000;
    }
    .imgBox {
        width: 70%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 100%;
                &:hover {
                    width: 105%;
                    transition: 0.5s;
                    opacity: 0.8;
                }
            }
        }
       
    }
    .textBox {
        position: absolute;
        bottom: 10%;
        right: 0;
        color: white;
        p {
            border-bottom: 1px solid white;
            line-height: 2;
            span {
                margin-right: 13px;
            }
        }
        }
    @media screen and (max-width: 480px) {
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
    }
    @media screen and (min-width: 1025px) {
    }
`;
