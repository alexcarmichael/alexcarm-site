import React from 'react';
import { Avatar, Button } from 'antd';
import { StarFilled, HomeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import alex from '../images/alex-avatar.jpg';

export const Header = ({ cta }) => {
  const { title } = cta;
  const { route } = cta;

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
        <Link to='/' alt='Home'>
          <Avatar src={alex} size={64} alt='Alex Avatar' />
        </Link>
        <section style={{ position: 'absolute', top: 50, right: 50 }}>
          <div>
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
        </section>
      </nav>
    </header>
  );
};

export default Header;
