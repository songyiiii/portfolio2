import styled from 'styled-components';

export const ProjectStyled = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    position: relative;
    background-color: black;
    color: white;
    .title {
        position: absolute;
        text-align: center;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -5%);
        color: white;
        z-index: 10;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
        p:nth-of-type(1) {
            font-size: 3.5rem;
        }
        p:nth-of-type(2) {
            font-size: 1.2rem;
        }
    }
    .number {
        position: absolute;
        top: 7%;
        left: 15%;
        transform: translate(-7%, -15%);
        font-size: 3.5rem;
        font-weight: bold;
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
                height: 100%;
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
        right: 10%;

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
        .title {
            top: 15%;
            left: 50%;
            transform: translate(-50%, -15%);
            p:nth-of-type(1) {
                font-size: 2.5rem;
            }
            p:nth-of-type(2) {
                font-size: 0.9rem;
            }
        }
        .number {
            top: 15%;
            left: 15%;
            transform: translate(-15%, -15%);
            font-size: 3rem;
        }
        .imgBox {
            width: 90%;
            height: 90%;
        }
        .textBox {
            p {
                span {
                    font-size: 1.5rem;
                }
            }
        }
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
    }
    @media screen and (min-width: 1025px) {
    }
`;
