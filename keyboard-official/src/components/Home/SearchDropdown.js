import React, { useRef } from 'react';
import { Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchDropdown = ({ 
  dataIndex, 
  setSelectedKeys, 
  selectedKeys, 
  confirm, 
  clearFilters,
  handleSearch,
  handleReset,
  searchInputRef
}) => {


  return (
    <div style={{ padding: 8 }}>
        <Input
          ref={searchInputRef}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}>
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} 
            size="small" 
            style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSelectedKeys([selectedKeys[0]]);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
  );
};

export default SearchDropdown;