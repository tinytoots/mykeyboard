import React, { useState } from 'react';
import './KbGbInfo.css';
import { Table, Input, Button, Space } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Progress } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

function progressCal(start, end) {
  var startDate = new Date(start); 
  var endDate = new Date(end); 
  var Difference_In_Time = endDate.getTime() - startDate.getTime(); 
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  // document.write("日期： <br>" +startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
  //           + Difference_In_Days); 

  var todayDate = new Date();
  var todayDate2 = todayDate.toLocaleDateString();
  // document.write("<br><br>今天日期为：" 
  //           + todayDate2); 

  var date3 = new Date(todayDate2);        
  var Difference_In_Time2 = date3.getTime() - startDate.getTime(); 
  var Difference_In_Days2 = Difference_In_Time2 / (1000 * 3600 * 24);
  // document.write("<br><br>日期： <br>" + startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
  //           + Difference_In_Days2); 

  var percent = Difference_In_Days2 / Difference_In_Days * 100;
  // document.write("<br><br>进度" + percent);
  return percent;
}

function delayCal(start, end) {
  var startDate = new Date(start); 
  var endDate = new Date(end); 
  var Difference_In_Time = endDate.getTime() - startDate.getTime(); 
  // 原计划总用时
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  // document.write("日期： <br>" +startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
  //           + Difference_In_Days); 

  var todayDate = new Date();
  var todayDate2 = todayDate.toLocaleDateString();
  // document.write("<br><br>今天日期为：" 
  //           + todayDate2); 

  var date3 = new Date(todayDate2);        
  var Difference_In_Time2 = date3.getTime() - startDate.getTime(); 
  // 目前总用时
  var Difference_In_Days2 = Difference_In_Time2 / (1000 * 3600 * 24);
  // document.write("<br><br>日期： <br>" + startDate + "<br>和<br>" + endDate + "<br>相差的天数为：" 
  //           + Difference_In_Days2); 

  var percent2 = (Difference_In_Days2 - Difference_In_Days) / Difference_In_Days * 100;
  // document.write("<br><br>进度" + percent);
  return percent2;
}

