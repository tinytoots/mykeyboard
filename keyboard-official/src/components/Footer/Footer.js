import React from 'react';
import './Footer.css';
import 'antd/dist/antd.css';
import appConstants from '../Constant/constant'
import { Menu, Image } from 'antd';
import { NavLink } from 'react-router-dom'
import logo3 from './logo3.svg';
import { Row, Col } from 'antd';
import { Typography, Divider, Progress, Space } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export default class Header extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <div className='inner-footer2'>
        <Row>
            <Col span={6}>
                <div className='header-root2'>
                    <NavLink to="/keybaord">
                    <img className='logo222' src={logo3} width={45} />
                    </NavLink>
                </div>
            </Col>
            <Col span={18}>
                <Paragraph className='footer-contact'>
                    <h5>Contact Info</h5>
                    <Space direction="vertical">
                        <p>mykeyboardforfun@gmail.com</p>
                    </Space>
                </Paragraph>
            </Col>
        </Row>
        
        <div className='gray-lane' />
        <Paragraph>
        <p className='footer-copyright'>Made with 🤪 By Chen</p>
        </Paragraph>
      </div>
    );
    // &nbsp;&nbsp;       Made with ❤ By Chen
    // <p className='footer-copyright'>Copyright &copy; 2021 MyKeyboardForFun. All rights reserved.</p>
  }
}