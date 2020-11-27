import React, { useEffect, useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { githubHost } from '../utils';
import { Bar } from 'react-chartjs-2';

const Container = styled.div`
  padding: 5px 65px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 750px) {
    padding: 15px;
  }
`;

const Avatar = styled.img`
  width: 100%;
  max-width: 250px;
  object-fit: cover;
  border-radius: 50%;
`;

export default function UserPage() {
  const { state, state: { api, user: { web_url, url, login } = {} } = {} } =
    useLocation() || {};
  const [followers, setfollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      if (api === 'github') {
        const fetchedFollowers = await axios.get(
          `${githubHost}users/${login}/followers`
        );
        setfollowers([...fetchedFollowers.data]);
      }
    };
    fetchFollowers();
  }, [api, login]);

  if (!state || !state.user) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <div className="m-t">
        <Avatar src={state.user.avatar_url}></Avatar>
      </div>
      <div className="m-t center-text">
        <h1>{login || state.user.name}</h1>
      </div>
      <div className="m-t center-text">
        <span>Repository: {api}</span>
      </div>
      <div className="m-t center-text">
        <span>
          URL: <a href={web_url || url}>{web_url || url}</a>
        </span>
      </div>
      <div className="m-t center-text">
        {state.user.state ? (
          <span>Active: {state.user.state}</span>
        ) : (
          <div></div>
        )}
      </div>
      <div className="m-t center-text">
        <span>Id: {state.user.id}</span>
      </div>
      {followers.length > 0 ? (
        <Bar
          className="chart"
          data={{
            labels: followers.map((f) => f.login),
            datasets: [
              {
                label: 'Followers',
                data: followers.map((f, i) => i + 1),
              },
            ],
          }}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}
