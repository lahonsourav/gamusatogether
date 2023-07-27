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
import bannerlogo from "../../assets/red.png";

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
              <img src={bannerlogo} alt="Gamusa" />
            </div>
          </div>
          <CategoryList />
          <div className="home-container">
            <div className="looking-for">
              <Link to="/products/op">
                <h4>OPENING OFFER</h4>
              </Link>
              <Link to="/products/op">
                <h4>SUMMER DEALS</h4>
              </Link>
              <Link to="/products/op">
                <h4>TRENDING</h4>
              </Link>
              <Link to="/products/op">
                <h4>STEAL DEALS</h4>
              </Link>
            </div>

            <Link to="/products" className="justContainer"></Link>
            <div className="container" id="container">
              {products &&
                products.map((products) => <ProductCard product={products} />)}
            </div>
            <Link className="show-all" to="/products">
              SHOW ALL
            </Link>

            <Link to="/products/mar" className="marryContainer">
              <div></div>
            </Link>

            <div className="looking-for">
              <Link to="/products/op">
                <h4>DORA</h4>
              </Link>

              <Link to="/products/op">
                <h4>KOINA</h4>
              </Link>

              <Link to="/products/op">
                <h4>GAMUSA</h4>
              </Link>

              <Link to="/products/op">
                <h4>EXPLORE</h4>
              </Link>
            </div>

            <div className="giftContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <Link to="/products/op">
                <h4>HIM</h4>
              </Link>
              <Link to="/products/op">
                <h4>HER</h4>
              </Link>
              <Link to="/products/op">
                <h4>BABY HE</h4>
              </Link>
              <Link to="/products/op">
                <h4>BABY SHE</h4>
              </Link>
            </div>

            <div className="ethContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <Link to="/products/op">
                <h4>AHOM</h4>
              </Link>

              <Link to="/products/op">
                <h4>MISING</h4>
              </Link>

              <Link to="/products/op">
                <h4>BODO</h4>
              </Link>

              <Link to="/products/op">
                <h4>EXPLORE</h4>
              </Link>
            </div>

            <div className="axomContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <Link to="/products/op">
                <h4>MUGA</h4>
              </Link>
              <Link to="/products/op">
                <h4>PAAT</h4>
              </Link>
              <Link to="/products/op">
                <h4>ERI</h4>
              </Link>
              <Link to="/products/op">
                <h4>RIHA</h4>
              </Link>
              <Link to="/products/op">
                <h4>MEKHELA</h4>
              </Link>
              <Link to="/products/op">
                <h4>SADOR</h4>
              </Link>
              <Link to="/products/op">
                <h4>JURA</h4>
              </Link>
              <Link to="/products/op">
                <h4>EXPLORE</h4>
              </Link>
            </div>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/@gamusagugamukh2751"
              className="youContainer"
            >
              <div></div>
            </a>

            <a
              href="https://wa.me/+916000601557"
              target="_blank"
              rel="noreferrer"
              className="customContainer"
            >
              <div></div>
            </a>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
