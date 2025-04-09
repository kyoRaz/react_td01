import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../data/data.json';

function Etudiants() {
return (
<TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {data.map((elt, index) => (
        <TableRow key={index}>
            <TableCell>{elt.student?.firstname}</TableCell>
            <TableCell>{elt.student?.lastname}</TableCell>
        </TableRow>
        ))}
    </TableBody>
    </Table>
</TableContainer>
);
}

export default Etudiants;
