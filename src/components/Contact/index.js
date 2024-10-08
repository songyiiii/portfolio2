import React from 'react';
import { ContactStyled } from './styled';
import { SiNotion } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";


const 
Contact = React.forwardRef((props, ref) => {
    return (
        <ContactStyled ref={ref}>
            <h1>Contact</h1>
            <div className="icons">
                <a href='https://github.com/songyiiii' target='_blanck'> <FaGithub /></a>
                <a href='https://www.notion.so/113925c20ee68090825dfb0a58408145?pvs=4' target='_blanck'><SiNotion /></a>
                <a href='mailto:gksthddl43@daum.net'><IoIosMail /></a>
                <a href='tel:010-4255-6927'><IoPhonePortraitOutline />
                </a>
            </div>
        </ContactStyled>
    );
});
export default Contact;
