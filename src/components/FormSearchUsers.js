import React, { useState } from "react";
import { Form, Button, Alert, ListGroup, Col, Row } from "react-bootstrap";
import axios from "axios";
import UserListItem from "./UserListItem";
import {
  GITHUB_TOKEN,
  GITHUB_URL,
  GITLAB_TOKEN,
  GITLAB_URL,
} from "../utils/constants";

export default function FormSearchUsers() {
  const [formValue, setFormValue] = useState("");
  const [githlabUsers, setGitlabUsers] = useState([]);
  const [githubUsers, setGithubUsers] = useState([]);
  const [errorFormValue, setErrorFormValue] = useState(null);

  const onChange = (e) => {
    const searchText = e.target.value;
    setFormValue(searchText);
    if (searchText.length < 4) {
      setErrorFormValue("Cantidad mínima de caracteres: 4.");
      return;
    } else if (searchText === "osana-salud") {
      setErrorFormValue("La búsqueda esta restringida.");
      return;
    }
    setErrorFormValue(null);
    axios
      .get(`${GITHUB_URL}?q=${searchText}+in:users`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
      .then((r) => {
        if (r.data && r.data.items.length > 0) {
          const githubUsers = r.data.items.slice(0, 5).map((u) => {
            return {
              id: u.id,
              login: u.login,
              avatar: u.avatar_url,
            };
          });
          setGithubUsers(githubUsers);
        }
      });
    axios
      .get(`${GITLAB_URL}?search=${searchText}`, {
        headers: { "PRIVATE-TOKEN": GITLAB_TOKEN },
      })
      .then((r) => {
        if (r.data && r.data.length > 0) {
          const users = r.data.slice(0, 5).map((u) => {
            return {
              id: u.id,
              login: u.username,
              avatar: u.avatar_url,
            };
          });
          setGitlabUsers(users);
        }
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit} className="m-3">
      <Row>
        <Col className="offset-1" sm={10}>
          <Form.Group className="text-center">
            <h1>Búsqueda de usuarios</h1>
          </Form.Group>
          <Form.Group className="text-center">
            <Form.Control
              onChange={onChange}
              type="text"
              name="name"
              value={formValue}
              placeholder="Escribe el nombre de usuario"
            />
            <ListGroup>
              {githubUsers.map((user) => (
                <UserListItem
                  key={user.id.toString()}
                  user={user}
                  platform="Github"
                />
              ))}
              {githlabUsers.map((user) => (
                <UserListItem
                  key={user.id.toString()}
                  user={user}
                  platform="Gitlab"
                />
              ))}
            </ListGroup>
          </Form.Group>
          <div className="justify-content-center text-center">
            <Button variant="primary" size="lg" type="submit">
              Enviar
            </Button>
            {errorFormValue && (
              <Alert variant="danger" className="mt-4">
                {errorFormValue}
              </Alert>
            )}
          </div>
        </Col>
      </Row>
    </Form>
  );
}
