import React from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'

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
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="progress">
          <NavLink to="/progress">键盘</NavLink>
        </Menu.Item>
        <Menu.Item key="price">
          <NavLink to="/price">键帽</NavLink>
        </Menu.Item>
        {/* <Menu.Item key="problem">
          <NavLink to="/problem">键圈吐槽</NavLink>
        </Menu.Item> */}
        <Menu.Item key="profile">
          <NavLink to="/profile">关于</NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}


