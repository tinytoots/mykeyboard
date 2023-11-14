import React, { useRef, useState } from 'react';
import './KcGbInfo.css';
import { Table, Progress } from 'antd';
import 'antd/dist/antd.css';
import { FormattedMessage } from 'react-intl'
import getColumnSearchProps from '../getColumnSearchProps';
import keycapData from '../../Constant/keycapData';


  export default function KcGbInfo() {

    const [searchText, setSearchText] = useState('');
    const [ setSearchedColumn ] = useState('');
    const searchInput = useRef(null);
  
  
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
  
    const handleReset = clearFilters => {
      clearFilters();
      setSearchText('');
    };

    const columns = [
      {
        title: <FormattedMessage id="kbName"/>,
        dataIndex: 'name',
        key: 'name',
        ...getColumnSearchProps('name', searchText, setSearchText, searchInput, handleSearch, handleReset),
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.name.localeCompare(b.name)},
        width: '16%',
        responsive: ['sm', 'xs']
      },
      {
        title: <FormattedMessage id="kbBrand"/>,
        dataIndex: 'brand',
        key: 'brand',
        // defaultSortOrder: 'escend',
        ...getColumnSearchProps('brand', searchText, setSearchText, searchInput, handleSearch, handleReset),
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.brand.localeCompare(b.brand)},
        width: '16%',
        responsive: ['sm']
      },
      {
        title: <FormattedMessage id="gbQuantity"/>,
        dataIndex: 'quantity',
        key: 'quantity',
        width: '16%',
        responsive: ['sm']
      },
      {
        title: <FormattedMessage id="gbPrice"/>,
        key: 'price',
        dataIndex: 'price',
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.priceInt - b.priceInt},
        width: '12%',
        responsive: ['sm']
      },
      {
        title: <FormattedMessage id="gbEnd"/>,
        key: 'time',
        dataIndex: 'time',
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.time.localeCompare(b.time)},
        width: '20%',
        responsive: ['sm']
      },
      {
        title: <FormattedMessage id="gbProgress"/>,
        dataIndex: 'progressInt',
        key: 'progress',
        render: progressInt => <Progress percent={progressInt} />,
        width: '25%',
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.progressInt - b.progressInt},
        responsive: ['sm', 'xs']
      },
    ];
    return (
        <div>
            <h2 className="keycapTitle"><FormattedMessage id="kcTitle"/></h2>
            <Table className={'table'} columns={columns} dataSource={keycapData} 
            expandable={{
              expandedRowRender: record => <p style={{ margin: 0 }}>
                <FormattedMessage id="kbBrand"/>： {record.brand}<br/>
                <FormattedMessage id="gbQuantity"/>： {record.quantity}<br/>
                <FormattedMessage id="gbPrice"/>： {record.price}<br/>
                <FormattedMessage id="gbEnd"/>： {record.time}<br/>
                <FormattedMessage id="shipping"/>： {record.shipping}<br/>
                <FormattedMessage id="detail"/>： 
                <a href={record.detailUrl} target="_blank" rel="noopener noreferrer">
                  {record.detailText}
                </a>
                <br />
                <FormattedMessage id="update"/>： {record.updateDate}<br/>
                <FormattedMessage id="delayTotal"/>： {record.delayTotalDays}<br/>
                <Progress percent={record.progressInt} />
                <br/>
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#1890FF"/> <FormattedMessage id="gbProgress"/> &nbsp;
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#FAAD14"/> <FormattedMessage id="gbDelay"/> &nbsp;
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#52C41A"/> <FormattedMessage id="gbShipping"/> &nbsp;
                <Progress style={{width:8}} percent={100} showInfo={false} strokeColor="#FF4D4F"/> <FormattedMessage id="gbFailure"/>
                </p>,
              rowExpandable: record => record.name !== 'Not Expandable',
            }}
            pagination={{ defaultPageSize: 30}} />
        </div>
    )
  }
