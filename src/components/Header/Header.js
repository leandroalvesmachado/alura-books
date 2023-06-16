import styled from 'styled-components';
import Logo from '../Logo/Logo';
import OpcoesHeader from '../OpcoesHeader/OpcoesHeader';
import IconesHeader from '../IconesHeader/IconesHeader';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
