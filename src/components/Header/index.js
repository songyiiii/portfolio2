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
                        onMouseEnter={onMouseEnterText}
                        onMouseLeave={onMouseLeave}
                    >
                        ABOUT
                    </li>
                    <li
                        onClick={() => scrollToSection('project')}
                        className={activeSection === 'project' ? 'active' : ''}
                        onMouseEnter={onMouseEnterText}
                        onMouseLeave={onMouseLeave}
                    >
                        PROJECT
                    </li>
                    <li
                        onClick={() => scrollToSection('contact')}
                        className={activeSection === 'contact' ? 'active' : ''}
                        onMouseEnter={onMouseEnterText}
                        onMouseLeave={onMouseLeave}
                    >
                        CONTACT
                    </li>
                </ul>
            </nav>
        </HeaderStyled>
    );
};
export default Header;
