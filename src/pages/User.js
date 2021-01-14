import { Button, Card } from "react-bootstrap";
import React from "react";
import BarChart from "react-bar-chart";
import axios from "axios";
import {
  GITHUB_TOKEN,
  GITHUB_USERS_URL,
  GITLAB_TOKEN,
  GITLAB_URL,
} from "../utils/constants";

const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const CARD_STYLE = {
  width: "18rem",
  margin: "auto",
  justifyContent: "center",
  display: "flex",
  flex: 1,
};

export function User(props) {
  const {
    state: { id, platform },
  } = props.location;
  const [user, setUser] = React.useState({});
  const data = [{ text: "Seguidores", value: user.followers }];
  const noData = !user.followers;
  React.useEffect(() => {
    let getUserUrl;
    let headers;
    if (platform === "Gitlab") {
      getUserUrl = GITLAB_URL;
      headers = { "PRIVATE-TOKEN": GITLAB_TOKEN };
    } else {
      getUserUrl = GITHUB_USERS_URL;
      headers = {
        Authorization: `token ${GITHUB_TOKEN}`,
      };
    }
    axios
      .get(`${getUserUrl}/${id}`, {
        headers,
      })
      .then((r) => {
        if (r.data) {
          setUser(r.data);
        }
      });
  }, [id, platform]);
  const onGoBack = () => {
    props.history.push("/home");
  };
  return (
    <Card style={CARD_STYLE} className="mt-4">
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>@{user.username || user.login}</Card.Text>
        {!noData && (
          <BarChart
            ylabel="Cantidad"
            width={200}
            height={200}
            margin={margin}
            data={data}
          />
        )}
        <Button variant="primary" onClick={onGoBack}>
          Go Back
        </Button>
      </Card.Body>
    </Card>
  );
}
