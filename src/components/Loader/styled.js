import styled from 'styled-components';

export const LoaderStyled = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900000;
    background: #000;
    overflow: hidden;
    .loader {
        width: 100%;
        height: 100vh;
        .scroll-text {
            white-space: nowrap;
            font-size: 8rem;
            color: rgba(255, 255, 255, 0.1);
            font-weight: bold;
        }
        .scroll-right {
            &:nth-of-type(1) {
                top: 20%;
            }
            &:nth-of-type(2) {
                top: 30%;
            }
            animation: scrollRight 10s linear infinite;
        }

        .scroll-left {
            &:nth-of-type(1) {
                bottom: 20%;
            }
            &:nth-of-type(2) {
                bottom: 30%;
            }
            animation: scrollLeft 10s linear infinite;
        }

        .intro {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .intro-title {
            font-size: 124px;
            color: #fff;
        }
    }
    @keyframes scrollRight {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
    @keyframes scrollLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
`;
