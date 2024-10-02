import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { project } from '../../utill/data';
import { ProjectsStyled } from './styled';
import Section3_2 from '../Section3_2';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ onMouseEnterText, onMouseLeave, onMouseEnterLink }) => {
    const section3Ref = useRef(null);

    useEffect(() => {
        const container = section3Ref.current;
        if (!container) return;
        //배경색 에니메이션 설정
        gsap.fromTo(
            container,
            {backgroundColor:'#fff'},
            {
                backgroundColor:'#000',
                ease:'none',
                scrollTrigger: {
                    trigger: container,
                    start:'top center',
                    end: 'bottom top',
                    scrub:true
                }
            }
        )
        //가로 스크롤 값 계산
        const scrollDistance = container.scrollWidth - container.clientWidth;

        const pin = gsap.fromTo(
            container,
            { translateX: 0 }, //처음상태(왼쪽 끝에서 시작)
            {
                translateX: -scrollDistance, //스크롤될 거리
                ease: 'none', //부드러운 스크롤 적용
                scrollTrigger: {
                    trigger: container,
                    start: 'top top', // 스크롤이 시작하는 위치 (화면 상단과 요소 상단이 일치할때)
                    end: () => `+=${scrollDistance}`, // 스크롤이 끝나는 지점 (가로로 이동한 만큼 스크롤)
                    scrub: 0.7, //스크롤과 애니메이션 동기화
                    pin: true, //섹션고정
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);

    return (
        <ProjectsStyled ref={section3Ref}>
            <div className="horizontalScrollContent">
                {project?.map((x, i) => {
                    return (
                        <Section3_2
                            x={x}
                            key={i}
                            onMouseEnterLink={onMouseEnterLink}
                            onMouseLeave={onMouseLeave}
                        />
                    );
                })}
            </div>
        </ProjectsStyled>
    );
};
export default Projects;
