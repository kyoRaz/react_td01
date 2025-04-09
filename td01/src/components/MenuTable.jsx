import React, { useState } from 'react';
import {
Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
Paper, TableSortLabel, TablePagination, TextField
} from '@mui/material';
import data from '../data/data.json';

// Fonctions de tri
function descendingComparator(a, b, orderBy) {
const valA = getValue(a, orderBy);
const valB = getValue(b, orderBy);
if (valB < valA) return -1;
if (valB > valA) return 1;
return 0;
}

function getComparator(order, orderBy) {
return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function getValue(obj, path) {
return path.split('.').reduce((o, key) => o?.[key], obj);
}

function MenuTable() {
const [order, setOrder] = useState('asc');
const [orderBy, setOrderBy] = useState('student.lastname');
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(5);
const [search, setSearch] = useState('');

const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
};

const handleChangePage = (_, newPage) => {
    setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
};

const filteredData = data.filter((elt) => {
    const course = elt.course?.toLowerCase() || '';
    const firstname = elt.student?.firstname?.toLowerCase() || '';
    const lastname = elt.student?.lastname?.toLowerCase() || '';
    const searchValue = search.toLowerCase();

    return (
    course.includes(searchValue) ||
    firstname.includes(searchValue) ||
    lastname.includes(searchValue)
    );
});

const sortedData = filteredData.sort(getComparator(order, orderBy));
const paginatedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

return (
    <Paper sx={{ padding: 2 }}>
    <TextField
        label="Rechercher (cours, prénom, nom)"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
    />
    <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
            <TableCell>
                <TableSortLabel
                active={orderBy === 'unique_id'}
                direction={order}
                onClick={() => handleRequestSort('unique_id')}
                >
                ID
                </TableSortLabel>
            </TableCell>
            <TableCell>
                <TableSortLabel
                active={orderBy === 'course'}
                direction={order}
                onClick={() => handleRequestSort('course')}
                >
                Course
                </TableSortLabel>
            </TableCell>
            <TableCell>
                <TableSortLabel
                active={orderBy === 'student.firstname'}
                direction={order}
                onClick={() => handleRequestSort('student.firstname')}
                >
                First Name
                </TableSortLabel>
            </TableCell>
            <TableCell>
                <TableSortLabel
                active={orderBy === 'student.lastname'}
                direction={order}
                onClick={() => handleRequestSort('student.lastname')}
                >
                Last Name
                </TableSortLabel>
            </TableCell>
            <TableCell>Student ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>
                <TableSortLabel
                active={orderBy === 'grade'}
                direction={order}
                onClick={() => handleRequestSort('grade')}
                >
                Grade
                </TableSortLabel>
            </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {paginatedData.map((elt, index) => (
            <TableRow key={index}>
                <TableCell>{elt.unique_id}</TableCell>
                <TableCell>{elt.course}</TableCell>
                <TableCell>{elt.student?.firstname}</TableCell>
                <TableCell>{elt.student?.lastname}</TableCell>
                <TableCell>{elt.student?.id}</TableCell>
                <TableCell>{elt.date}</TableCell>
                <TableCell>{elt.grade}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
    />
    </Paper>
);
}

export default MenuTable;
