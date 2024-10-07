import { Section3_2Styled } from './styled';

const Section3_2 = ({ x, onMouseEnterLink, onMouseLeave }) => {
    return (
        <Section3_2Styled>
            <div className="number">{x.id}</div>
            <div className="title">
                <p>{x.name}</p>
                <p>{x.info}</p>
            </div>
            <div className="imgBox">
                <a
                    href={x.link}
                    onMouseEnter={onMouseEnterLink}
                    onMouseLeave={onMouseLeave}
                    target="_blank"
                >
                    <img src={x.img}></img>
                </a>
            </div>
            <div className="textBox">
                <p>
                    {x.tag.map((x, i) => {
                        return <span>{x}</span>;
                    })}
                </p>
            </div>
        </Section3_2Styled>
    );
};
export default Section3_2;
