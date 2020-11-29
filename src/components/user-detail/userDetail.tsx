import React from 'react'
import { User } from '../../model/user';

import { connect } from 'react-redux';
import { ReducersStates } from '../../reducers/rootReducer';
import { Redirect, useParams } from 'react-router-dom';
import Item from './item';
import { localPath } from '../../constantes';

const UserDetail = (props: IProps) => {

  const users: User[] = props.users;

  let { id }: any = useParams();
  const userSelect: User = users.find(user => user.id === Number(id));

  if (!userSelect) {
    return <Redirect to={localPath.ROOT}></Redirect>
  }
  let imgGit: string = '/img/gitlab.png';
  if (userSelect.github) {
    imgGit = '/img/github.png';
  }
  if (userSelect.gitlab) {
    imgGit = '/img/gitlab.png';
  }
  return (
    <div >

      <div style={{ alignContent: 'center', alignItems: 'center', flex: 'center' }}>
        <Item
          id={userSelect.id}
          link={userSelect.link}
          imgTypeGit={imgGit}
          nameUser={userSelect.nameUser}
          imgAvatar={userSelect.img_avatar}
        ></Item>
      </div>
    </div>
  )
}

function mapStateToProps(rootReducerState: ReducersStates, ownProps: any) {
  return {
    users: rootReducerState.userReducer.users,
  };
}

export default connect(mapStateToProps)(UserDetail);

interface IProps {
  /** store */
  users: User[];
}