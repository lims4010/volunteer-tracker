import React, { useState } from "react";
import { Table, Radio, Divider } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "5",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "6",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "7",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "8",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "9",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "10",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "11",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "12",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "13",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "14",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const InputTable = () => {
  const [selectionType, setSelectionType] =
    useState<"checkbox" | "radio">("checkbox");
  return (
    <div
      style={{
        marginTop: "5%",
        marginRight: "10%",
        marginLeft: "10%",
        marginBottom: "10%",
      }}
    >
      {/* <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group> */}

      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default InputTable;
