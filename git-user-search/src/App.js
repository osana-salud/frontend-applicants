import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  return (
    <div>
      <Button>Hola</Button>
      <Button>Hola</Button>
      <Card>
        <Card.Img />
        <Card.Body>
          <Card.Title>Titulo</Card.Title>
          <Card.Text>Descripcion</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
