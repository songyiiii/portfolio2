import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { project } from '../../utill/data';
import { ProjectSectionStyled } from './styled';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
    const sectionRefs = useRef([]); // 각 섹션을 참조하는 배열
console.log(project)


    useEffect(() => {
        const panels = sectionRefs.current;

        panels.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: 'top top',
                pin: true,
                pinSpacing: false,
                markers: true, // 디버깅을 위한 마커
            });
        });

        // ScrollTrigger가 중복 실행되지 않도록 리턴 시 cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <ProjectSectionStyled>
            <div className="parallax__cont">
                {project.map((x, i) => (

                    <div
                        key={i}
                        className={`parallax__item ${x.className}`}
                        ref={(el) => (sectionRefs.current[i] = el)}
                    >
                        <span className="parallax__item__num">{x.id}</span>
                        <div className="parallax__item__img"></div>
                        <h2 className="parallax__item__title">{x.name}</h2>
                    </div>
                ))}
            </div>
        </ProjectSectionStyled>
    );
};

export default ProjectSection;
