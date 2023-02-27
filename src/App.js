import "./App.css";
import Board from "./layouts/board";
import Boards from "./layouts/boards";
import SideBar from "./layouts/sidebar";
// import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="flex h-full">
      <SideBar />
      <Boards />
      <Board />
    </div>
  );
}

export default App;
