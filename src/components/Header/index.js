import { HeaderStyled } from './styled';

const Header = ({
    onMouseEnterText,
    onMouseLeave,
    activeSection,
    scrollToSection,
}) => {
    return (
        <HeaderStyled>
            <nav>
                <div className="logo"> 
                    <a
                        href="/"
                        onMouseEnter={onMouseEnterText}
                        onMouseLeave={onMouseLeave}
                    >
                        Portfolio
                    </a>
                </div>
                <ul>
                    <li
                        className={activeSection === 'about' ? 'active' : ''}
                        onClick={() => scrollToSection('about')}
                    >
                        <a
                            href="#"
                            onMouseEnter={onMouseEnterText}
                            onMouseLeave={onMouseLeave}
                        >
                            ABOUT
                        </a>
                    </li>
                    <li
                        onClick={() => scrollToSection('project')}
                        className={activeSection === 'project' ? 'active' : ''}
                    >
                        <a
                            href="#"
                            onMouseEnter={onMouseEnterText}
                            onMouseLeave={onMouseLeave}
                        >
                            PROJECT
                        </a>
                    </li>
                    <li
                        onClick={() => scrollToSection('contact')}
                        className={activeSection === 'contact' ? 'active' : ''}
                    >
                        <a
                            href="#"
                            onMouseEnter={onMouseEnterText}
                            onMouseLeave={onMouseLeave}
                        >
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </HeaderStyled>
    );
};
export default Header;
