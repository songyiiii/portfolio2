import styled from 'styled-components';

export const MainStyled = styled.div`
    /* height: 200vh; */
    width: 100%;
    position: relative;
    background-color: white;
    h1 {
        position: sticky;
        top: 10%;
        left: 10%;
        font-size: 9rem;
        color:gray;
    }
    .container-top {
        position: relative;
        width: 100%;
        height: 100vh;
        .top-title {
            position: absolute;
            top: 22%;
            left: 50%;
            transform: translate(-50%,-22%);
            text-align: center;
            font-size: 2rem;
            color: black;
            z-index: 100;

        }
        .top-img {
            position: absolute;
            width: 50%;
            height: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            overflow: hidden;
            img {
                height: 100%;
                &:hover {
                    height: 105%;
                    transition: 0.5s;
                }
            }
        }
        .top-info {
            position: absolute;
            right: 20%;
            bottom: 25%;
            display: flex;
            font-size: 2rem;
            p:nth-of-type(2) {
                font-size: 1.5rem;
            }
        }
    }
    .container-bottom {
        width: 100%;
        height: 100vh;
        position: relative;
        .bottom-img {
            overflow: hidden;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 80%;
            height: 80%;
            object-fit: cover;
            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                width: 100%;
                &:hover {
                    width: 105%;
                    transition: 0.5s;
                }
            }
        }
        .right-top-text {
            position: absolute;
            font-size: 48px;
            font-family: 'Arial';
            text-transform: uppercase;
            top:0;
            left: 3%;
            p:nth-of-type(2) {
                font-size: 1.5rem;
            }
        }
        .right-bottom-text {
            position: absolute;
            font-size: 3rem;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            color: white;

        }
    }

    @keyframes blinker {
        50% {
            opacity: 1;
        }
    }
`;
