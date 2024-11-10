import React, { useEffect, useState } from 'react'
import CycleData from '../components/CycleData';
import './AdminPage.css';

export default function EditCycleData() {
    // API
    const [zone, setZone] = useState([]);
    const [search, setSearch] = useState('');
    console.log(search);
    const getAllCycle = async () => {
        try {
            const res = await fetch('api/cycle/findallcycle/');
            const data = await res.json();
            setZone(data.data);
            console.log(data.data);

        }
        catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        getAllCycle();
    }, [])

    // DISPLAY
    return (
        <div className='table'>
            <h1>Hello!!! Admin</h1>
            <h2>Edit User's Cycle Data</h2>
            <div className='edit'>
                <input
                    placeholder='Search by CycleID'
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>CycleID</th>
                        <th>ZoneID</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <CycleData zone={zone} search={search} />
                </tbody>
            </table>
            {/* <form>
                <input type="text" value={'hello world'} onChange={}/>
            </form> */}

        </div>
    )
}
