import React, { useContext, useState } from "react";
import AlertContext from '../../context/alert/Context';
import UsersContext from '../../context/users/Context';


const Search = () => {
    const alertContext = useContext(AlertContext);
    const usersContext = useContext(UsersContext);

    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
        alertContext.sendAlert(null)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(search === "") {
            alertContext.sendAlert('Please enter something.', 'danger')
        }
        else {
            usersContext.searchUsers(search);
            setSearch("");

        }
        console.log(e);
    }
    return (
        <div className="input-group container">
            <input id="search" type="text" name="search" onChange={onChange} className="form-control form-control-sm" placeholder="Search users..." />
            <div className="input-group-append">
                <button onClick={onSubmit} className="btn btn-dark btn-sm" type="submit">Search</button>
            </div>
        </div>
    )
}

export default Search;
