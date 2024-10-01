import styled from 'styled-components';

export const ProjectSectionStyled = styled.div`
    width: 100vw;
    height: 200vh;
    .parallax_cont {
        overflow: hidden;
        
        width: 100vw;
        .parallax_item {
            width: 100%;
            height: 100vh;
            position: relative;
            background-color: black;
            .parallax_img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 80%;
                height: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: auto;
                }
            }
            .parallax_title {
                position: absolute;
                left: 5%;
                bottom: 5%;
                transform: translate(-5%,-5%);
                font-size: 3rem;
                z-index: 1000;
                color: white;
                border-bottom: 2px solid white;
            }
        }
    }
    a {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .parallax_num {
        position: absolute;
        top: 10%;
        right: 5%;
        transform: translate(-10%, -10%);
        font-size: 3rem;
        z-index: 10;
    }
`;
