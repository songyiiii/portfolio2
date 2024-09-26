import styled from "styled-components";

export const ProjectSectionStyled = styled.div`
width: 100vw;
height: 300vh;
.parallax__title {
    position: fixed;
    left: 20px;
    top: 20px;
    z-index: 1000;
}
.parallax__title h1 {
    font-size: 30px;
    border-bottom: 1px dashed #fff;
    margin-bottom: 10px;
    padding-bottom: 5px;
    font-weight: 400;
    display: inline-block;
}
.parallax__title p {
    font-size: 16px;
}
.parallax__title ul {
    margin-top: 10px;
}
.parallax__title li {
    display: inline;
}
.parallax__title li a {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px dashed #fff;
    display: inline-block;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
}
.parallax__title li.active a {
    background: #fff;
    color: #000;
}

/* parallax__cont */
.parallax__cont {
    overflow: hidden;
}
.parallax__item {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.parallax__item__num {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 3vw;
    line-height: 1;
    z-index: 10;
}
.parallax__item__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
}
.parallax__item__img:nth-of-type(1) {
    background-color: indigo;
}
.parallax__item__img:nth-of-type(2) {
    background-color: hotpink;
}
.parallax__item__img:nth-of-type(3) {
    background-color: yellowgreen;
}
.parallax__item__title {
    font-size: 5vw;
    z-index: 100;
    text-transform: uppercase;
    display: inline-block;
}


`