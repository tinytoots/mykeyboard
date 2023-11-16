import React from 'react';
import './Header.css';
import 'antd/dist/antd.css';
import { Menu, Switch } from 'antd';
import { NavLink } from 'react-router-dom'
import logo3 from './logo3.svg';
import { FormattedMessage } from 'react-intl'
import { LOCALES } from '../i18n/constants';
import { AppContext } from '../Context';

const { SubMenu } = Menu;

// setLanguage(LOCALES.ENGLISH)}

export default class Header extends React.Component {
  
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  static contextType = AppContext;

  render() {
    const { current, isHot, wind, isEN, isCN } = this.state;
    const {state, dispatch} = this.context;
    const setLanguage = (locale) => {
      dispatch({
        type: 'setLocale',
        locale
      })
    }

    function onChange(checked) {
      if (checked == true) {
        setLanguage(LOCALES.ENGLISH);
      } else {
        setLanguage(LOCALES.CHINESE);
      }
    }

    // const [toggled, setToggled] = useState(false);


    return (
      <div className='inner'>
        <div className='header-root'>
          <NavLink to="/keybaord">
          <img className='logo' src={logo3} width={35} />
          </NavLink>
          <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
            <Menu.Item key="keybaord" className='navModify'>
              <NavLink to="/keybaord" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}><FormattedMessage id="keyboard"/></NavLink>
            </Menu.Item>
            <Menu.Item key="keycap" className='navModify2'>
              <NavLink to="/keycap" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}><FormattedMessage id="keycap"/></NavLink>
            </Menu.Item>
            {/* <Menu.Item key="problem">
              <NavLink to="/problem">键圈吐槽</NavLink>
            </Menu.Item> */}
            <Menu.Item key="readme">
              <NavLink to="/readme" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}><FormattedMessage id="readme"/></NavLink>
            </Menu.Item>
            <Menu.Item key="readme">
            <Switch checkedChildren="中文" 
                    unCheckedChildren="English" 
                    defaultunChecked 
                    onChange={onChange} 
            />
            </Menu.Item>
            <Menu.Item key="profile">
              <NavLink to="/profile" style={{color: '#8e8e93', textDecoration: 'none'}} activeStyle={{color: '#d1d1d6', textDecoration: 'none'}}><FormattedMessage id="profile"/></NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}


