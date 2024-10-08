import { HeaderStyled } from './styled';

const Header = ({
    onMouseEnterText,
    onMouseLeave,
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
                        onClick={() => scrollToSection('about')}
                        onMouseEnter={onMouseEnterText}
                        onMouseLeave={onMouseLeave}
                    >
                        ABOUT
                    </li>
                    <li
                        onClick={() => scrollToSection('project')}
                        onMouseEnter={onMouseEnterText}
                        onMouseLeave={onMouseLeave}
                    >
                        PROJECT
                    </li>
                    <li
                        onClick={() => scrollToSection('contact')}
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
