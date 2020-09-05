import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = (props) => {
  return (
    <div>
      <Header cta={{ title: 'Projects', route: '/projects' }} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
