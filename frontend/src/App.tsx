import "./App.css";
import routes from "./Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <RouterProvider router={routes} />
      </div>
  );
}

export default App;
