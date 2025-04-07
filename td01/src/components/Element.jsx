import React from 'react';
import data from '../../../data.json';

const trierListe = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));  
    [array[i], array[j]] = [array[j], array[i]]; 
}
return array;
};

const getDataTrier =() =>{
let dataTrier=trierListe(data);
return dataTrier ;
}

const Element = () => {
    let data = getDataTrier();

return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <table border="1">
        <thead>
        <tr>
            <th>Unique ID</th>
            <th>Course</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Student ID</th>
            <th>Date</th>
            <th>Grade</th>
        </tr>
        </thead>
        <tbody>
        {data.map((elt, index) => (
            <tr key={index}>
            <td>{elt.unique_id}</td>
            <td>{elt.course}</td>
            <td>{elt.student.firstname}</td>
            <td>{elt.student.lastname}</td>
            <td>{elt.student.id}</td>
            <td>{elt.date}</td>
            <td>{elt.grade}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
};

export default Element;