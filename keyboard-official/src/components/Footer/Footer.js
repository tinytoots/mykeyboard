import React from 'react';
import './Footer.css';
import 'antd/dist/antd.css';
import appConstants from '../Constant/constant'
import { Menu, Image } from 'antd';
import { NavLink } from 'react-router-dom'
import logo3 from './logo3.svg';
import { Row, Col } from 'antd';
import { Typography, Divider, Progress, Space } from 'antd';
import { QqOutlined, MailFilled } from '@ant-design/icons';


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
      <div className='root-bg'>
          <div className='inner-footer2'>
              <Row>
                  <Col className='col1' xs={5} sm={0} md={0} lg={0} xl={0}>
                      <div className='header-root2'>
                          <NavLink to="/keybaord">
                          <img className='logo222' src={logo3} width={45} />
                          </NavLink>
                      </div>
                  </Col>
                  <Col className='col2' xs={0} sm={5} md={5} lg={5} xl={5}>
                      <div className='header-root2'>
                          <NavLink to="/keybaord">
                          <img className='logo222' style={{marginLeft: "-13px"}} src={logo3} width={75} />
                          </NavLink>
                      </div>
                  </Col>
                  {/* <Col className='col3' xs={0} sm={4} md={6} lg={8} xl={6}>
                      <div className='header-root2'>
                          <NavLink to="/keybaord">
                          <img className='logo222' src={logo3} width={45} />
                          </NavLink>
                      </div>
                  </Col> */}
                  <Col className='col4' xs={19} sm={19} md={19} lg={19} xl={19}>
                      <Paragraph className='footer-contact'>
                          <div className="contact-title">Contact Info</div>
                          <Space direction="vertical">
                              <p className='p1'><MailFilled />&nbsp;  mykeyboardforfun@gmail.com</p>
                              <p style={{marginTop: "-15px", marginRight: "120px"}}><QqOutlined />&nbsp;  386950054</p>
                          </Space>
                      </Paragraph>
                  </Col>
              </Row>
              
              <div className='gray-lane' />
              <Paragraph>
                <p className='footer-copyright'>Made with 🤪 By Chen</p>
                {/* <p className='footer-copyright2'>Copyright &copy; 2021 Chen. All rights reserved.</p> */}
              </Paragraph>
            </div>
        </div>
    );
    // &nbsp;&nbsp;       Made with ❤ By Chen
    // <p className='footer-copyright'>Copyright &copy; 2021 Chen. All rights reserved.</p>
  }
}