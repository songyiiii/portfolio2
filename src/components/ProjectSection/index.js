import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { project } from '../../utill/data';
import { ProjectSectionStyled } from './styled';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
    const sectionRefs = useRef([]); // 각 섹션을 참조하는 배열

    useEffect(() => {
        const panels = sectionRefs.current;
        console.log(panels, 'dfdf');

        panels.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: 'top top',
                pin: true,
                pinSpacing: false,
            });
        });


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <ProjectSectionStyled>
            <div className="parallax_cont">
                {project.map((x, i) => (
                    <div
                        key={i}
                        className={`parallax_item ${x.className}`}
                        ref={(el) => (sectionRefs.current[i] = el)}
                    >
                        <div className="parallax_img">
                            <a href={x.link}>
                                <img src={x.img}></img>
                            </a>
                        </div>
                        <div className="parallax_title">
                        <span>{x.id}</span><p className='name'>{x.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ProjectSectionStyled>
    );
};

export default ProjectSection;
