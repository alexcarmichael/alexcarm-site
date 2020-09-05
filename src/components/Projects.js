import React, { useState, useEffect } from 'react';
import { Skeleton, List, Avatar, Typography } from 'antd';
import { projectData } from '../data/ProjectData';
import Layout from './Layout';

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
      <Layout title='Home' route='/' header={true} footer={false} />
      <Title className='projects-heading'>Recent Projects</Title>
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
      <Layout />
    </>
  );
};

export default Projects;
