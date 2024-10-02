import { HeaderStyled } from "./styled"

const Header = ({onMouseEnterText,onMouseLeave, activeSection}) => {
    return(
        <HeaderStyled>
            <nav>
                <div className="logo" >
                    <a href="/" onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeave}>Portfolio</a>
                </div>
                <ul>
                    <li><a href="" onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeave}>ABOUT</a></li>
                    <li><a href="" onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeave}>PROJECT</a></li>
                    <li ><a href="" onMouseEnter={onMouseEnterText} onMouseLeave={onMouseLeave}>CONTACT</a></li>
                </ul>
            </nav>
        </HeaderStyled>
    )
}
export default Header