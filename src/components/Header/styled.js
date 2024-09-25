import styled from 'styled-components';

export const HeaderStyled = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 20px;
    color: white;
    mix-blend-mode: difference; /* 텍스트가 배경에 따라 색이 바뀜 */
    a {
        color: inherit;
        text-decoration: none;
    }
    nav {
        display: flex;
        align-items: center;
        .logo {
            text-align: left;
            width: 15%;
            font-size: 1.3rem;
        }
        ul {
            display: flex;
            justify-content: flex-end;
            width: 85%;

            li {
                a {
                    padding: 10px 40px;
                }
            }
        }
    }
`;
