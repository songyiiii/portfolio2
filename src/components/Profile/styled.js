import styled from 'styled-components';

export const ProfileStyled = styled.div`
    background-color: white;
    padding: 0 20px 50px 20px;

    .parallax__item {
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: white;
        position: relative;
        overflow: hidden;

        h2 {
            font-size: 5rem;
            -webkit-text-stroke: 1px white;
            display: flex;
            align-items: center;
        }

        .content {
            position: absolute;
            left: -100%;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 1);
            color: black;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            transition: all 0.5s ease;
            text-align: center;
            p {
                margin-bottom: 20px;
                padding: 10px 15px;
                border-radius: 15px;
                background-color: black;
                color: white;
                font-size: 1.2rem;
                margin-right: 10px;
                flex-wrap: wrap;
                font-weight: bold;
                span {
                    display: block;
                    margin-bottom: 10px;
                }
            }
        }

        &:hover .content {
            left: 0; /* hover 시 content가 왼쪽에서 들어옴 */
        }
    }
    .item1,
    .item4 {
        .content {
            p {
                font-size: 1.5rem;
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
            }
        }
    }
    @media screen and (max-width: 480px) {
        height: 100vh;
        .parallax__item {
            height: 20vh;
            h2 {
                span {
                    font-size: 1.5rem;
                }
            }
            .content {
                p {
                    font-size: 0.8rem;
                }
            }
        }
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        height: 160vh;
        .parallax__item {
            height: 35vh;
            h2 {
                span {
                    font-size: 3rem;
                }
            }
            .content {
                p {
                    font-size: 1rem;
                    margin-bottom: 3px;
                }
            }
        }
    }
`;
