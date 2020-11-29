import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';

const Item = (props: IProps) => {

  const onClick = () => {
    if (!!props.id) {
      props.onClick(props.id);
    } else {
      alert('Se desconoce el usuario, Recargue la pagina')
    }
  }

  return (
    <div onClick={onClick}
      key={props.key}
    >
      <Row>
        <Col xs={4} md={4}>
          <a rel="stylesheet" href={props.link} target="_blank" >
            <Image style={{ height: 40, width: 40 }} src={props.imgTypeGit} />
            <Image style={{ height: 30, width: 30 }} src="/img/link-page.png" />
          </a>
        </Col>
        <Col xs={4} md={4}>
          {props.nameUser.toString()}
        </Col>

        <Col xs={4} md={4}>
          <Image style={{ height: 30, width: 30 }} src={props.imgAvatar} roundedCircle />
        </Col>
      </Row>
    </div>
  )
}
export default Item;

interface IProps {
  key: number;
  id: number;
  link: string;
  imgTypeGit: string;
  nameUser: string;
  imgAvatar: string;
  onClick: (id: number) => void;
}