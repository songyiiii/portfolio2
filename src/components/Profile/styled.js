import styled from 'styled-components';

export const ProfileStyled = styled.div`
    background-color: white;
    padding: 0 20px;

    .parallax__item {
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            font-size: 5rem;
        }
        .content {
            p {
                margin-bottom: 20px;
                span {
                    display: block;
                }
            }
        }
    }
    .item1 {
        .content {
            display: flex;
            p {
                background-color: rgba(0, 0, 0, 0.3);
                color: white;
                border-radius: 50%;
                display: inline-block;
                width: 100px;
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 20px;
                animation: wave 2s infinite ease-in-out; /* 2초 동안 무한 반복 */
                &:nth-of-type(1) {
                    animation-delay: 0s;
                }
                &:nth-of-type(2) {
                    animation-delay: 0.4s;
                }
                &:nth-of-type(3) {
                    animation-delay: 0.8s;
                }
            }
            
        }
    }
    @keyframes wave {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(10px); /* 위로 10px 이동 */
        }
        100% {
            transform: translateY(0); /* 원래 위치로 돌아옴 */
        }
    }
`;
