import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Update() {
    const { id } = useParams();
    console.log(id);
    const getCycle = async () => {
        try {
            const res = await axios.get('api/cycle/findcycle', {
                params: {
                    cycleId: id+'',
                },
            });
            const data = res.data;
            // setZone(data.data);
            console.log(data);
        } catch (e) {
            console.error(e);
            console.log('hello');
        }
    };
    useEffect(() => {
        if (!id) {
            return;
        }
        // let config = {
        //     method: 'get',
        //     maxBodyLength: Infinity,
        //     url: 'api/cycle/findcycle?cycleId=CYCLE004',
        //     headers: {}
        // };

        // axios.request(config)
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         // console.log('hello world');  
        //     });

        getCycle();
    }, [id])


    return (
        <div>
            <form>
                <p>Enter new Zone</p>
                <input type="text" />
                <Button type='submit'>Update</Button>
            </form>
        </div>
    )
}
