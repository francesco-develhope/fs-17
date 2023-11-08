import { HelloWorld } from "./component/helloworld/HelloWorld";
import { StefButton } from "./component/stefanbutton/StefanButton";

function App() {
  return <div>
  <HelloWorld name="Giovanni" age={18} />
  <StefButton />
  </div>
}

export default App;
