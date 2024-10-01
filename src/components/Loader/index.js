import { useEffect, useState,useRef } from 'react';
import { LoaderStyled } from './styled';
import { gsap } from 'gsap';

const Loader = () => {
    const LoaderRef = useRef(null)
    useEffect(() => {
        gsap.to(LoaderRef.current, {
            delay: 1.5,
            duration: 1,
            top: '-110%',
        });
    }, []);

    return (
        <LoaderStyled ref={LoaderRef}>
            <div className="loader">
                <div className="scroll-text scroll-right">
                    PORTFOLIO FRONTEND, PORTFOLIO FRONTEND, PORTFOLIO FRONTEND
                </div>
                <div className="scroll-text scroll-left">
                    PORTFOLIO FRONTEND, PORTFOLIO FRONTEND, PORTFOLIO FRONTEND
                </div>
                <div className="scroll-text scroll-right">
                    PORTFOLIO FRONTEND, PORTFOLIO FRONTEND, PORTFOLIO FRONTEND
                </div>
                <div className="scroll-text scroll-left">
                    PORTFOLIO FRONTEND, PORTFOLIO FRONTEND, PORTFOLIO FRONTEND
                </div>
                <div className="intro">
                    <h1 className="intro-title">PORTFOLIO</h1>
                </div>
            </div>
        </LoaderStyled>
    );
};
export default Loader;
