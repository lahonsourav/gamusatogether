import "./App.css";
import Header from "./components/layout/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/home/Home.jsx";
import React from "react";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products";
import LoginSignup from "./components/user/LoginSignup";
import Profile from "./components/user/Profile";
import Loader from "./components/layout/loader/Loader";
import store from "./store";
import { loadUser } from "./actions/userAction";
// import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ResetPassword from "./components/user/ResetPassword";
import ForgotPassword from "./components/user/ForgotPassword";
import Cart from "./components/Cart/Cart.jsx";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import PaymentOut from "./components/Cart/PaymentOut";
import OrderSuccess from "./components/Cart/OrderSucess";
import MyOrders from "./components/Order/MyOrders";
import Dashboard from "./components/admin/Dashboard";
import ProductList from "./components/admin/ProductList";
import NewProduct from "./components/admin/newproduct";
import OrderDetails from "./components/Order/OrderDetails";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrderList from "./components/admin/OrderList";
import ProcessOrder from "./components/admin/ProcessOrder";
import UsersList from "./components/admin/UsersList";
import UpdateUser from "./components/admin/UpdateUser";
import ProductReviews from "./components/admin/ProductReviews";

function App() {
  React.useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="loader" element={<Loader />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:keyword" element={<Products />} />

          <Route path="/login" element={<LoginSignup />} />

          <Route path="/category" element={<Products />} />

          <Route path="/account" element={<Profile />} />

          <Route path="/me/update" element={<UpdateProfile />} />

          <Route path="/password/change" element={<UpdatePassword />} />

          <Route path="/password/forgot" element={<ForgotPassword />} />

          <Route path="password/reset/:token" element={<ResetPassword />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/shipping" element={<Shipping />} />

          <Route path="/order/confirm" element={<ConfirmOrder />} />

          <Route path="/process/payment" element={<PaymentOut />} />

          <Route path="/success" element={<OrderSuccess />} />

          <Route path="/orders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />

          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/admin/products" element={<ProductList />} />

          <Route path="/admin/product" element={<NewProduct />} />

          <Route path="/admin/product/:id" element={<UpdateProduct />} />

          <Route path="/admin/orders" element={<OrderList />} />

          <Route path="/admin/order/:id" element={<ProcessOrder />} />

          <Route path="/admin/users" element={<UsersList />} />

          <Route path="/admin/user/:id" element={<UpdateUser />} />

          <Route path="/admin/reviews" element={<ProductReviews />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
