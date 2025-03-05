import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import Root from "./components/Root";
import Error from "./components/Error";
import ProductDetails from "./components/ProductsDetails";

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/products" element={<Products />}></Route>
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> }, //path: "/"
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetails /> },
    ],
  },
]);

// const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
