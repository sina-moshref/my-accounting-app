import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Provider store={store}>
    
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
