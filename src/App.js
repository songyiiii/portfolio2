import './App.css';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Profile from './components/Profile';
import Title from './components/Title';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);
function App() {
    //마우스의 x,y좌표를 저장할 상태 변수
    const [position, setPosition] = useState({ x: 0, y: 0 });
    //마우스를 올렸을때 커서 모양을 변경하기위한 상태 변수
    const [hover, setHover] = useState(false);
    //링크 위에 마우스를 올렸을때 나타나는 텍스트
    const [text, setText] = useState('');

    const profileRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            //requestAnimationFrame을 이용하여 마우스가 이동할때 성능을 최적하여 상태를 업데이트함
            //애니메이션이 부드럽게 작동됨
            requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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
                //섹션이라는 매개변수를 받음
                //각 섹션이 null이 아닌 경우 scrollIntoView 메서드를 호출해 해당 섹션으로 스크롤
                //scrollIntoView: 특정 요소가 화면에 보이도록 스크롤을 이동
                scrollToSection={(section) => {
                    if (section === 'about' && profileRef.current) {
                        profileRef.current.scrollIntoView({
                            behavior: 'smooth',
                        });
                    }
                    if (section === 'project' && projectRef.current) {
                        projectRef.current.scrollIntoView({
                            behavior: 'smooth',
                        });
                    }
                    if (section === 'contact' && contactRef.current) {
                        contactRef.current.scrollIntoView({
                            behavior: 'smooth',
                        });
                    }
                }}
            />
            <Title />
            <Profile ref={profileRef} />
            <Project
                ref={projectRef}
                handleMouseEnterLink={handleMouseEnterLink}
                handleMouseLeave={handleMouseLeave}
            />
            <Contact ref={contactRef} />
            <Footer />
        </div>
    );
}

export default App;
