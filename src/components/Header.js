import React from 'react';
import { Avatar, Row } from 'antd';
import alex from '../images/alex-avatar.jpg';

export const Header = () => {
  return (
    <header style={{ margin: '0 auto', fontSize: '1.2rem' }}>
      <Row>
        <Avatar src={alex} size={64} alt='Alex Avatar' />
      </Row>
    </header>
  );
};
