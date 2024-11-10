import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

export default function EditUserData() {
    const [showModal, setShowModal] = useState(false);
    const MyModal1 = () => {
        return (
            <div>
                <h2>Edit Table</h2>
                <Button onClick={() => {
                    setShowModal(false)
                }}>Back</Button>
            </div>
        )
    }
    return (
        <div className='edit1'>
            <div className='edit'>
                <h2>User's Data:</h2>
                <Button onClick={() => setShowModal(true)}>Edit</Button>
            </div>
            {showModal && <MyModal1 />}
        </div>
    )
}
