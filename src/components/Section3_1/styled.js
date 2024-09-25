import styled from "styled-components";

export const Section3_1Styled = styled.div`
position: sticky;
top: 0;
left: 0;
padding: 20px;
color: black;
height: 100%;
.text {
    div:nth-of-type(1) {
        font-size: 2.5rem;
    }
    div:nth-of-type(2) {
        font-size: 1.2rem;
    }
    div {
        p {
            line-height: 1.8;
            border-bottom: 1px solid gray;
        }
    }
}
`