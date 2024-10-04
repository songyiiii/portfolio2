import { ContactStyled } from './styled';
import { SiNotion } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

const Contact = () => {
    return (
        <ContactStyled>
            <h1>Contact</h1>
            <div className="icons">
                <a> <FaGithub /></a>
                <a><SiNotion /></a>
                <a><IoIosMail /></a>
            </div>
        </ContactStyled>
    );
};
export default Contact;
