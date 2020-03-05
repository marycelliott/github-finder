import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from './../_layout/Spinner';
import { Link } from 'react-router-dom';
import UsersContext from '../../context/users/Context';

const Profile = ({ match }) => {
    const usersContext = useContext(UsersContext);
    const { user, loading } = usersContext;
    useEffect( () => {
        usersContext.getUser(match.params.username);
        // eslint-disable-next-line 
        // stops the browser from warning about dependencies
    }, []); // works like componentDidMount
    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company
    } = user;

    if(loading) return <Spinner />
    return (
        <Fragment>
            
            <div className='card card-body col-4 mx-auto'>
                <div className='text-center mx-auto'>
                    <img
                        src={avatar_url}
                        className='rounded-circle'
                        alt=''
                        style={{ width: '150px' }}
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                    </div>
                    <div>
                    {bio && (
                        <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        </Fragment>
                    )}
                    <a href={html_url} role="button" className='btn btn-dark my-1 mr-1'>Visit Github Profile</a>
                    <Link to='/' className='btn btn-light'>Back To Search</Link>
                    <ul>
                        <li>
                        {login && (
                            <Fragment>
                            <strong>Username: </strong> {login}
                            </Fragment>
                        )}
                        </li>

                        <li>
                        {company && (
                            <Fragment>
                            <strong>Company: </strong> {company}
                            </Fragment>
                        )}
                        </li>

                        <li>
                        {blog && (
                            <Fragment>
                            <strong>Website: </strong> {blog}
                            </Fragment>
                        )}
                        </li>
                    </ul>
                    </div>
                <div className='container'>
                    <div className='badge badge-primary mr-1'>Followers: {followers}</div>
                    <div className='badge badge-success mr-1'>Following: {following}</div>
                    <div className='badge badge-secondary mr-1'>Public Repos: {public_repos}</div>
                    <div className='badge badge-dark mr-1'>Public Gists: {public_gists}</div>
                    <div className="badge badge-light">Hireable:{' '}
                {hireable ? (
                    <i className='fas fa-check text-success' />
                ) : (
                    <i className='fas fa-times-circle text-danger' />
                )}</div>
                </div>
            </div>
            {/* <Repos repos={repos} /> */}
        </Fragment>
    )
}

export default Profile;