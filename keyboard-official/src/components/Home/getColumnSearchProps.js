// getColumnSearchProps.js
import React from 'react';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import SearchDropdown from './SearchDropdown';

const getColumnSearchProps = (dataIndex, searchText, setSearchText, searchInput, handleSearch, handleReset) => ({
    filterDropdown: (props) => (
        <SearchDropdown
          dataIndex={dataIndex}
          selectedKeys={props.selectedKeys}
          setSelectedKeys={props.setSelectedKeys}
          confirm={props.confirm}
          clearFilters={props.clearFilters}
          searchInputRef={searchInput} // 传递 ref
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
      ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible && searchInput && searchInput.current) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: text =>
      searchText && dataIndex === searchText ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
});

export default getColumnSearchProps;