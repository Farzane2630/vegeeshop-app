import react, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";


const Index = lazy(() => import("./Pages/Index/Index"))
const Products = lazy(() => import("./Pages/Products/Products"))
const About = lazy(() => import("./Pages/About/About"))
const Blog = lazy(() => import("./Pages/Blog/Blog"))
const Cart = lazy(() => import("./Pages/Cart/Cart"))
const Checkout = lazy(() => import("./Pages/Checkout/Checkout"))
const Contact = lazy(() => import("./Pages/Contact/Contact"))
const ProductInfo = lazy(() => import("./Pages/ProductInfo/ProductInfo"))
const WishList = lazy(() => import("./Pages/WishList/WishList"))
const Register = lazy(() => import("./Pages/Auth/Register"))

export default function AllRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="register" Component={Register} />
        <Route path="products/:currentPageCount" Component={Products} />
        <Route path="about" Component={About} />
        <Route path="blog" Component={Blog} />
        <Route path="cart" Component={Cart} />
        <Route path="checkout" Component={Checkout} />
        <Route path="contact" Component={Contact} />
        <Route path="product-info/:productID" Component={ProductInfo} />
        <Route path="wishlist" Component={WishList} />
      </Routes>
    </Suspense>
  );
}
