import { useEffect, useState } from 'react';
import { TextSectionStyled } from './styled';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextSection = () => {
    // p태그중 hover된 인덱스저장
    const [hoverIndex, setHoverIndex] = useState(null);

    const englishSentences = [
        'I aspire to grow through diverse',
        'experiences and continuously',
        'evolve through challenges.',
    ];

    const koreanSentences = [
        '다양한 경험을 통해 성장하고 싶습니다',
        '경험을 통해 끊임없이 발전합니다',
        '도전을 통해 진화합니다',
    ];

    useEffect(() => {
        //모든 p태그를 배열로 변환
        const paragraphs = gsap.utils.toArray('.text-container p');
        //각 p태그마다 애니메이션과 스크롤트리거 설정
        paragraphs.forEach((pTag) => {
            gsap.fromTo(
                pTag,
                { backgroundColor: '#fff', color: '#000' }, // 초기 배경색과 텍스트 색상
                {
                    backgroundColor: '#000', // 스크롤 시 변경될 배경색
                    color: '#fff', // 스크롤 시 변경될 텍스트 색상
                    scrollTrigger: {
                        trigger: pTag, // 각 <p> 태그가 트리거가 됨
                        start: 'top %', // 스크롤이 이 위치에 도달할 때 애니메이션 시작
                        end: 'top 30%', // 스크롤이 이 위치에 도달할 때 애니메이션 종료
                        toggleActions: 'play none none reverse',

                    },
                }
            );
        });
    }, []);

    return (
        <TextSectionStyled>
            <div className="text-container">
                {englishSentences.map((sentence, i) => (
                    <p
                        key={i}
                        onMouseEnter={() => setHoverIndex(i)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {hoverIndex === i ? koreanSentences[i] : sentence}
                    </p>
                ))}
            </div>
        </TextSectionStyled>
    );
};

export default TextSection;
