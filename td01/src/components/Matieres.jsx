import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import data from '../data/data.json';

function Matieres() {
    const uniqueCourses = Array.from(new Set(data.map((elt) => elt.course))).sort();

    return (
    <Paper sx={{ padding: 2 }}>
        <Typography variant="h6" gutterBottom>
        Liste des matières
        </Typography>
        <List>
        {uniqueCourses.map((course, index) => (
            <ListItem key={index}>
            <ListItemText primary={course} />
            </ListItem>
        ))}
        </List>
    </Paper>
    );
}

export default Matieres;
