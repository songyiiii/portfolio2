import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Profile from './components/Profile';
import Title from './components/Title';
import Project from './components/Section3';
import Contact from './components/Contact';
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)
function App() {
    //마우스의 x,y좌표를 저장할 상태 변수
    const [position, setPosition] = useState({ x: 0, y: 0 });
    //마우스를 올렸을때 커서 모양을 변경하기위한 상태 변수
    const [hover, setHover] = useState(false);
    //링크 위에 마우스를 올렸을때 나타나는 텍스트
    const [text, setText] = useState('');
    //섹션에 따라 헤더의 메뉴스타일을 업데이트할 상태변수 (아직 미사용)
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        let animationFrameId;
        const handleMouseMove = (e) => {
            //requestAnimationFrame을 이용하여 마우스가 이동할때 성능을 최적하여 상태를 업데이트함
            //애니메이션이 부드럽게 작동됨
            animationFrameId = requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    //아직 미사용 
    useEffect(() => {
        ScrollTrigger.create({
            trigger:'.profile',
            start:'top 50%',
            end:'bottom 50%',
            onEnter: () => setActiveSection('about'),
            onLeaveBack: () => setActiveSection(''), // Profile 섹션을 벗어나면 초기화
        })
        ScrollTrigger.create({
            trigger: '.section3', // Section3 섹션의 클래스
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () => setActiveSection('project'), // Section3이 뷰포트에 들어오면 project 메뉴 활성화
            onLeaveBack: () => setActiveSection(''), // Section3 섹션을 벗어나면 초기화
        });
        return () => {
            ScrollTrigger.killAll(); // 컴포넌트 언마운트 시 ScrollTrigger 정리
        };
    },[])


    //링크위로 마우스가 들어오면 hover상태를 true로 업데이트, text에 view라는 텍스트를 추가 
    //커서에 텍스트가 나타나게함
    const handleMouseEnterLink = () => {
        setHover(true);
        setText('View');
    };
    //텍스트 위로 마우스가 들어오면 hover상태를 true로 설정, text를 빈 문자열로 설정
    //단순히 크기만 변화하도록
    const handleMouseEnterText = () => {
        setHover(true);
        setText('');
    };
    //마우스가 링크나 텍스트를 벗어나면 hover를 false로 설정 text도 빈문자열로 설정
    const handleMouseLeave = () => {
        setHover(false);
        setText('');
    };


    return (
        <div>
            <div
                className={`cursor ${hover ? 'hoverd' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            >
                {text}
            </div>
            <Header
                onMouseEnterText={handleMouseEnterText}
                onMouseLeave={handleMouseLeave}
            />
            <Title />
            <Profile />
            <Project />
            <Contact />
            <Footer />
            
        </div>
    );
}

export default App;
