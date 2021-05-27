import "antd/dist/antd.css";
import "./App.css";
import InputTable from "./components/InputTable";
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
      <Description />
      <br />
      <InputTable />
    </div>
  );
}

export default App;
