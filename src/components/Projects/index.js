import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { project } from '../../utill/data';
import { ProjectsStyled } from './styled';
import Section3_2 from '../Section3_2';

gsap.registerPlugin(ScrollTrigger);

const Projects = React.forwardRef(({ onMouseLeave, onMouseEnterLink }, ref) => {
    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        // 가로 스크롤 값 계산
        const scrollDistance = container.scrollWidth - container.clientWidth;

        const pin = gsap.fromTo(
            container,
            { translateX: 0 }, // 처음 상태 (왼쪽 끝에서 시작)
            {
                translateX: -scrollDistance, // 스크롤될 거리
                ease: 'none', // 부드러운 스크롤 적용
                scrollTrigger: {
                    trigger: container,
                    start: 'top top', // 스크롤이 시작하는 위치 (화면 상단과 요소 상단이 일치할 때)
                    end: () => `+=${scrollDistance}`, // 스크롤이 끝나는 지점 (가로로 이동한 만큼 스크롤)
                    scrub: 0.7, // 스크롤과 애니메이션 동기화
                    pin: true,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, [ref]);

    return (
        <ProjectsStyled ref={ref}>
            <div className="horizontalScrollContent">
                {project?.map((x, i) => (
                    <Section3_2
                        x={x}
                        key={i}
                        onMouseEnterLink={onMouseEnterLink}
                        onMouseLeave={onMouseLeave}
                    />
                ))}
            </div>
        </ProjectsStyled>
    );
});

export default Projects;
