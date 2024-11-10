import React from 'react'

export default function UserData({ users, search }) {
    return (
        <>
            {
                users.filter((item) => {
                    return search.toLowerCase() === '' ? item : (item.userPhone.toLowerCase().includes(search) || item.userName.toLowerCase().includes(search));
                }).map((data) => {
                    const { _id, userPassword, userName, userPhone, cycleId, createdAt, updatedAt } = data;
                    // console.log(data);
                    return (
                        <tr key={_id}>
                            <td>{userPassword}</td>
                            <td>{userName}</td>
                            <td>{userPhone}</td>
                            <td>{cycleId}</td>
                            <td>{createdAt}</td>
                            <td>{updatedAt}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}
