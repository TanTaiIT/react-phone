import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../../../redux/action/UserAction';
import ListUser from './ListUser';
import './AdminUser.css'

function AdminUser(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.UserReducer.user)

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])
    return (
        <div className="admin-user">
            <span>Customers</span>
            {
                users ? (<ListUser users={users}></ListUser>) : (<h2> Loading</h2>)
            }
        </div>
    );
}

export default AdminUser;