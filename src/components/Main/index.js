import { useEffect } from 'react';
import { MainStyled } from './styled';
import { gsap } from 'gsap';
import { project } from '../../utill/data';

const Main = ({ onMouseEnterText, onMouseLeave, onMouseEnterLink }) => {
    useEffect(() => {
        gsap.fromTo(
            '.project',
            { x: '-100%', opacity: 0 }, // 초기 상태
            {
                x: '10%',
                opacity: 0.2,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.project', // 애니메이션을 실행할 요소
                    start: 'top top', // 애니메이션 시작 시점 (뷰포트의 80%에서 시작)
                    // end: 'top 10%', // 애니메이션 종료 시점 (뷰포트의 50%에서 종료)
                    scrub: 0.3, // 스크롤에 따라 애니메이션이 진행
                },
            }
        );
        gsap.utils.toArray('.projectImg').forEach((img) => {
            gsap.fromTo(
                img,
                { filter: 'grayscale(50%)' }, // 초기 상태 흑백
                {
                    filter: 'grayscale(0%)', // 컬러로 전환
                    scrollTrigger: {
                        trigger: img, // 각 이미지에 대한 트리거
                        start: 'top 90%', // 이미지가 뷰포트 상단에서 90%에 도달할 때 시작
                        scrub: true, // 스크롤에 따라 애니메이션이 부드럽게 진행
                    },
                }
            );
        });
    }, []);
    return (
        <MainStyled>
            <h1 className="project">PROJECT</h1>
            {project.map((x, i) =>
                i === 0 ? (
                    <div key={x.id} className="container-top">
                        <div
                            className="top-title"
                            onMouseEnter={onMouseEnterText}
                            onMouseLeave={onMouseLeave}
                        >
                            {x.name}
                        </div>
                        <div className="top-img">
                            <img
                                src={x.img}
                                onMouseEnter={onMouseEnterLink}
                                onMouseLeave={onMouseLeave}
                                className="projectImg"
                            ></img>
                        </div>
                        <div className="top-info">
                            <div
                                className="right-top-text"
                                onMouseEnter={onMouseEnterText}
                                onMouseLeave={onMouseLeave}
                            >
                                {' '}
                                {x.info.map((x, i) => {
                                    return <p key={i}>{x}</p>;
                                })}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div key={x.id} className="container-bottom">
                        <div className="bottom-img">
                            <img
                                src={x.img}
                                alt={x.name}
                                onMouseEnter={onMouseEnterLink}
                                className="projectImg"
                            />
                        </div>

                        <div
                            className="right-top-text"
                            onMouseEnter={onMouseEnterText}
                            onMouseLeave={onMouseLeave}
                        >
                            {x.info.map((x, i) => {
                                return <p key={i}>{x}</p>;
                            })}
                        </div>
                        <div className="right-bottom-text">
                            {x.name.toUpperCase()}
                        </div>
                    </div>
                )
            )}
        </MainStyled>
    );
};
export default Main;
