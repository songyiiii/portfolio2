import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section1Styled } from './styled';
gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 등록

const Section1 = ({ onMouseEnterText, onMouseLeave }) => {
    const section1Ref = useRef(null);
    const textArray = [
        'I',
        'aspire',
        'to',
        'grow',
        'through',
        'diverse',
        <br key="break" />,
        'experiences',
        'and',
        'continuously',
        <br key="break" />,
        'evolve',
        'through',
        'challenges.',
    ];

    useEffect(() => {
        gsap.fromTo(
            section1Ref.current.querySelectorAll('span'),
            { opacity: 0.3 },
            {
                opacity: 1,
                stagger: 0.1, // 각 글자가 순차적으로 변화
                scrollTrigger: {
                    trigger: section1Ref.current,
                    start: 'top top', // 
                    end: 'bottom 30%',
                    scrub: true,
                    // markers:true
                },
            }
        );
    }, []);
    return (
        <Section1Styled ref={section1Ref}>
            <div onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeave}>
                {textArray.map((char, index) => (
                    <span key={index} style={{ opacity: 0.3 }}>
                        {char}
                    </span>
                ))}
            </div>
        </Section1Styled>
    );
};

export default Section1;
