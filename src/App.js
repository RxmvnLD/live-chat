import NavBar from "./Components/NavBar";
import ChatArea from "./Components/ChatArea";

function App() {
  return (
    <>
      <NavBar />
      <div className="w-full h-full md:h-[880px] md:py-5 fixed">
        <ChatArea />
      </div>
    </>
  );
}

export default App;
