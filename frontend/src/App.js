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
import Request from "./components/Order/Request";

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
import WebFont from "webfontloader";
import NotFound from "./components/layout/notFound/NotFound";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    document.body.style.fontFamily = "'Roboto', sans-serif";

    store.dispatch(loadUser());
  });

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      {" "}
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />

          <Route path="loader" element={<Loader />} />

          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <ProductDetails />
                <Footer />
              </>
            }
          />

          <Route
            path="/products"
            element={
              <>
                <Header />
                <Products />
                <Footer />
              </>
            }
          />

          <Route
            path="/products/:keyword"
            element={
              <>
                <Header />
                <Products />
                <Footer />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Header />
                <LoginSignup />
              </>
            }
          />

          <Route
            path="/category"
            element={
              <>
                <Header />
                <Products />
                <Footer />
              </>
            }
          />

          <Route
            path="/account"
            element={
              <>
                <Header />
                <Profile />
                <Footer />
              </>
            }
          />

          <Route
            path="/me/update"
            element={
              <>
                <Header />
                <UpdateProfile />
                <Footer />
              </>
            }
          />

          <Route
            path="/password/change"
            element={
              <>
                <Header />
                <UpdatePassword />
                <Footer />
              </>
            }
          />

          <Route
            path="/password/forgot"
            element={
              <>
                <Header />
                <ForgotPassword />
                <Footer />
              </>
            }
          />

          <Route
            path="password/reset/:token"
            element={
              <>
                <Header />
                <ResetPassword />
                <Footer />
              </>
            }
          />

          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
                <Footer />
              </>
            }
          />

          <Route
            path="/shipping"
            element={
              <>
                <Header />
                <Shipping />
                <Footer />
              </>
            }
          />

          <Route
            path="/order/confirm"
            element={
              <>
                <Header />
                <ConfirmOrder />
                <Footer />
              </>
            }
          />

          <Route
            path="/process/payment"
            element={
              <>
                <PaymentOut />
              </>
            }
          />

          <Route
            path="/success"
            element={
              <>
                <Header />
                <OrderSuccess />
                <Footer />
              </>
            }
          />

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <MyOrders />
                <Footer />
              </>
            }
          />
          <Route
            path="/order/:id"
            element={
              <>
                <Header />
                <OrderDetails />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <>
                <Header />
                <Dashboard />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/products"
            element={
              <>
                <Header />
                <ProductList />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/product"
            element={
              <>
                <Header />
                <NewProduct />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/product/:id"
            element={
              <>
                <Header />
                <UpdateProduct />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <>
                <Header />
                <OrderList />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/order/:id"
            element={
              <>
                <Header />
                <ProcessOrder />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/users"
            element={
              <>
                <Header />
                <UsersList />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/user/:id"
            element={
              <>
                <Header />
                <UpdateUser />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/reviews"
            element={
              <>
                <Header />
                <ProductReviews />
                <Footer />
              </>
            }
          />

          <Route
            path="/return"
            element={
              <>
                <Header />
                <Request />
                <Footer />
              </>
            }
          />

          <Route
            element={
              window.location.pathname === "/process/payment" ? null : NotFound
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
