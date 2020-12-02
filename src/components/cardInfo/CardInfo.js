import React, { Fragment } from 'react';
import './CardInfo.scss';
import GithubLogo from '../../assets/githubLogo.png';
import GitlabLogo from '../../assets/gitlabLogo.jpg';
import { Link } from 'react-router-dom';

const CardInfo = (props) => {

	let github;
	let gitlab;

	if(props.location.selectedUser.login === undefined) {
		gitlab = 
		<div className="card-info" key={props.location.selectedUser.id}>
			<div className="card-info-img">
				<img src={props.location.selectedUser.avatar_url} alt={props.location.selectedUser.username} />
			</div>
			<div className="card-info-text">
				<h1>{props.location.selectedUser.username} <img src={GitlabLogo} alt="Logo Gitlab"/></h1>
				<p><strong>Nombre:</strong> {props.location.selectedUser.name}</p>
				<p><strong>Estado:</strong> {props.location.selectedUser.state}</p>
				<a href={props.location.selectedUser.web_url} target="_blank" rel="noreferrer">Ver Perfil</a>
			</div>
		</div>
	} else {
		github = 
		<div className="card-info" key={props.location.selectedUser.id}>
			<div className="card-info-img">
				<img src={props.location.selectedUser.avatar_url} alt={props.location.selectedUser.login} />
			</div>
			<div className="card-info-text">
				<h1>{props.location.selectedUser.login} <img src={GithubLogo} alt="Logo Github"/></h1>
				<p><strong>Id:</strong> {props.location.selectedUser.id}</p>
				<a href={props.location.selectedUser.html_url} target="_blank" rel="noreferrer">Ver Perfil</a>
			</div>
		</div>
	};
	
  	return (
		<Fragment>
			<header className="header-card-info">
				Detalles del usuario seleccionado
				<button type="button" className="btn-card-info">
					<Link style={{color: "black", textDecoration: "none"}} to='/'>Hacer otra búsqueda</Link>
				</button>
			</header>
			<div className="container-card-info">
				{github}
				{gitlab}			
			</div>
		</Fragment>
  	);
}

export default CardInfo;
