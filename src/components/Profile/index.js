import React from 'react';
import { ProfileStyled } from './styled';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { profileData } from '../../utill/data';

gsap.registerPlugin(ScrollTrigger);

const Profile = React.forwardRef((props, ref) => {
    useEffect(() => {
        const items = gsap.utils.toArray('.parallax__item');

        // 각 아이템에 대해 애니메이션 설정
        items.forEach((item) => {
            const h2 = item.querySelector('h2'); // 각 섹션의 h2 요소

            // h2 텍스트를 한 글자씩 <span>으로 감싸기
            const text = h2.textContent;
            h2.innerHTML = ''; // 기존 텍스트 제거
            text.split('').forEach((char) => {
                const span = document.createElement('span');
                span.textContent = char;
                h2.appendChild(span);
            });

            // 스크롤에 따라 글자의 색상이 변하는 애니메이션 설정
            const spans = h2.querySelectorAll('span');
            gsap.fromTo(
                spans,
                { color: 'black' }, // 초기 색상
                {
                    color: 'white', // 스크롤에 따라 변할 색상
                    stagger: 0.1, // 글자마다 차례대로 애니메이션 적용
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'bottom 30%',
                        scrub: true, // 스크롤에 따라 애니메이션이 자연스럽게 발생
                    },
                }
            );
            // opacity 애니메이션
            gsap.fromTo(
                item,
                { autoAlpha: 0, x: 100, y: 0 },
                {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: 'expo',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 70%',
                        end: 'bottom 20%',
                        toggleActions: 'play reverse play reverse', // 스크롤을 올릴 때 다시 사라지도록 설정
                    },
                }
            );
            item.style.opacity = '0';
        });

        // cleanup: 컴포넌트가 언마운트될 때 ScrollTrigger 제거
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <ProfileStyled ref={ref}>
            <div className="parallax__item item1">
                <h2>About me</h2>
                <div className="content">
                    <p>한송이</p>
                    <p>1995.04.08</p>
                    <p>ISTP</p>
                    <p>서울시 서초구</p>
                </div>
            </div>
            <div className="parallax__item item2">
                <h2>Education</h2>
                <div className="content">
                    <p>
                        <span>2014.03 - 2016.03</span>용인 송담대학교
                        세무회계학과
                    </p>
                    <p>
                        <span>2023.04 - 2023.06</span>
                        sbs아카데미 웹퍼블리셔 과정
                    </p>
                    <p>
                        <span>2024.06 - </span>posco x codingOn 웹풀스택 13기
                    </p>
                </div>
            </div>
            <div className="parallax__item item3">
                <h2>Career</h2>
                <div className="content">
                    <p>
                        <span>2015.10 - 2023.03</span>(주)두노코리아 관리부
                    </p>
                    <p>
                        <span>2023.02 - 2024.03</span>포도수원인계점(와인샵
                        운영)
                    </p>
                </div>
            </div>
            <div className="parallax__item item4">
                <h2>Skills</h2>
                <div className="content">
                    <p>Node.js</p>
                    <p>React</p>
                    <p>TypeScript</p>
                    <p>Next.js</p>
                    <p>matter.js</p>
                    <p>GSAP</p>
                    <p>Swiper</p>
                    <p>Ant Design</p>
                    <p>MySql</p>
                    <p>aws</p>
                </div>
            </div>
        </ProfileStyled>
    );
});

export default Profile;
