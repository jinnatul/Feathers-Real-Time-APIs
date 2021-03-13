import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Row, Col, Table } from 'antd';
import app from '../setting/feathers'

const Service = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData();
    app.service('ideas').on('created', fetchData);
  }, [])

  const fetchData = async () => {
    try {
      const ideas = await app.service('ideas').find();
  
      const resData = []
      ideas.map((el, idx) => resData.push({
        key: idx,
        ...el
      }));

      setData(resData);
    } catch (error) {
      
    }
  }

  const onFinish = (value) => {
    try {
      app.service('ideas').create(value);
    } catch (error) {
      
    }
  };

  const columns = [
    {
      title: 'Text',
      dataIndex: 'text',
      key: 'text',
    },
    {
      title: 'Tech',
      dataIndex: 'tech',
      key: 'tech',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
  ];

  return (
    <div>
      <Form name="basic" onFinish={onFinish}>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
            <Form.Item
              name="text"
            >
              <Input 
                placeholder="Enter text"
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
            <Form.Item
              name="tech"
            >
              <Input 
                placeholder="Enter tech"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
            <Form.Item
              name="owner"
            >
              <Input 
                placeholder="Enter owner"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xl={{ span: 10, offset: 11 }} xs={16}>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row gutter={[24, 24]}>
        <Col xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 0 }}>
          <Table dataSource={data} columns={columns} />
        </Col>
      </Row>
    </div>
  );
};

export default Service
