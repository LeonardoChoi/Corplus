import ReactDOM from "react-dom";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

ReactDOM.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>,
  document.getElementById("root")
);
