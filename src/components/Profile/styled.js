import styled from 'styled-components';

export const ProfileStyled = styled.div`
    background-color: white;
    padding: 0 20px;

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
        }

        .content {
            position: absolute;
            left: -100%;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.9); 
            color: black;
            display: flex ;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            transition: all 0.5s ease;
            text-align: center;
            p {
                margin-bottom: 20px;
                padding: 10px;
                background-color: black;
                color: white;
                span {
                    display: block;
                }
            }
        }

        &:hover .content {
            left: 0; /* hover 시 content가 왼쪽에서 들어옴 */
        }
    }
    .item2, .item3 {
        .content {
            flex-direction: column;
        }
    }
    .item1 ,.item4 {
        .content {
            p {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: black;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 10px;
            }
        }
    }
`;
