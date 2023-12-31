import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./globals.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import ReduxThunk from "redux-thunk";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "@/components/layout";
import { Home } from "@/components/pages";

import Join from "./routes/Join";
import Notice from "./routes/Notice";
import Donate from "./routes/Donate";
import NotFound from "./routes/NotFound";

import { QueryClient, QueryClientProvider } from "react-query";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "/join", element: <Join /> },
  { path: "/notice", element: <Notice /> },
  { path: "/buymeacoffee", element: <Donate /> },
  { path: "/notfound", element: <NotFound /> },
]);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
