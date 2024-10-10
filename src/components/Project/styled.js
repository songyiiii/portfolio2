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
    .projectInfo {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        z-index: 10000;
        text-shadow: 1px 1px 2px black;
    }
    .title {
        text-align: center;
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
        text-align: right;
        p {
            border-bottom: 1px solid white;
            line-height: 2;
            span {
                margin-right: 13px;
            }
        }
    }
    @media screen and (max-width: 480px) {
        .projectInfo {
            font-size: 1.3rem;
        }
        .textBox {
            p {
                font-size: 1rem;
            }
        }
        .imgBox {
            width: 90%;
            height: 90%;
            a {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        .projectInfo {
            font-size: 2rem;
        }
        .textBox {
            p {
                font-size: 1.3rem;
            }
        }
        .imgBox {
            width: 90%;
            height: 90%;
            a {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;
