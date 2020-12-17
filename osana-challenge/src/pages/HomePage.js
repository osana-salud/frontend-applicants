import React from 'react';
import styled from "styled-components";
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import imageHome from '../assets/bg-home.jpg';
import UserService from '../services/UserServices';

const HomeStyled = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-width: 350px;
height: 100%;
color: #005500;
background-image: url(${imageHome});
background-size: cover;
background-position: center top;
background-repeat: no-repeat;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color: transparent;

& .card-home {
  width: 45%;
  max-width: 1000px;
  min-width: 310px;
  height: 500px;
}
`;

const StyleTitle = styled.div`
  display: flex;
  justify-content: center;
  aling-items: center;
  margin-top: 45px;
  margin-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-width: 300px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`;

const SelectApi = styled.select`
  height: 35px;
  width: 100%;
  min-width: 300px;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 8px; 
  border: 1px solid #005500;
  outline: none;
  cursor: pointer;

  & .option {
  }
`;

const Buttons = styled.button`
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  width: 60px;
  height: 43px;
  color: #fff;
  background: #005500;
  outline: none;
`;

const ResultStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  heigth: 100%;
  font-size: 2.2em;
`;

const AvatarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  heigth: 100%;

  & img {
    border-radius: 300px;
  }
`;

const InfoUser = styled.div`
  font-size: 1.5em;
`;

function HomePage() {
  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState('');
  const onSearch = async () => {
    const r = await UserService.get(input);
    setResult(r.data)
  }
  return (
    <HomeStyled>
      <Wrapper>
        <StyleTitle>
          <h1>Bienvenido a su buscador!</h1>
        </StyleTitle>
        <InputContainer>
          <SearchBar value={input} onChange={(e) => setInput(e.target.value)} />
          <Buttons onClick={onSearch}>Buscar</Buttons>
        </InputContainer>
        <SelectApi>
          <option className="option" value="gitlab">Github</option>
          <option className="option" value="github">Github</option>
        </SelectApi>
        <Card className="card-home">
          <ResultStyle>
            {result.login}
          </ResultStyle>
          <AvatarStyle>
            <img src={result.avatar_url} alt="avatar" />
          </AvatarStyle>
          <InfoUser>
            <div> Id: {result.id}</div>
            <div> Name:  {result.login}</div>
            <div> Type: {result.type}</div>
            <div> Link: <a href={result.url}>{result.url}</a></div>
          </InfoUser>
        </Card>
      </Wrapper>
    </HomeStyled>
  )
}

export default HomePage;
