import { Button } from '@chakra-ui/react';
import React from 'react'
import { Link, Navigate } from 'react-router-dom';

export default function UserData({ zone, search }) {
  return (
    <>
      {
        zone.filter((item) => {
          return search.toLowerCase() === '' ? item : (item.cycleId.toLowerCase().includes(search));
        }).map((data) => {
          const { _id, cycleId, zoneId } = data;
          console.log(data);
          return (
            <tr key={_id}>
              <td>{cycleId}</td>
              <td>{zoneId}</td>
              <td>
                <Button
                  colorScheme="purple" variant="solid"
                  onClick={(e) => { id }}
                >
                <Link to={`/update/${cycleId}`}>
                  Edit Zone
                </Link>
                </Button>
              </td>
            </tr>
          )
        })
      }
    </>
  )
}
