import styled from 'styled-components';

export const ProjectSectionStyled = styled.div`
  width: 100vw;
  height: 200vh; /* 두 개의 카드가 스크롤 가능하도록 충분한 높이 */
  display: flex;
  flex-direction: column;
  position: relative;

  .parallax_item {
    width: 100%;
    height: 100vh;
    position: relative;

    &.section1 {
      background-color: gray;
    }

    &.section2 {
      background-color: green;
    }

    .parallax_item_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }

    .parallax_item_num {
      position: absolute;
      top: 10%;
      right: 10%;
      color: white;
    }
  }
`;
