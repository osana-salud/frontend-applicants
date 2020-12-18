import React, {
    Fragment,
    useState,
    useEffect
} from 'react';
import {
    GithubListContainer,
    GithubListSearch,
    Input,
    GithubListCard,
    GithubListCardContent,
    Header,
    Text
} from './styled';
import NavBarH from '../../../commons/NavBarH/main';
import SearchButton from '../../../commons/SearchButton/main';

import Image from '../../components/Image/main';

const GithubList = () => {

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [repos, setRepos] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [notification, setNotification] = useState('');
    useEffect(() => {
        fetch('https://api.github.com/users/example')
            .then(res => res.json())
            .then(data => {
                setData(data)
        });
    }, [])

    const setData = ({name, login, followers, following, public_repos, avatar_url}) => {
        setName(name);
        setUserName(login);
        setFollowers(followers);
        setFollowing(following);
        setRepos(public_repos);
        setAvatar(avatar_url);
    }

    const handleSearch = ({target: { value } }) => {
        setUserInput(value);
        userInput.length < 3
            ? setSearchText('Ingrese 4 caracteres como minimo.')
            : setSearchText('')
    }

    const handleSubmit = () => {
        console.log('handleSubmit: ', userInput);
        !searchText && userInput !== 'osana-salud' && (
                fetch(`https://api.github.com/users/${userInput}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.message)
                            setError(data.message) 
                        else { 
                            setData(data);
                            setError(null);
                        }
                })
            )
        userInput === 'osana-salud' ? setNotification('No se permite realizar esta búsqueda.') : setNotification('')
    }

    let styleButton = "#000000";
    let styleColor = "#FFFFFF";

    return (
        <Fragment>
            <NavBarH/>
            <GithubListContainer>
                <GithubListSearch>
                    <Input
                        onChange={ handleSearch }
                        placeholder="GitHub user"
                        type="text"
                        name="GitHub user"
                        value={ userInput }
                    />
                    <SearchButton
                        text="Search"
                        handleOnClick={ handleSubmit }
                        backgroundColor={ styleButton }
                        color={ styleColor }
                    />
                </GithubListSearch>
                { searchText && ( <Text> { searchText } </Text> )}
                { notification && ( <Text> { notification } </Text> ) }
                { error
                    ? ( <Text> { error } </Text> )
                    : (
                        <GithubListCard>
                            <Image
                                src={ avatar }
                            />
                            <GithubListCardContent>
                                <Header>
                                    { name }
                                </Header>
                                <Header>
                                    { userName }
                                </Header>
                            </GithubListCardContent> 
                            <GithubListCardContent>
                                { followers } Followers
                            </GithubListCardContent>
                            <GithubListCardContent>
                                { repos } Repos
                            </GithubListCardContent>
                            <GithubListCardContent>
                                { following } Friends
                            </GithubListCardContent>
                        </GithubListCard>
                    )                    
                }
            </GithubListContainer>
        </Fragment>
    );
};

// GithubList.propTypes = {

// };

export default GithubList;
