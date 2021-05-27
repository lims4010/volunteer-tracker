import { useState, useEffect } from "react";
import { message, Button, Table, Input, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import buildData from "../util/buildData";
import { addNameDB, deleteNameDB } from "../db/functions";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Volunteers",
    dataIndex: "volunteers",
    render: (names) => names.join(", "),
  },
];

const InputTable = () => {
  const [selectedRows, setSelectedRows] = useState();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [showSpin, setShowSpin] = useState(false);

  const rowSelection = {
    onChange: (_selectedRowKeys, selectedRows) => {
      setSelectedRows(selectedRows);
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setShowSpin(true);
      const data = await buildData();
      setData(data);
      setShowSpin(false);
    };
    fetchData();
  }, []);

  const addName = async () => {
    await addNameDB(selectedRows, name);
  };

  const removeName = async () => {
    await deleteNameDB(selectedRows, name);
  };

  const handleClick = async (dbFunc) => {
    if (name.length === 0) {
      message.error("Input a valid name.");
    } else {
      setShowSpin(true);
      await dbFunc();
      const data = await buildData();
      setData(data);
      setShowSpin(false);
    }
  };

  return (
    <div>
      <Input
        size="large"
        placeholder="name"
        prefix={<UserOutlined />}
        style={{ width: 200 }}
        onChange={({ target: { value: name } }) =>
          setName(name.trim().toLowerCase())
        }
      />
      {showSpin && <Spin style={{ marginLeft: "5%" }} />}
      <br />
      <br />
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <Button type="primary" onClick={() => handleClick(addName)}>
        Add
      </Button>
      <Button
        style={{ marginLeft: "2%" }}
        type="primary"
        onClick={() => handleClick(removeName)}
        danger
      >
        Delete
      </Button>
      <br />
      <br />
    </div>
  );
};

export default InputTable;
