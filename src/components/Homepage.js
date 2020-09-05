import React from 'react';
import { Typography } from 'antd';
import { Layout } from './Layout';
import styled from 'styled-components';

const StyledMessageBox = styled.div`
  background: #f6f6f6;
  padding: 2rem;
  border-radius: 32px;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const { Title } = Typography;

export const HomePage = () => {
  return (
    <Layout title='Projects' route='/projects' header={true} footer={true}>
      <StyledMessageBox>
        <Title level={3}>Hi, I'm Alex.</Title>
        <p>
          I'm a web developer and media professional from Atlanta, passionate
          about creating beautiful user experiences. I love{' '}
          <a
            href='https://en.wikipedia.org/wiki/JavaScript'
            target='_blank'
            rel='noopener noreferrer'>
            Javascript
          </a>{' '}
          libraries and frameworks and User Interface development.
        </p>
        <p>
          Currently, I spend a lot of time in{' '}
          <a
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'>
            React
          </a>
          , working as a software engineer for a consulting company. Although my
          primary focus is building web applications, I dabble in{' '}
          <a
            href='https://reactnative.dev/'
            target='_blank'
            rel='noopener noreferrer'>
            mobile
          </a>{' '}
          technologies now and then.
        </p>
        <p>
          Some of my hobbies include running, camping, playing the piano, and
          eating too much pasta in one sitting.
        </p>
      </StyledMessageBox>
    </Layout>
  );
};

export default HomePage;
