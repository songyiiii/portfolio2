import { ProjectStyled } from './styled';

const Project = ({ x, onMouseEnterLink, onMouseLeave }) => {
    return (
        <ProjectStyled>
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
                    rel="noreferrer"
                >
                    <img src={x.img} alt='프로젝트 이미지'></img>
                </a>
            </div>
            <div className="textBox">
                <p>
                    {x.tag.map((x, i) => {
                        return <span>{x}</span>;
                    })}
                </p>
            </div>
        </ProjectStyled>
    );
};
export default Project;
