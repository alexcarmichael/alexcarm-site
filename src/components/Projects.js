import React, { useState, useEffect } from 'react';
import { Skeleton, List, Avatar, Typography } from 'antd';

import { Header } from './Header';
import { projectData } from '../data/ProjectData';

const { Title } = Typography;

export const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1400);
    clearTimeout();
    onChange();
  }, []);

  const onChange = (checked) => {
    setLoading(!checked);
  };

  return (
    <>
      <Header cta={{ title: 'Home', route: '/' }} />
      <Title style={{ borderBottom: '4px solid #3DB0F7' }}>
        {' '}
        Recent Projects
      </Title>
      <List
        itemLayout='vertical'
        size='large'
        dataSource={projectData}
        renderItem={(item) => (
          <List.Item key={item.title} actions={!loading}>
            <Skeleton loading={loading} active avatar>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={
                  <a href={item.href} target='_blank' rel='noopener noreferrer'>
                    {item.title}
                  </a>
                }
                description={item.description}
              />
              {item.content}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};

export default Projects;
