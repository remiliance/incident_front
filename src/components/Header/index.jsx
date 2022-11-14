import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
    return (
      <NavContainer>
        <Link to="/">
          <HomeLogo src={DarkLogo} />
        </Link>
            <StyledLink to="/" $isFullLink>Accueil</StyledLink>
            <StyledLink to="/cmdbci" $isFullLink>Liste de Cmdbci</StyledLink>
            <StyledLink to="/search" $isFullLink>Recherche</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>
                Faire le test
            </StyledLink>
      </NavContainer>
    )
}

export default Header
