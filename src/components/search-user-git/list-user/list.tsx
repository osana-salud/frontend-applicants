import React from 'react'
import { User } from '../../../model/user';
import Item from './item';

const list = (props: IProps) => {
  const onClick = (id: number) => {
    props.onClick(id);
  }
  if (props.users.length===0) {
    return (<div>
      Lista vacia
    </div>)
  }
  return (
    <div style={{ alignContent: 'center', alignItems: 'center', flex: 'center' }}>
      {props.users.length !== 0 && props.users.map((user: User, index: number) => {
        let imgGit: string = '/img/gitlab.png';
        if (user.github) {
          imgGit = '/img/github.png';
        }
        if (user.gitlab) {
          imgGit = '/img/gitlab.png';
        }
        return (<Item key={index}
          id={user.id}
          link={user.link}
          imgTypeGit={imgGit}
          nameUser={user.nameUser}
          imgAvatar={user.img_avatar}
          onClick={onClick}
        ></Item>)
      })}
    </div>
  )
}
export default list;

interface IProps {
  users: User[];
  onClick: (id: number) => void;
}