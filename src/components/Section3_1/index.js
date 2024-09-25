import { Section3_1Styled } from './styled';

const Section3_1 = ({ onMouseEnterText, onMouseLeave, onMouseEnterLink }) => {
    return (
        <Section3_1Styled>
            <div className="text">
                <div onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeave}>PROJECT</div>
                <div>
                    <p onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeave}>ARTS</p>
                    <p onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeave}>Auction Chance</p>
                </div>
            </div>
        </Section3_1Styled>
    );
};
export default Section3_1;
