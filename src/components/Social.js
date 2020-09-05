import React from 'react';

import { Button, Col, Row } from 'antd';

const Social = () => {
  return (
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
  );
};

export default Social;
