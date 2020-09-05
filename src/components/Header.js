import React from 'react';
import { Button } from 'antd';
import { StarFilled, HomeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export const Header = ({ title, route }) => {
  const headerIcon = () => {
    switch (title) {
      case 'Home':
        return <HomeFilled />;
      case 'Projects':
        return <StarFilled />;
      default:
        return <StarFilled />;
    }
  };

  return (
    <header style={{ margin: '0 auto', fontSize: '1.2rem' }}>
      <nav>
        <Logo />
        <div style={{ position: 'absolute', top: 50, right: 50 }}>
          <Link to={route}>
            <Button
              className='projects-btn'
              type='primary'
              shape='round'
              icon={headerIcon()}
              size='large'>
              {title}
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
