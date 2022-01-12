import "./App.css";
// import Firebase from "./Components/Firebase";
import FireStorage from "./Components/FireStorage";
import Fireauth from "./Components/Fireauth";

function App() {
  return (
    <div>
      <Fireauth />
      {/* <Firebase /> */}
      <FireStorage />
    </div>
  );
}

export default App;
