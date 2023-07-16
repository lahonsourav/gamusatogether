import React, { Fragment, useEffect } from "react";
import "./home.css";
import ProductCard from "./ProductCard";
import Metadata from "../layout/Metadata";
import { clearErrors, getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";
import black from "../../images/black.jpg";
import gamusa from "../../images/gamusa.jpg";
import sale from "../../images/sale.jpg";
import white from "../../images/white.jpg";
import mising from "../../images/mising.jpg";
import ahom from "../../images/ahom.jpg";
import men from "../../images/men.jpg";
import her from "../../images/gift.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

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
              <p>THE TRADITION</p>
              <h1>GAMUSA</h1>
            </div>
          </div>
          <CategoryList />
          <div className="home-container">
            <div className="looking-for">
              <Link to="/products/gam">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={gamusa}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>GAMUSA</h4>
                </div>
              </Link>

              <Link to="/products/trend">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={black}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>TRENDING</h4>
                </div>
              </Link>

              <Link to="/sale">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={sale}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>ON SALE</h4>
                </div>
              </Link>

              <Link to="/products/new">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={white}
                      alt="looking-for"
                    />{" "}
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>JUST ARRIVED</h4>
                </div>
              </Link>
            </div>

            <h2 className="homeHeading">FEATURED</h2>

            <div className="container" id="container">
              {products &&
                products.map((products) => <ProductCard product={products} />)}
            </div>
            <Link className="show-all" to="/products">
              SHOW ALL
            </Link>
            <div className="looking-for-2">
              <Link to="/products/mis">
                <div className="looking-for-item-2">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={mising}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>MISING</h4>
                </div>
              </Link>

              <Link to="/products/ahom">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={ahom}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>AHOM</h4>
                </div>
              </Link>

              <Link to="/products/man">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={men}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>FOR HIM</h4>
                </div>
              </Link>

              <Link to="/products/woman">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={her}
                      alt="looking-for"
                    />{" "}
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>FOR HER</h4>
                </div>
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
