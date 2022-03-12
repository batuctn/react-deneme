import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import AlertDialog from "./AlertDialog";


const Tablo = ()=> {
    const [data,setData]=useState([])
    const [show,setShow]=useState(false)
    const [selectedData,setSelectedData]=useState({})

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response=>{setData(response.data)})
            .catch(err=>{console.log(err)})
    },[])

    return   <div>
        <TableContainer  component={Paper}>
            <Table  sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{background:"aliceblue",borderRadius:"15px"}}>Name</TableCell>
                        <TableCell sx={{background:"aliceblue",borderRadius:"15px"}} align="center">Website</TableCell>
                        <TableCell sx={{background:"aliceblue",borderRadius:"15px"}} align="center">Phone</TableCell>
                        <TableCell sx={{background:"aliceblue",borderRadius:"15px"}} align="center">Email</TableCell>
                        <TableCell sx={{background:"aliceblue",borderRadius:"15px"}} align="center">Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{item.name}</TableCell>
                            <TableCell align="center">{item.website}</TableCell>
                            <TableCell align="center">{item.phone}</TableCell>
                            <TableCell align="center">{item.email}</TableCell>
                            <TableCell align="center"><Button variant="contained" onClick={()=>{
                                setShow(true)
                                setSelectedData({username:item.username,sehir:item.address.city,firma_ismi:item.company.name})
                            }}>Submit</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <AlertDialog username={selectedData.username} firma_ismi={selectedData.firma_ismi} sehir={selectedData.sehir} show={show} handleClose={()=>{
        setShow(false)}
        } />
    </div>
}

export default Tablo;