import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { project } from '../../utill/data';
import { ProjectsStyled } from './styled';
import Project from '../Project'

gsap.registerPlugin(ScrollTrigger);

const Projects = React.forwardRef(({ onMouseLeave, onMouseEnterLink }, ref) => {
    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        // 가로 스크롤 값 계산
        const setupScrollAnimation = () => {
            const scrollDistance = container.scrollWidth - container.clientWidth;

            // 기존 핀 애니메이션 삭제
            ScrollTrigger.getById("horizontalScroll")?.kill();

            // 새로운 핀 애니메이션 설정
            gsap.fromTo(
                container,
                { translateX: 0 }, // 처음 상태 (왼쪽 끝에서 시작)
                {
                    translateX: -scrollDistance, // 스크롤될 거리
                    ease: 'none',
                    scrollTrigger: {
                        id: "horizontalScroll",
                        trigger: container,
                        start: 'top top',
                        end: () => `+=${scrollDistance}`,
                        scrub: 0.7,
                        pin: true,
                        invalidateOnRefresh: true, // 화면 크기 변경 시 다시 계산
                    },
                }
            );
        };

        // 초기 설정
        setupScrollAnimation();

        // resize 이벤트에 핸들러 추가
        window.addEventListener('resize', setupScrollAnimation);

        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            window.removeEventListener('resize', setupScrollAnimation);
            ScrollTrigger.getById("horizontalScroll")?.kill(); // 핀 애니메이션 정리
        };
    }, [ref]);

    return (
        <ProjectsStyled ref={ref}>
            <div className="horizontalScrollContent">
                {project?.map((x, i) => (
                    <Project
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
