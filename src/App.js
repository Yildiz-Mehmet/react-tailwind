import Battombar from "components/Battombar";
import Content from "components/Content";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <>
      <div>
        <Sidebar />
        <Content />
      </div>
      <Battombar />
    </>
  );
}

export default App;
