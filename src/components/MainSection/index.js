import { useEffect, useRef } from 'react';
import { MainSectionStyled } from './Styled';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainSection = ({ onMouseEnterText, onMouseLeave }) => {
    const containerRef = useRef(null); //현재섹션 전체
    const leftBgRef = useRef(null); //왼쪽배경
    const rightBgRef = useRef(null); //오른쪽배경

    useEffect(() => {
        //dom요소 가져오기
        const section = containerRef.current;
        const leftBg = leftBgRef.current;
        const rightBg = rightBgRef.current;
        //gsap.timeline: 여러 애니메이션을 순서대로 실행할수있는 기능
        const timeline = gsap
            .timeline({
                scrollTrigger: {
                    //애니메이션이 스크롤과 연동되어서 실행될 대상을 지정
                    trigger: section,
                    //스크롤이 섹션 상단에 도달할때 애니메이션 시작
                    //첫번째 top: 트리거요소 (containerRef.current)의 상단
                    //두번째 top: 뷰포트의 상단 (화면의 최상단)
                    //트리거 요소의 상단이 뷰포트의 상단에 도달하면 애니메이션 시작
                    start: 'top top',
                    endTrigger: '.some-element',
                    //스크롤이 섹션 하단에 도달하면 애니메이션 종료
                    //첫번째 bottom: 트리거 요소의 (containerRef.current)의 하단
                    //두번째 top: 뷰포트의 상단
                    //트리거요소의 하단이 뷰포트 상단에 도달하면 애니메이션이 종료
                    end: 'bottom top',
                    //scrub:true -> 애니메이션이 스크롤 속도랑 연동되어서 부드럽게 진행
                    //스크롤이 멈추면 애니메이션도 멈추고 스크롤을 되돌리면 애니메이션도 되돌아감
                    // scrub: 1,
                    //pin:true -> 스크롤시 해당 섹션을 화면에 고정
                    //스크롤을 해도 화면이 해당 섹션에 머물도록 함
                    // pin: true,
                    // pinSpacing:true,
                    // endTrigger: '.some-element-below-mainsection', // pin 고정이 끝나는 시점을 지정
                    // markers: true, // 디버깅을 위한 마커 활성화
                },
            })
            .to(leftBg, {
                //왼쪽 배경이 왼쪽으로 100%이동(화면에서 사라지게)
                x: '-100%',
                duration: 1,
                //애니메이션에 부드러운 가속과감속적용 자연스러운 시작과끝을 표현
                ease: 'power2.inOut',
            })
            .to(
                rightBg,
                {
                    //오른쪽 배경이 오른쪽으로 100%이동 (화면에서 사라지게)
                    x: '100%',
                    duration: 1,
                    //위와 동일
                    ease: 'power2.inOut',
                },
                // '-=1' -> 두번째 애니메이션이 첫번째 애니메이션과 동시에 시작되도록 조정하는 옵션
                //첫번째 애니메이션이랑 겹쳐서 실행
                '-=1'
            );

        return () => {
            // 타임라인을 명확히 해제
            timeline.kill();
        };
    }, []);

    return (
        <MainSectionStyled ref={containerRef}>
            <div
                className="text"
                onMouseEnter={onMouseEnterText}
                onMouseLeave={onMouseLeave}
            >
                FRONTEND PORTFOLIO
            </div>
            <div ref={leftBgRef} className="left" />
            <div ref={rightBgRef} className="right"></div>
        </MainSectionStyled>
    );
};

export default MainSection;
