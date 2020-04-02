import React from 'react';

import { Button, Col, Typography, Row } from 'antd';
import { Header } from './components/Header';
import './App.css';

const { Title } = Typography;

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <div>
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
            , working as a software engineer for a consulting company. Although
            my primary focus is building web applications, I dabble in{' '}
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
        </div>
      </main>
      <footer>
        <Row style={{ textAlign: 'center' }}>
          <Col span={8}>
            <Button
              type='dashed'
              htmlType='a'
              href='http://linkedin.com/in/alex-carm'
              alt="Alex's LinkedIn"
              target='_blank'
              className='btn-transparent'>
              LinkedIn
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type='dashed'
              htmlType='a'
              href='https://twitter.com/alex_carm_'
              alt="Alex's Twitter"
              target='_blank'
              className='btn-transparent'>
              Twitter
            </Button>
          </Col>
          <Col span={8}>
            <Button
              type='dashed'
              htmlType='a'
              href='http://github.com/alexcarmichael'
              alt="Alex's GitHub"
              target='_blank'
              className='btn-transparent'>
              GitHub
            </Button>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default App;
