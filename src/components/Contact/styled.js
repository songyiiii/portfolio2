import styled from "styled-components";

export const ContactStyled = styled.div`
width: 100vw;
height: 50vh;
display: flex;
justify-content: space-around;
align-items: center;
padding: 0 20px;
/* background-color: black; */
/* color: white; */
h1 {

    font-size: 6rem;
    text-align: center;
    display: flex;
    align-items: center;
}
.contactText {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        /* border-bottom: 1px solid black; */
        font-size: 2rem;
        line-height: 2;
        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
`