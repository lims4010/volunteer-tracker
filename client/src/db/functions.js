import axios from "axios";

const getNameDB = async (date) => {
  try {
    const res = await axios.get("/api/names", {
      params: {
        date: date,
      },
    });
    return res.data.data;
  } catch (err) {
    console.error(err);
  }
};

const addNameDB = async (selectedRows, name) => {
  try {
    await axios.post("/api/names", {
      selectedRows: selectedRows,
      name: name,
    });
  } catch (err) {
    console.error(err);
  }
};

const deleteNameDB = async (selectedRows, name) => {
  console.log(selectedRows);
  try {
    await axios.delete("/api/names", {
      data: {
        selectedRows: selectedRows,
        name: name,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
export { getNameDB, addNameDB, deleteNameDB };
