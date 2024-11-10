import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import EditUserData from '../components/EditUserData';
import UserData from '../components/UserData';
import EditCycleData from './EditCycleData';
import './AdminPage.css';

export default function AdminPage() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    console.log(search);
    const getAllUser = async () => {
        try {
            const res = await fetch('api/user/getalluser');
            const data = await res.json();
            setUsers(data.data);
            // console.log(data.data);

        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        getAllUser();
    }, [])

    return (
        <div className='table'>
            <h1>Hello!!! Admin</h1>
            <div className='edit'>
                <div>
                    <input
                        placeholder='Search by Name or Phone_Number'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <Link to={'/editCycleData'}>
                    <Button
                        colorScheme="purple" variant="solid"
                    >
                        Edit Cycle Data
                    </Button>
                </Link>
            </div>
            {/* <EditUserData /> */}
            <table>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>Name</th>
                        <th>Phone_number</th>
                        <th>CycleID</th>
                        <th>Created_At</th>
                        <th>Updated_At</th>
                    </tr>
                </thead>
                <tbody>
                    <UserData users={users} search={search} />
                </tbody>
            </table>
        </div>
    )
}
