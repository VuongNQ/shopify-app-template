import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./styles/ultil.scss";
import "./styles/reset.scss";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
