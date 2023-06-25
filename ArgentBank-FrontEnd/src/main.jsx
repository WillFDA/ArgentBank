import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/Root";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ErrorPage } from "./ErrorPage";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import { Provider } from "react-redux";
import store from "./redux/store";
import Transactions from "./pages/Transactions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/error" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
