import React, { useState, useEffect } from "react";
import { Form, Card, Image, Icon, Button } from "semantic-ui-react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [url, setUrl] = useState("");
  const [username, setUserName] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({ name, login, public_repos, avatar_url, id, html_url }) => {
    setName(name);
    setUserName(login);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setId(id);
    setUrl(html_url);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      });
  };

  return (
    <div className="main">
      <div className="search">
        <div>
          <h1>Git Search</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Search user"
              name="user"
              minLength="4"
              onChange={handleSearch}
            />
            <Form.Button content="Search" />
          </Form.Group>
        </Form>
      </div>
      <div className="card-container">
        {error ? (
          <h1>{error}</h1>
        ) : (
          <Card>
            <Image src={avatar} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Name: {name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                Username: {username}
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="address card" />
                Id {id}
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="folder" />
                {repos} Repositories
              </a>
            </Card.Content>
            <Button href={url} target="_blank" rel="noreferrer">
              Go
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
