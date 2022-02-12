import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}> 
            {user.name} ({user.age} years old)
          </li> //it require a unique ID for each input
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;