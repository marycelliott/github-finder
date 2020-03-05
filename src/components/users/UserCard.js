import React from 'react'
import { Link } from 'react-router-dom';

const UserCard = ({user: {login, avatar_url}}) => {
    return (
        <div className='col-3 my-1'>
            <div className='card'>
                <div className='card-body text-center'>
                    <img className="rounded-circle w-25" src={avatar_url} alt="Avatar of Github user"/>
                    <h5 className='card-title'>{login}</h5>
                    <Link to={`/user/${login}`} type="button" className="btn btn-sm btn-dark">View profile</Link>
                </div>
            </div>
        </div>
    );
}

export default UserCard
