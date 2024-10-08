import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { project } from '../../utill/data';
import { ProjectsStyled } from './styled';
import Project from '../Project';

gsap.registerPlugin(ScrollTrigger);

const Projects = React.forwardRef(({ onMouseLeave, onMouseEnterLink }, ref) => {
    useEffect(() => {
        const container = ref.current;
        if (!container) return;
        // ScrollTrigger 인스턴스를 저장할 변수
        let scrollTriggerInstance;

        // 가로 스크롤 값 계산
        const setupScrollAnimation = () => {
            const scrollDistance =
            //container.scrollWidth: 요소 전체 내용의 가로 너비
            //container.clientWidth: 요소의 보이는 부분의 가로 너비 (스크롤바 제외한 너비)
                container.scrollWidth - container.clientWidth;

            //이전에 설정된 애니메이션을 삭제하고 새로 업데이트된 값에 맞춰 애니메이션을 재설정
            scrollTriggerInstance?.kill();

            // create() 스크롤 이벤트와 애니메이션을 연결하고자 할 때 사용
            //스크롤 트리거와 연동할 요소와 애니메이션
            scrollTriggerInstance = ScrollTrigger.create({
                trigger: container, //트리거가 될 요소
                start: 'top top', //트리거 시작 지점
                end: `+=${scrollDistance}`, //스크롤 끝나는 지점
                scrub: 0.7, //스크롤과 애니메이션 동기화
                pin: true, //요소를 화면에 고정
                invalidateOnRefresh: true, //화면 크기 변경 시 설정을 초기화
                //가로 스크롤 애니메이션 생성
                //fromTo() 애니메이션의 시작 상태와 종료상태를 정의하는 메서드
                animation: gsap.fromTo(
                    container,
                    { translateX: 0 }, //애니메이션 시작위치
                    { translateX: -scrollDistance, ease: 'none' } //애니메이션 종료
                ),
            });
        };

        
        setupScrollAnimation();

        //resize 이벤트에 핸들러 추가
        //화면 크기가 변할때마다 이벤트 재호출
        window.addEventListener('resize', setupScrollAnimation);

        return () => {
            // 컴포넌트 언마운트 시 이벤트 리스너 제거
            window.removeEventListener('resize', setupScrollAnimation);
            scrollTriggerInstance?.kill(); // 저장된 인스턴스 제거
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
