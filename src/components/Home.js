import { Link } from 'react-router-dom';
import axios from 'axios';
import { gitlabHost, githubHost } from '../utils';
import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '../context/users-context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  padding: 5px 65px;
  @media screen and (max-width: 750px) {
    padding: 15px;
  }
`;

const Form = styled.form`
  position: relative;
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Text = styled.input`
  max-width: 550px;
`;

const Select = styled.select`
  cursor: pointer;
  max-width: 350px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 750px;
  margin-top: 3rem;
  padding: 1.5rem;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #54b346;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const UsersContainer = styled.div`
  position: relative;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserWrapper = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 2rem;
  margin: 2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #cfeaf6;
  border-radius: 20px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.1);
  }
`;

const Name = styled.span`
  font-weight: bold;
  margin-right: 1rem;
`;

const initialValue = {
  username: '',
  api: '',
};

const usernameValidations = [
  {
    message: 'username shouldnt be less than 4',
    validate: (u) => u.length < 4,
  },
  {
    message: 'osana salud is a forbidden word',
    validate: (u) => u.toLowerCase().trim() === 'osana salud',
  },
];

export default function Home() {
  const [users, setusers] = useContext(UserContext);
  const [search, setsearch] = useState(initialValue);
  const [disablebtn, setdisablebtn] = useState(true);

  useEffect(() => {
    return () => {
      setusers([]);
    };
  }, [setusers]);

  useEffect(() => {
    console.log(search);
    setdisablebtn(!(search.username && search.api));
  }, [search]);

  const onChange = (e) => {
    setsearch((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const checkInputValidations = () =>
    usernameValidations.find((v) => v.validate(search.username) === true);

  const onSubmit = async (e) => {
    e.preventDefault();
    const inputHasError = checkInputValidations();

    if (inputHasError) {
      toast.error(inputHasError.message);
      return;
    }

    const url =
      search.api === 'github'
        ? `${githubHost}search/users?q=${search.username}+in:user&per_page=5`
        : `${gitlabHost}search?scope=users&search=${search.username}&per_page=5&access_token=${process.env.REACT_APP_TOKEN_GITLAB}`;
    try {
      const fetchedUsers = await axios.get(url);
      console.log(fetchedUsers);
      setusers([...(fetchedUsers.data.items || fetchedUsers.data)]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Text
          type="text"
          placeholder="Username"
          name="username"
          onChange={onChange}
          className="t"
        ></Text>
        <ToastContainer />
        <Select name="api" onChange={onChange} className="t">
          <option disabled selected value="Select an API">
            Select an API
          </option>
          <option value="github">Github</option>
          <option value="gitlab">Gitlab</option>
        </Select>
        <Button className="t" disabled={disablebtn}>
          Search
        </Button>
      </Form>
      <UsersContainer>
        {users.map((u) => {
          return (
            <UserWrapper key={u.id} className="t">
              <ion-icon
                name="person-circle-outline"
                class="md hydrated black"
                size="large"
              ></ion-icon>
              <div>
                <Name>{u.login || `${u.username} / ${u.name}`}</Name>
              </div>
              <div>
                <Link
                  to={{
                    pathname: `/user/${search.api}/${u.id}`,
                    state: {
                      user: u,
                      api: search.api,
                    },
                  }}
                  className="t profile"
                >
                  Profile
                </Link>
              </div>
            </UserWrapper>
          );
        })}
      </UsersContainer>
    </Container>
  );
}