var thermal_seq2 = progressCal("4/8/2021", "9/1/2022").toFixed(1);
var kara = progressCal("12/31/2020", "6/1/2021").toFixed(1);
var u80a_seq2 = progressCal("10/31/2020", "6/30/2021").toFixed(1);
var foundary_jules = progressCal("4/15/2020", "10/1/2021").toFixed(1);
var m50a = progressCal("5/15/2020", "10/1/2021").toFixed(1);
var iron165_r2 = progressCal("2/27/2021", "3/1/2022").toFixed(1);
var iron180 = progressCal("11/14/2020", "10/1/2021").toFixed(1);
var im = progressCal("9/1/2020", "9/1/2021").toFixed(1);
var matrix65 = progressCal("1/6/2021", "7/1/2021").toFixed(1);
var space80 = progressCal("5/10/2021", "11/31/2021").toFixed(1);
var box75 = progressCal("2/19/2021", "12/31/2021").toFixed(1);
var Andromeda = progressCal("10/31/2020", "6/30/2021").toFixed(1);
var mach80 = progressCal("4/30/2021", "8/31/2021").toFixed(1);
var leaf65 = progressCal("1/2/2021", "8/31/2021").toFixed(1);
var mini1800 = progressCal("5/10/2021", "8/10/2021").toFixed(1);
var master98 = progressCal("5/10/2021", "8/10/2021").toFixed(1);
var i104 = progressCal("5/15/2021", "6/16/2021").toFixed(1);
var salvation = progressCal("5/7/2021", "12/31/2021").toFixed(1);
var mini1800 = progressCal("5/10/2021", "8/10/2021").toFixed(1);
var cyberboard_r2 = progressCal("5/28/2021", "7/31/2021").toFixed(1);
var am_hatsu = progressCal("4/29/2021", "10/29/2021").toFixed(1);
var fuji65 = progressCal("3/16/2021", "2/15/2022").toFixed(1);
var piggy60 = progressCal("5/25/2021", "9/30/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);
var hidari = progressCal("4/30/2021", "12/31/2022").toFixed(1);



// document.write("<br><br>进度" + u80a_seq2);

const data = [
    {
      key: '1',
      name: 'THERMAL SEQ2',
      brand: 'RAMA WORKS',
      type: '不限量',
      price: '$360',
      time: '2021-04-08',
      progress: <Progress percent={thermal_seq2} />,
    },
    {
      key: '2',
      name: 'KARA',
      brand: 'RAMA WORKS',
      type: '不限量',
      price: '$160',
      time: '2021-12-31',
      progress: <Progress percent={100} />,
    },
    {
      key: '3',
      name: 'U80-A SEQ2',
      brand: 'RAMA WORKS',
      type: '不限量',
      price: '$400',
      time: '2020-10-31',
      progress: <Progress percent={u80a_seq2} />,
      // progress: <Progress strokeColor="orange" percent={u80a_seq2} />,
    },
    {
      key: '4',
      name: 'FOUNDRY JULES',
      brand: 'RAMA WORKS',
      type: '不限量',
      price: '$400',
      time: '2020-04-15',
      progress: <Progress percent={foundary_jules} />,
    },
    {
      key: '5',
      name: 'FM50-A GRID',
      brand: 'RAMA WORKS',
      type: '不限量',
      price: '$300',
      time: '2020-05-15',
      progress: <Progress percent={m50a} />,
    },
    {
      key: '6',
      name: 'IRON165 R2',
      brand: 'Smith + Rune',
      type: '锁区限量 亚洲500 全球1250',
      price: '$424',
      time: '2021-02-27',
      progress: <Progress percent={iron165_r2} />,
    },
    {
      key: '7',
      name: 'IRON180',
      brand: 'Smith + Rune',
      type: '锁区限量 亚洲300 全球600',
      price: '$585',
      time: '2020-11-14',
      progress: <Progress percent={iron180} />,
    },
    {
      key: '8',
      name: 'IM+',
      brand: 'Matrix Lab',
      type: '分段总限时15分钟',
      price: '¥2599',
      time: '2020-09-01',
      progress: <Progress percent={im} />,
    },
    {
      key: '9',
      name: 'Matrix Lab 65%',
      brand: 'Matrix Lab',
      type: '分段总限时15分钟',
      price: '¥2699',
      time: '2021-01-06',
      progress: <Progress percent={matrix65} />,
    },
    {
      key: '10',
      name: 'Space80: Apollo',
      brand: 'Gray Studio',
      type: '不限量',
      price: '¥2699',
      time: '2021-05-10',
      progress: <Progress percent={space80} />,
    },
    {
      key: '11',
      name: 'BOX75',
      brand: 'Lin Design Studio',
      type: '不限量',
      price: '¥3499 | $550',
      time: '2021-02-19',
      progress: <Progress percent={box75} />,
    },
    {
      key: '12',
      name: 'Andromeda 仙女座',
      brand: 'Lin Design Studio',
      type: '限量100',
      price: '¥4999',
      time: '2020-10-31',
      progress: <Progress percent={Andromeda} />,
    },
    {
      key: '13',
      name: 'Mach80',
      brand: 'MelGeek',
      type: '限时4小时',
      price: '¥3299',
      time: '2021-04-30',
      progress: <Progress percent={mach80} />,
    },
    {
      key: '14',
      name: 'Leaf 65',
      brand: 'Fox Lab',
      type: '不限量',
      price: '¥2551',
      time: '2021-01-02',
      progress: <Progress percent={leaf65} />,
    },
    {
      key: '15',
      name: '1800mini',
      brand: 'Xikii',
      type: '不限量',
      price: '¥2499',
      time: '2021-05-10',
      progress: <Progress percent={mini1800} />,
    },
    {
      key: '16',
      name: 'Master98',
      brand: 'Xikii',
      type: '不限量',
      price: '¥3670',
      time: '2021-05-10',
      progress: <Progress percent={master98} />,
    },
    {
      key: '17',
      name: 'i104 大爽',
      brand: 'Xikii',
      type: '准现货80套',
      price: '¥2980',
      time: '2021-05-15开团，售完为止',
      progress: <Progress percent={i104} />,
    },
    {
      key: '18',
      name: 'WILBA.TECH SALVATION',
      brand: 'WILBA.TECH X Salvun',
      type: '不限量',
      price: '¥2285',
      time: '2021-05-07',
      progress: <Progress percent={salvation} />,
    },
    {
      key: '19',
      name: 'CYBERBOARD R2',
      brand: 'Angry Miao',
      type: '数量未知',
      price: '¥3700',
      time: '2021-05-28',
      progress: <Progress percent={cyberboard_r2} />,
    },
    {
      key: '20',
      name: 'AM HATSU',
      brand: 'Angry Miao',
      type: '不限量',
      price: '$1600',
      time: '2021-07-29',
      progress: <Progress percent={am_hatsu} />,
    },
    {
      key: '21',
      name: 'Fuji65',
      brand: 'Sakura Studio',
      type: '不限量',
      price: '$285',
      time: '2021-03-16',
      progress: <Progress percent={fuji65} />,
    },
    {
      key: '22',
      name: 'Hidari',
      brand: 'MONOKEI x Thesiscamper',
      type: '不限量',
      price: '$419',
      time: '2021-04-30',
      progress: <Progress percent={hidari} />,
    },
    {
      key: '23',
      name: 'Piggy60',
      brand: 'Jacky Lab',
      type: '不限量',
      price: '$428',
      time: '2021-05-25',
      progress: <Progress percent={piggy60} />,
    },
 






  ];















  

export default class KbGbInfo extends React.Component {

  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.name.localeCompare(b.name)},
        width: '15%',
      },
      {
        title: '品牌',
        dataIndex: 'brand',
        key: 'brand',
        defaultSortOrder: 'descend',
        ...this.getColumnSearchProps('brand'),
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.brand.localeCompare(b.brand)},
        width: '15%',
      },
      {
        title: '团购类别',
        dataIndex: 'type',
        key: 'type',
        width: '10%',
      },
      {
        title: '起售价',
        key: 'price',
        dataIndex: 'price',
        sortDirections: ['ascend', 'descend', 'ascend'],
        sorter: (a, b) =>{return a.price.localeCompare(b.price)},
        width: '10%',
      },
      {
        title: '截团时间',
        key: 'time',
        dataIndex: 'time',
        sorter: (a, b) =>{return a.time.localeCompare(b.time)},
        width: '15%',
      },
      {
        title: '进度',
        dataIndex: 'progress',
        key: 'progress',
        width: '15%',
        sortDirections: ['ascend', 'descend', 'ascend'],
      },
    ];
    return (
        <div>
            <h2>键盘团购信息</h2>
            {/* <Progress className={'point'} percent={99} showInfo={false}/> 进度 <br/>
            <Progress className={'point'} strokeColor="orange" percent={99} showInfo={false}/> 延期 <br/>
            <Progress className={'point'} percent={100} showInfo={false}/> 发货 <br/>
            <Progress className={'point'} strokeColor="red" percent={99} showInfo={false}/> 流团 <br/> */}
            <Table className={'table'} columns={columns} dataSource={data} 
            pagination={{ defaultPageSize: 30}} />
        </div>
    )
  }

    
}


// pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}} />