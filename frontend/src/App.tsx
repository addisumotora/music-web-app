import { useSelector } from "react-redux";
import "./App.css";
import routes from "./Routes";
import { RouterProvider } from "react-router-dom";
import { RootState } from "./features/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
      <div className="App">
        <RouterProvider router={routes} />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
  );
}

export default App;
