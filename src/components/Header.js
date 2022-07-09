import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderIcons = styled.img`
  width: 40px;
  height: auto;
`;
const SearchInput = styled.input`
  font-size:18px;
  padding:5px;
  padding-bottom: 2px;
  border-radius:20px;
  width: 250px;

  &:focus{
    outline: none;
  }
`

const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
  cursor: pointer;
`;

const HeaderNav = styled.div`
  margin-left: 25px;

  span{
    cursor: pointer;
    margin-left: 20px;
    border-bottom: 2px solid #000;
    padding-bottom: 3px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding-left:10px;
  padding-right: 20px;
`;

const HeaderLogo = styled.div`
display:flex;
align-items: center;
margin-left: 5px;
cursor: pointer;
  span{
    font-weight: bold;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Logo src='img/beelogo.png' alt='logo' />
        <span onClick={() => navigate('/')}>TUTUBEE</span>
        <HeaderNav>
          <span onClick={() => navigate('/')}>HOME</span>
          <span onClick={() => navigate('/shorts')}>SHORTS</span>
          <span onClick={() => navigate('/music')}>MUSIC</span>
        </HeaderNav>
      </HeaderLogo>
      <SearchInput type='search' placeholder='검색어를 입력하세요' />
      <HeaderUser>
        <HeaderIcons src='img/filming.png' />
        <HeaderIcons src='img/bell.png' />
        <span onClick={() => navigate('/login')}>LOGIN</span>
      </HeaderUser>
    </HeaderContainer>
  );
}

export default Header;