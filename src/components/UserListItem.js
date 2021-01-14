import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserListItem = (props) => {
  const { user, platform } = props;

  return (
    <ListGroup.Item>
      <Link
        to={{
          pathname: "/user",
          state: { id: user.id, platform: platform },
        }}
      >
        <Row>
          <Col xs={3} md={2} sm={4}>
            <Image
              width={40}
              style={{ width: 50 }}
              src={user.avatar}
              roundedCircle
            />
          </Col>
          <Col xs={9} md={10} sm={8}>
            <h3>
              {platform} - {user.login}
            </h3>
          </Col>
        </Row>
      </Link>
    </ListGroup.Item>
  );
};
export default UserListItem;
