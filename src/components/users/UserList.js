import React, { useContext } from 'react'
import UserCard from './UserCard'
import Spinner from '../_layout/Spinner';
import UsersContext from '../../context/users/Context';


const UserList = () => {
    const usersContext = useContext(UsersContext)
    const { loading, users } = usersContext;
    if(loading){
        return <Spinner />
    }
    else if(!loading && users.length === 0) {
        return <h3>No users found.</h3>
    }
    else {
        return (
            <div className="row">
                {users.map(user => (
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                    )
                )}
            </div>
        )
    }
}

export default UserList;
