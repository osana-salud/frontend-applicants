import React, { Fragment, useContext } from 'react';
import './CardList.scss';
import Data from '../../contexts/Data';
import { Link } from 'react-router-dom';

const CardList = () => {
    const {githubUsers, gitlabUsers} = useContext(Data);

    const github = githubUsers.slice(0,5).map(user => {
        return (     
            <figure key={user.id}>
                <img  
                    className="figure-img" 
                    src={user.avatar_url} 
                    alt={user.login} 
                />
                <figcaption>
                    <h3 className="figcaption-title">{user.login}</h3>
                    <p className="figcaption-p"><strong>Id:</strong> {user.id}</p>
                    <p className="figcaption-p"><strong>Servicio:</strong> Github</p>
                </figcaption>
                <button type="button" className="btn-card-list">
                    <Link style={{color: "white", textDecoration: "none"}} 
                        to={{
                            pathname: `/user:${user.login}`,
                            selectedUser: user
                        }}> Más detalles
                    </Link>
                </button>
            </figure>                    
        );
    });

    const gitlab = gitlabUsers.slice(0,5).map(user => {
        return (     
            <figure key={user.id}>
                <img  
                    className="figure-img" 
                    src={user.avatar_url} 
                    alt={user.username} 
                />
                <figcaption>
                    <h3 className="figcaption-title">{user.username}</h3>
                    <p className="figcaption-p"><strong>Id:</strong> {user.id}</p>
                    <p className="figcaption-p"><strong>Servicio:</strong> Gitlab</p>
                </figcaption>
                <button type="button" className="btn-card-list">
                    <Link style={{color: "white", textDecoration: "none"}} 
                        to={{
                            pathname: `/user:${user.username}`,
                            selectedUser: user
                        }}> Más detalles
                    </Link>
                </button>
            </figure>                    
        );
    });

    return (
        <Fragment>
            <h1 className="title-card-list" style={{width: "100%",
                display: github.length > 0 ? "block" : "none"}}>
                Usuarios de Github
            </h1>
            <section className="card-container">
                {github}
			</section>
            
            <h1 className="title-card-list" style={{width: "100%",
                display: gitlab.length > 0 ? "block" : "none",
                marginTop: github.length > 0 ? "50px" : "-10px"
                }}>
                Usuarios de Gitlab
            </h1>
            <section className="card-container">
                {gitlab}
			</section>
        </Fragment>    
    );
}

export default CardList;
