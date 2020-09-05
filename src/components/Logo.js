import React from 'react';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';
import alex from '../images/alex-avatar.jpg';

const Logo = () => {
  return (
    <>
      <Link to='/' alt='Home'>
        <Avatar src={alex} size={64} alt='Alex Avatar' />
      </Link>
    </>
  );
};

export default Logo;
