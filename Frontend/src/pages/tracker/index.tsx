import React from 'react'
import Header from './components/Header'
import DropdownSemester from './components/DropdownSemester'
import Table from './components/Table'


//Sample data
const data = [
    {
        course: 'Math 101',
        units: 3,
        midtermGrade: 1.2,
        finalGrade: 1.2,
        gwa: 1.2,
        finalRemarks: 'INCREASE'
    },
    {
        course: 'History 201',
        units: 3,
        midtermGrade: 1.1,
        finalGrade: 1.1,
        gwa: 1.1,
        finalRemarks: 'INCREASE'
    },
    {
        course: 'Science 301',
        units: 4,
        midtermGrade: 1.5,
        finalGrade: 1.5,
        gwa: 1.5,
        finalRemarks: 'CONSISTENT'
    },
    {
        course: 'Science 301',
        units: 4,
        midtermGrade: 1.1,
        finalGrade: 1.1,
        gwa: 1.1,
        finalRemarks: 'DECREASE'
    }
];

//Semester selections:
const semesters = [
    "1st year - 1st semester",
    "1st year - 2nd semester",
    "2nd year - 1st semester",
    "2nd year - 2nd semester",
    "3rd year - 1st semester",
    "3rd year - 2nd semester",
    "4th year - 1st semester",
    "4th year - 2nd semester",
]


//todo - header should get the current semester selection
const Tracker: React.FC = () => (
    <div>
        <Header />
        <DropdownSemester selections={semesters} />
        <Table data={data} />
    </div>
)

export default Tracker