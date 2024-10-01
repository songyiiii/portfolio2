import { ProjectStyled } from './styled';
import { project } from '../../utill/data';

const Project = () => {
    return (
        <ProjectStyled>
            <h2>Project</h2>
            {project.map((x, i) => {
                return (
                    <div className="project-section">
                        <img src={x.img}></img>
                    </div>
                );
            })}
        </ProjectStyled>
    );
};
export default Project;
