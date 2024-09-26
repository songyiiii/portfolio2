import { useEffect, useRef } from 'react';
import Matter, { Runner } from 'matter-js';
import { SkillSectionStyled } from './styled';
import { skillImg } from '../../utill/data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillSection = ({ onMouseEnterText, onMouseLeave }) => {
    const containerRef = useRef(null); //skill 컴포넌트 참조
    const canvasRef = useRef(null); //canvas 참조
    const titleRef = useRef(null); //h1태그 참조

    //Matter.js의 물체 생성 함수(사각형, 원 등의 물체를 만듬)
    const Bodies = Matter.Bodies;
    //Matter.js이 물리엔진과 렌더링을 제어하는 객체
    let engine, render;

    // Matter.js의 물리 물체 생성
    const elements = [];
    for (let i = 0; i < skillImg.length; i++) {
        //각 이미지 요소의 위치와 크기를 랜덤으로 설정
        //x좌표를 화면 너비 내에서 랜덤하게 설정
        const x = Math.random() * window.innerWidth;
        //y좌표는 150으로 설정 (해당 높이에서 요소가 떨어짐)
        const y = 50;
        //물체의 너비와 높이를 랜덤으로 설정 (50~150px사이)
        const width = Math.random() * 100 + 50;
        const height = Math.random() * 100 + 50;
        //각 물체에 적용될 이미지
        const img = skillImg[i];

        //사각형 모양의 물체를 생성 (이미지를 sprite로 설정)
        const element = Bodies.rectangle(x, y, width, height, {
            chamfer: { radius: [10, 10] }, //cahmfer: 모서리 둥글기 설정
            render: {
                sprite: {
                    texture: img, //선택한 이미지
                    xScale: 0.5, //이미지 가로 크기 비율 (50%로 축소)
                    yScale: 0.5, // 이미지 세로 크기 비율 (50%로 축소)
                },
            },
            restitution: 0.6, //반발력 (물체가 충돌시 어느정도 튕길지 숫자클수록 커집)
        });
        elements.push(element); //배열에 생성한 물체를 추가
    }
    //화면의 너비와 높이를 기준으로 벽과 바닥을 설정
    const clientWidth = window.innerWidth;
    const clientHeight = window.innerHeight;

    //벽 생성 (물체가 화면 밖으로 나가는것을 방지)
    //Bodies.rectangle(x,y,width,height,options)
    const floor = Bodies.rectangle(
        //첫번째인자: x좌표 -> 화면의너비를 2로 나눠서 바닥의 중심이 화면의 가운데에 위치하게함
        clientWidth / 2,
        //두번째인자: y좌표 -> 화면 하단에서 50px위에 바닥을 배치하기위해 설정
        clientHeight  ,
        //세번째인자: 바닥의 너비 -> 화면의 전체너비
        clientWidth,
        //네번째인자: 바닥의 높이 
        10,
        {
            isStatic: true, //isStatic:true = 바닥이 고정되어 움직이지 않음
            render: { fillStyle: '#fff' }, //색상 설정
        }
    );

    const floorLeft = Bodies.rectangle(0, clientHeight / 2, 100, clientHeight, {
        isStatic: true, //왼쪽벽 고정
        render: { fillStyle: '#fff' },
    });

    const floorRight = Bodies.rectangle(
        clientWidth,
        clientHeight / 2,
        100,
        clientHeight,
        {
            isStatic: true, //오른쪽 벽 고정
            render: { fillStyle: '#fff' },
        }
    );

    const floorTop = Bodies.rectangle(clientWidth / 2, -10, clientWidth, 50, {
        isStatic: true, //상단 벽 고정
        render: { fillStyle: '#fff' },
    });

    useEffect(() => {
        gsap.fromTo(
            //h1요소(애니메이션이 적용될 요소)
            titleRef.current,
            //초기상태
            { fontSize: '8rem' },
            {
                fontSize: '6rem', //스크롤할때 글씨가 작아짐
                duration: 3, //애니메이션 3초간 진행
                ease: 'power2.inOut', //부드러운 애니메이션 효과 (inout: 양쪽에서 부드럽게 시작하고 끝나는 애니메이션)
                scrollTrigger: {
                    //scrollTrigger 설정
                    trigger: containerRef.current, // 이 요소에 스크롤이 도달할때 애니메이션 실행
                    start: 'top 40%', //스크롤 화면의 40%에 도달했을때 시작
                    end: 'top 0%', //스크롤 화면의 0%에 도달했을때 종료
                    scrub: true, //스크롤할때 애니메이션이 스크롤 속도에 맞춰 재생
                    // markers: true, 
                    onEnter: () => {
                        //스크롤이 섹션에 들어왔을때 실행되는 코드
                        // Matter.js 물리 엔진을 초기화하고 물리효과 실행
                        const {
                            Engine,
                            Render,
                            World,
                            Body,
                            Mouse,
                            MouseConstraint,
                        } = Matter;
                        //엔진 생성
                        engine = Engine.create();
                        //중력 설정
                        engine.gravity.y = 0.8;

                        const canvasWidth = window.innerWidth;
                        const canvasHeight = window.innerHeight;
                        render = Render.create({
                            element: containerRef.current, //렌더링할 요소
                            engine: engine, //물리 엔진 설정
                            canvas: canvasRef.current, //캔버스 요소 설정
                            bounds: {
                                min: { x: 0, y: 0 }, //캔버스 최소 좌표
                                max: { x: canvasWidth, y: canvasHeight }, //캔버스 최대 좌표
                            },
                            options: {
                                showSeparations: true, //충돌 분리 여부 시각화
                                width: canvasWidth, //캔버스 너비
                                height: canvasHeight, //캔버스 높이
                                background: '#fff', //배경 색상
                                wireframes: false, //물체를 실제 이미지로 표시 (true면 윤곽선만 나타남)
                            },
                        });

                        // 마우스 인터랙션 추가
                        //Mouse.create(): 특정 캔버스요소에 마우스 입력을 인식하는 마우스 객체 생성
                        //render.canvas: render객체에서 렌더링되는 캔버스요소를 참조
                        const mouse = Mouse.create(render.canvas);
                        //MouseConstraint.create(): 마우스 상호작용을 엔진에 추가하는 역할
                        //마우스를 이용해 물체들을 드래그하거나 클릭하여 물리적 상호작용을 할 수 있게 만듬
                        const mouseConstraint = MouseConstraint.create(engine, {
                            //위에서 생성된 마우스 객체를 참조해 마우스 입력은 인식
                            mouse: mouse,
                            //constraint: 마우스가 물체와 상호작용할때 물체에 가해지는 제약을 설정하는 옵션
                            constraint: {
                                //물체와 마우스 사이의 강성을 설정 
                                //값이 클수록 물체가 마우스를 더 빠르게 따라감
                                stiffness: 0.2,
                                //마우스로 물체를 끌어당길때 제약이 시각적으로 나타나지않게함
                                render: {
                                    visible: false,
                                },
                            },
                        });

                        const runner = Runner.create();
                        Runner.run(runner, engine); //엔진 실행
                        //바닥과벽, 생성한 물체들, 마우스상호작용 월드에 추가
                        World.add(engine.world, [
                            floor,
                            floorLeft,
                            floorRight,
                            floorTop,
                            ...elements,
                            mouseConstraint,
                        ]);

                        elements.forEach((element) => {
                            //각 물체를 랜덤하게 회전
                            const randomRotation = Math.random() * Math.PI * 2;
                            Body.rotate(element, randomRotation);
                        });

                        Render.run(render);
                    },
                    onLeave: () => {
                        // 섹션을 벗어나면 Matter.js 엔진 중지 및 정리
                        if (engine) {
                            Matter.Engine.clear(engine);
                        }
                    },
                },
            }
        );
    }, []);

    return (
        <SkillSectionStyled
            ref={containerRef}
            style={{ width: '100vw', height: '100vh' }}
        >
            <h1
                ref={titleRef}
                onMouseEnter={onMouseEnterText}
                onMouseLeave={onMouseLeave}
            >
                I have used <br />these skills
            </h1>
            <canvas ref={canvasRef}></canvas>
        </SkillSectionStyled>
    );
};

export default SkillSection;
