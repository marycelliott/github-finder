import React, { useReducer } from 'react';
import axios from 'axios';
import UsersContext from './Context';
import UsersReducer from './Reducer';
import {
    SEARCH,
    GET_USER,
    SET_LOADING 
} from '../Types';

const UsersState = (props) => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }
    const [state, dispatch] = useReducer(UsersReducer, initialState);

    // SEARCH FOR USERS
    const searchUsers = (data) => {
        setLoading();
        axios.get(`https://api.github.com/search/users?q=${data}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
          .then(res => {
            dispatch({ type: SEARCH, payload: res.data.items })
        })
    }

    // GET ONE USER
    const getUser = (username) => {
        setLoading();
        axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
          .then(res => {
            dispatch({type: GET_USER, payload: res.data})
        })
    }

    // SET LOADING
    const setLoading = () => dispatch({ type: SET_LOADING });

    return <UsersContext.Provider
        value ={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            searchUsers,
            getUser
        }}
    >
        {props.children}
    </UsersContext.Provider>
}

export default UsersState;