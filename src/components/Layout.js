import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ title, route, header, footer, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      {header && <Header title={title} route={route} />}
      {children}
      {footer && <Footer />}
    </motion.div>
  );
};

export default Layout;
