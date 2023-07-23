import "./App.css";
import Header from "./components/layout/header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Footer from "./components/layout/footer/Footer";
import Home from "./components/home/Home.jsx";
import React, { useEffect } from "react";
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
import NotFound from "./components/layout/notFound/NotFound";
import Terms from "./components/extra/terms";
import Privacy from "./components/extra/Privacy";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  React.useEffect(() => {
    store.dispatch(loadUser());
  });

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollToTop />
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
                <ScrollToTop />
                <ScrollToTop />
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
                <ScrollToTop />
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
                <Header />
                <LoginSignup />
              </>
            }
          />

          <Route
            path="/category"
            element={
              <>
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
                <PaymentOut />
              </>
            }
          />

          <Route
            path="/success"
            element={
              <>
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
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
                <ScrollToTop />
                <Header />
                <Request />
                <Footer />
              </>
            }
          />

          <Route
            path="/terms"
            element={
              <>
                <ScrollToTop />
                <Header />
                <Terms />
                <Footer />
              </>
            }
          />

          <Route
            path="/privacy"
            element={
              <>
                <ScrollToTop />
                <Header />
                <Privacy />
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
