import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectSectionStyled } from './styled';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const [card1, card2] = cardsRef.current;

    // 첫 번째 카드 고정 및 두 번째 카드 덮기 설정
    gsap.to(card1, {
      scrollTrigger: {
        trigger: card1,
        start: 'top top',
        end:'+=100%',
        pin: true,
        pinSpacing: false,  // 고정된 상태에서의 간격 제거
        markers: true, // 디버그용 마커
        scrub: 1,
      },
    });

    // 두 번째 카드가 첫 번째 카드를 덮는 애니메이션
    gsap.to(card2, {
      yPercent: -90, // 두 번째 카드가 첫 번째 카드를 90% 덮음
      ease: 'none',
      scrollTrigger: {
        trigger: card2,
        start: 'top top',  // 두 번째 카드가 80% 지점에 도달하면 애니메이션 시작
        end: '+=100%',    // 두 번째 카드가 상단에 도달하면 애니메이션 종료
        scrub: 1,
        pin: true,
        pinSpacing: false, // 고정된 상태에서의 간격 제거
        markers: true, // 디버그용 마커
      },
    });
  }, []);

  return (
    <ProjectSectionStyled>
      <div
        className="parallax_item section1"
        ref={(el) => (cardsRef.current[0] = el)} // 첫 번째 카드 참조
      >
        <a>
          <span className="parallax_item_num">01</span>
          <img className="parallax_item_img" alt="Section 1" />
          <h1 className="parallax_item_title">Title 1</h1>
        </a>
      </div>
      <div
        className="parallax_item section2"
        ref={(el) => (cardsRef.current[1] = el)} // 두 번째 카드 참조
      >
        <a>
          <span className="parallax_item_num">02</span>
          <img className="parallax_item_img" alt="Section 2" />
          <h1 className="parallax_item_title">Title 2</h1>
        </a>
      </div>
    </ProjectSectionStyled>
  );
};

export default ProjectSection;
