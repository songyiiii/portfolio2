import { AboutStyled } from './styled';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const parallaxRef = useRef(null); // parallax 요소를 참조할 수 있는 ref 생성

    useEffect(() => {
        // gsap 타임라인 설정
        const ani2 = gsap.timeline({
            defaults: { duration: 1, ease: 'power2.out' },
        });

        // parallax-item들을 배열로 선택
        const items = gsap.utils.toArray('.parallax-item');

        // 각 요소에 대한 애니메이션 추가
        ani2.from(items[0], { y: -100, autoAlpha: 0, borderRadius: 200 })
            .from(items[1], { y: 100, autoAlpha: 0, borderRadius: 200 }, '-=0.5')
            .from(items[2], { y: -100, autoAlpha: 0, borderRadius: 200 }, '-=0.5');

        // ScrollTrigger 설정
        ScrollTrigger.create({
            animation: ani2,
            trigger: parallaxRef.current, // parallaxRef를 트리거로 설정
            start: 'top top',
            end: '+=2000',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            markers: true, // 디버깅을 위해 markers 활성화
        });

        // cleanup: 컴포넌트가 언마운트될 때 ScrollTrigger 제거
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <AboutStyled>
            <div className="parallax" ref={parallaxRef}>
                <div className="parallax-item i1">한송이</div>
                <div className="parallax-item i2">1995.04.08</div>
                <div className="parallax-item i3">ISTP</div>
            </div>
        </AboutStyled>
    );
};

export default About;
