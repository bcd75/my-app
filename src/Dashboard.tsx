import React from 'react';
import UserList from './UserList';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <UserList />
    </div>
  );
};

export default Dashboard;

