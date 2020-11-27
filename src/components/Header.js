import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 15px 65px;
  display: flex;
  align-items: center;
  background-color: #1E1E1E;
  @media screen and (max-width: 750px){
    padding: 15px;
  }
`;

const Title = styled.div`
  flex-grow: 1;
`;

const H1 = styled.h1`
  color: #F3F3F3;
  &:hover {
    opacity: 0.7;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>
        <Link to="/">
          <H1 className="t">Git Users Seach</H1>
        </Link>
      </Title>
      <div>
        <ion-icon name="logo-github" size="large" className="gh-icon"></ion-icon>
      </div>
    </HeaderContainer>
  )
}
