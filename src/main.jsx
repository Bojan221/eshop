import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Clerk
import { ClerkProvider } from "@clerk/clerk-react";

// Router
import { createBrowserRouter, Router } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./store/store.js";

// Pages
import HomePage from "./pages/HomePage.jsx";
import SingleProductPage from "./pages/SingleProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <SingleProductPage />,
      },
    ],
  },
]);

const PUBLISHABLEKEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLEKEY}>
        <RouterProvider router={router} />
      </ClerkProvider>
    </Provider>
  </StrictMode>
);
