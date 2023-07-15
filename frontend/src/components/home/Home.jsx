import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./home.css";
import ProductCard from "./ProductCard";
import Metadata from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Gamusa Gogamukh-Assamese Traditional Attire" />

          <div className="banner">
            <div className="banner-text">
              <p>THE ASSAMESE TRADITIONAL STORE</p>
              <h1>GAMUSA GOGAMUKH</h1>
            </div>
          </div>
          <CategoryList />
          <div className="home-container">
            <div className="looking-for">
              <Link to="/products/man">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src="https://images.bewakoof.com/t1080/men-s-purple-beast-within-2-0-oversized-t-shirt-581488-1677228989-1.jpg?tr=q-100"
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>HIM</h4>
                </div>
              </Link>

              <Link to="/products/women">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src="https://images.bewakoof.com/t1080/women-s-purple-time-to-get-shit-done-graphic-printed-boyfriend-t-shirt-599539-1687764989-1.jpg"
                      alt="looking-for"
                    />{" "}
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>HER</h4>
                </div>
              </Link>

              <Link to="/products">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?format=webp&w=480&dpr=1.3"
                      alt="looking-for"
                    />{" "}
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>UNISEX</h4>
                </div>
              </Link>

              <Link to="/products/kids">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1679980950_2608416.jpg?format=webp&w=480&dpr=1.3"
                      alt="looking-for"
                    />{" "}
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>KIDS</h4>
                </div>
              </Link>
            </div>

            <h2 className="homeHeading">FEATURED</h2>

            <div className="container" id="container">
              {products &&
                products.map((products) => <ProductCard product={products} />)}
            </div>
            <Link to="/products">SHOW ALL</Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
