import React, { Component } from "react";
import { User } from "../../model/user";
import List from "./list-user/list";
import { Button, Spinner, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/user.action";
import * as repositoryActions from "../../actions/repository.action";
import { ReducersStates } from "../../reducers/rootReducer";
import { nameRepository } from "../../reducers/repository.reducer";
import { Status } from "../../services/http";
// import { Redirect } from "react-router-dom";
// import { localPath } from "../../constantes";

import "./searchUserGit.css";

const FRASE_OSANA_SALUD = "osana-salud";

class SearchUserGit extends Component<IProps, IState> {
  overlay: any = React.createRef();

  constructor(props: IProps) {
    super(props);
    this.state = {
      idUser: "",
      toLinkUserDetail: false,
    };
    this.onSearch = this.onSearch.bind(this);
    this.formValidate = this.formValidate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onSearch(): void {
    if (!this.formValidate()) {
      return;
    }
    this.props.getUsers();
  }
  formValidate(): boolean {
    const isValid: boolean = this.isValidUserName(this.props.userName);
    this.props.setValidateUserName(isValid);
    return isValid;
  }
  isValidUserName(userName: string) {
    return userName.length >= 4 && userName !== FRASE_OSANA_SALUD;
  }
  onClick(id: number): void {
    this.setState({ idUser: id.toString(), toLinkUserDetail: true });
  }
  onChange(event: any) {
    switch (event.target.name) {
      case "userName":
        const userName: string = event.target.value;
        this.props.setUserName(userName);
        if (userName.length >= 4) {
          this.props.setValidateUserName(this.isValidUserName(userName));
        }
        break;
      case "repository":
        this.formValidate();
        this.props.setRepository(event.target.value);
        break;
      default:
    }
  }

  focus = (event) => {
    event.target.classList.add("is-active");
    this.overlay.current.classList.add("is-active");
  };
  blur = (event) => {
    event.target.classList.remove("is-active");
  };
  overlayOnClick = (event) => {
    this.overlay.current.classList.remove("is-active");
    const $maybeIsAnInput: any = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    if ($maybeIsAnInput.tagName === "INPUT") {
      $maybeIsAnInput.focus();
    }
  };
  render() {
    if (this.state.toLinkUserDetail) {
      // return <Redirect to={`${localPath.USER_DETAIL}/${this.state.idUser}`} />;
    }
    return (
      <div>
        <Row>
          <Col xs={12} md={6}>
            <input
              type="text"
              name="userName"
              id="userName"
              className={"form-control-plaintext"}
              value={this.props.userName}
              placeholder="Matiase"
              onChange={this.onChange}
              onFocus={this.focus}
              onBlur={this.blur}
            />

            {!this.props.validateUserName && (
              <label
                id={"errorUserName"}
                style={{ color: "#FF0303" }}
                htmlFor=""
              >
                {this.props.userName === FRASE_OSANA_SALUD
                  ? `Prohibido buscar '${FRASE_OSANA_SALUD}'`
                  : "Introduzca mas de 4 o mas caracteres."}
              </label>
            )}
          </Col>
          <Col xs={12} md={6}>
            <select
              name="repository"
              id="repository"
              className={"form-control-plaintext"}
              value={this.props.repository}
              onChange={this.onChange}
            >
              {/* <Form.Control as="select"
                    name={'repository'} value={this.props.repository}
                    id={'repository'}
                    onChange={this.onChange}
                  > */}
              <option value={nameRepository.GITLAB_GITHUB}>
                gitlab y github
              </option>
              <option value={nameRepository.GITLAB}>gitlab</option>
              <option value={nameRepository.GITHUB}>github</option>
            </select>
          </Col>
          <Col xs={12} md={12}>
            {this.props.stateGet !== Status.LOADING ? (
              <button
                className={"btn btn-primary"}
                onClick={this.onSearch}
                disabled={!this.props.validateUserName}
              >
                Buscar
              </button>
            ) : (
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            )}

            {/* {this.props.stateGet === Status.LOADING && (
            <Spinner animation="border" />
        )} */}
          </Col>
          <Col xs={12} md={12}>
            {this.props.stateGet === Status.EXITO && (
              <List users={this.props.users} onClick={this.onClick}></List>
            )}
            {this.props.stateGet === Status.ERROR && <div>ERROR</div>}
            <div
              ref={this.overlay}
              className={"overlay"}
              id="overlay"
              onClick={this.overlayOnClick}
            ></div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(rootReducerState: ReducersStates, ownProps: any) {
  return {
    users: rootReducerState.userReducer.users,
    stateGet: rootReducerState.userReducer.stateGet,
    msjError: rootReducerState.userReducer.msjError,
    userName: rootReducerState.repositoryReducerState.userName,
    repository: rootReducerState.repositoryReducerState.repository,
    validateUserName: rootReducerState.repositoryReducerState.validateUserName,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ ...userActions, ...repositoryActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUserGit);

interface IProps {
  /** store */
  users: User[];
  stateGet: string;
  msjError?: string;
  userName: string;
  repository: string;
  validateUserName: boolean;

  /** actions */
  setValidateUserName: (isValid: boolean) => void;
  setUserName: (userName: string) => void;
  setRepository: (repository: string) => void;
  getUsers: () => void;
}

interface IState {
  idUser: string;
  toLinkUserDetail: boolean;
}
