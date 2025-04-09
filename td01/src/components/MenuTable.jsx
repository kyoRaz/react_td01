import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../data/data.json';

function MenuTable() {
    return (
    <TableContainer component={Paper}>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Student ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Grade</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((elt, index) => (
            <TableRow key={index}>
                <TableCell>{elt.unique_id}</TableCell>
                <TableCell>{elt.course}</TableCell>
                <TableCell>{elt.student.firstname}</TableCell>
                <TableCell>{elt.student.lastname}</TableCell>
                <TableCell>{elt.student.id}</TableCell>
                <TableCell>{elt.date}</TableCell>
                <TableCell>{elt.grade}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
}

export default MenuTable;