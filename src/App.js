import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Section1 from './components/Section1';
import Section3 from './components/Section3';
import Header from './components/Header';
import SkillSection from './components/SkillSection';
import MainSection from './components/MainSection';
import ProjectSection from './components/ProjectSection';

function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        let animationFrameId;
        const handleMouseMove = (e) => {
            animationFrameId = requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleMouseEnterLink = () => {
        setHover(true);
        setText('View');
    };

    const handleMouseEnterText = () => {
        setHover(true);
        setText('');
    };
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
            <MainSection
                onMouseEnterText={handleMouseEnterText}
                onMouseLeave={handleMouseLeave}
            />
            <Section1
                onMouseEnterText={handleMouseEnterText}
                onMouseLeave={handleMouseLeave}
            />
            <SkillSection
                onMouseEnterText={handleMouseEnterText}
                onMouseLeave={handleMouseLeave}
                onMouseEnterLink={handleMouseEnterLink}
            />
            {/* <Section3
                onMouseEnterText={handleMouseEnterText}
                onMouseLeave={handleMouseLeave}
                onMouseEnterLink={handleMouseEnterLink}
            /> */}
            <ProjectSection />
        </div>
    );
}

export default App;
