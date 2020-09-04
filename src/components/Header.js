import React from 'react';
import { Avatar, Button, Row } from 'antd';
import { StarFilled } from '@ant-design/icons';
import alex from '../images/alex-avatar.jpg';

export const Header = () => {
  return (
    <header style={{ margin: '0 auto', fontSize: '1.2rem' }}>
      <nav>
        <a href='/' alt='Home'>
          <Avatar src={alex} size={64} alt='Alex Avatar' />
        </a>
        <section style={{ position: 'absolute', top: 50, right: 50 }}>
          <div>
            <a href='/projects' alt='Projects'>
              <Button
                className='projects-btn'
                type='primary'
                shape='round'
                icon={<StarFilled />}
                size='large'>
                Projects
              </Button>
            </a>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
