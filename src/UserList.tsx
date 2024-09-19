import React, { useState } from 'react';

// Mock data for users
const users = [
    { id: 1, name: 'Alice', age: 25, gender: 'Female' },
    { id: 2, name: 'Bob', age: 30, gender: 'Male' },
    { id: 3, name: 'Charlie', age: 35, gender: 'Male' }
];

const MIN_AGE = 18;
const MAX_AGE = 70;

const UserList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [minAge, setMinAge] = useState(MIN_AGE);   // Minimum age for filtering
    const [maxAge, setMaxAge] = useState(MAX_AGE); // Maximum age for filtering
    const [filterGender, setFilterGender] = useState('');

    // Filter users by both name and age range
    const filteredUsers = users.filter(user => {
        // Match name
        const nameMatch = user.name.toLowerCase().includes(searchTerm.toLowerCase());

        // Match age (if provided, filter by age)
        const ageMatch = user.age >= minAge && user.age <= maxAge;

        // Match gender (if selected, filter by gender)
        const genderMatch = filterGender ? user.gender.toLowerCase() === filterGender.toLowerCase() : true;

        // Return users that match all filters
        return nameMatch && ageMatch && genderMatch;

    });

    return (
        <div>
            {/* Search users by name */}
            <input 
                type="text"
                placeholder="Search users by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Filter by Age Range */}
            <div>
                <label>Min Age: {minAge}</label>
                <input 
                    type="number" 
                    min={MIN_AGE} 
                    max={MAX_AGE}
                    value={minAge} 
                    onChange={(e) => setMinAge(Number(e.target.value))} 
                />
            </div>

            <div>
                <label>Max Age: {maxAge}</label>
                <input 
                    type="number" 
                    min={MIN_AGE} 
                    max={MAX_AGE}
                    value={maxAge} 
                    onChange={(e) => setMaxAge(Number(e.target.value))} 
                />
            </div>

            {/* Filter by gender */}
            <select
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
            >
                <option value="">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            {/* Display filtered users */}
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        {user.name} - Age: {user.age} - Gender: {user.gender}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
