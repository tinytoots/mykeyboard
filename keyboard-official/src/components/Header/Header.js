import React from 'react';
import './Header.css';
import 'antd/dist/antd.css';
import appConstants from '../Constant/constant'
import { Menu, Image } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
import logo from './logo.svg';


const { SubMenu } = Menu;

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
      <div className='header-root'>
        <NavLink to="/keybaord">
        <img className='logo' src={logo} height={50} width={35} />
        </NavLink>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="keybaord" className="keybaord-header">
            <NavLink to="/keybaord">键盘</NavLink>
          </Menu.Item>
          <Menu.Item key="keycap">
            <NavLink to="/keycap">键帽</NavLink>
          </Menu.Item>
          {/* <Menu.Item key="problem">
            <NavLink to="/problem">键圈吐槽</NavLink>
          </Menu.Item> */}
          <Menu.Item key="readme">
            <NavLink to="/readme">说明</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}


