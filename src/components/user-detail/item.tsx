import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const Item = (props: IProps) => {
  return (
    <div>
      <Row>
        <Col xs={4} md={4}>
          <Image style={{ height: 40, width: 40 }} src={props.imgTypeGit} />
        </Col>
        <Col xs={4} md={4}>
          {props.nameUser.toString()}
        </Col>
        <Col xs={4} md={4}>
          <Image
            style={{ height: 30, width: 30 }}
            src={props.imgAvatar}
            roundedCircle
          />
        </Col>
        <Col xs={12} md={12}>
          <a rel="stylesheet" href={props.link} target="_blank">
            {props.link.toString()}
            <Image style={{ height: 30, width: 30 }} src="/img/link-page.png" />
          </a>
        </Col>
      </Row>
    </div>
  );
};
export default Item;

interface IProps {
  id: number;
  link: string;
  imgTypeGit: string;
  nameUser: string;
  imgAvatar: string;
}
