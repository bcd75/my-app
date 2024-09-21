import React, { useState } from 'react';
import './Dashboard.css'; // External CSS file for better styling

const users = [
    { id: 1, name: 'Alice', age: 25, gender: 'Female' },
    { id: 2, name: 'Bob', age: 30, gender: 'Male' },
    { id: 3, name: 'Charlie', age: 35, gender: 'Male' },
    { id: 4, name: 'Daisy', age: 24, gender: 'Female' },
    { id: 5, name: 'Eve', age: 28, gender: 'Female' },
    { id: 6, name: 'Frank', age: 32, gender: 'Male' },
    { id: 7, name: 'Grace', age: 29, gender: 'Female' },
    { id: 8, name: 'Hank', age: 38, gender: 'Male' },
    { id: 9, name: 'Ivy', age: 26, gender: 'Female' },
    { id: 10, name: 'Jack', age: 33, gender: 'Male' },
    { id: 11, name: 'Karen', age: 27, gender: 'Female' },
    { id: 12, name: 'Leo', age: 40, gender: 'Male' },
    { id: 13, name: 'Mia', age: 22, gender: 'Female' },
    { id: 14, name: 'Nick', age: 31, gender: 'Male' },
    { id: 15, name: 'Olivia', age: 35, gender: 'Female' },
    { id: 16, name: 'Paul', age: 28, gender: 'Male' },
    { id: 17, name: 'Quinn', age: 23, gender: 'Female' },
    { id: 18, name: 'Ralph', age: 36, gender: 'Male' },
    { id: 19, name: 'Sophia', age: 21, gender: 'Female' },
    { id: 20, name: 'Tom', age: 34, gender: 'Male' },
];


const MIN_AGE = 18;
const MAX_AGE = 45;

const Dashboard: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [minAge, setMinAge] = useState(MIN_AGE);
    const [maxAge, setMaxAge] = useState(MAX_AGE);
    const [filterGender, setFilterGender] = useState('');

    const filteredUsers = users.filter(user => {
        const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
        const ageMatch = user.age >= minAge && user.age <= maxAge;
        const genderMatch = filterGender ? user.gender.toLowerCase() === filterGender.toLowerCase() : true;
        return nameMatch && ageMatch && genderMatch;
    });

    return (
        <div className="user-list-container">
            <h1>Dashboard</h1>
            <div className="filter-container">
                {/* Search users by name */}
                <input 
                    type="text"
                    className="input-box"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Filter by Age Range */}
                <div className="age-range-container">
                    <div className="age-range">
                        <label>Min Age:</label>
                        <input 
                            type="number" 
                            className="age-input"
                            min={MIN_AGE} 
                            max={MAX_AGE}
                            value={minAge} 
                            onChange={(e) => setMinAge(Number(e.target.value))} 
                        />
                    </div>
                    <div className="age-range">
                        <label>Max Age:</label>
                        <input 
                            type="number" 
                            className="age-input"
                            min={MIN_AGE} 
                            max={MAX_AGE}
                            value={maxAge} 
                            onChange={(e) => setMaxAge(Number(e.target.value))} 
                        />
                    </div>
                </div>

                {/* Filter by gender */}
                <div className="gender-filter">
                    <label>Gender:</label>
                    <select
                        className="dropdown"
                        value={filterGender}
                        onChange={(e) => setFilterGender(e.target.value)}
                    >
                        <option value="">All Genders</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>

            {/* Display filtered users */}
            <ul className="user-list">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <li key={user.id} className="user-item">
                            {user.name} - Age: {user.age} - Gender: {user.gender}
                        </li>
                    ))
                ) : (
                    <li>No users found</li>
                )}
            </ul>
        </div>
    );
};

export default Dashboard;


