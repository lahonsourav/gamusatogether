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
import him from "../../images/men.jpg";
import her from "../../images/gift.jpg";
import bannerlogo from "../../assets/gamusa.png";

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
              <Link to="/products/sale">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>ON SALE</h4>
                </div>
              </Link>

              <Link to="/products/op">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />{" "}
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>OPENING OFFER</h4>
                </div>
              </Link>
            </div>

            <Link to="/products/mar" className="marryContainer">
              <div></div>
            </Link>

            <div className="looking-for">
              <Link to="/products/dora">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>DORA</h4>
                </div>
              </Link>

              <Link to="/products/op">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />{" "}
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>KOINA</h4>
                </div>
              </Link>

              <Link to="/products/gam">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
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
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>RUMAL</h4>
                </div>
              </Link>
            </div>

            <div className="giftContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <Link to="/products/man">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
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
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>FOR HER</h4>
                </div>
              </Link>
            </div>

            <div className="ethContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <Link to="/products/mis">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
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
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>AHOM</h4>
                </div>
              </Link>

              <Link to="/products/bod">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>BODO</h4>
                </div>
              </Link>

              <Link to="/products/deo">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>DEORI</h4>
                </div>
              </Link>
            </div>

            <div className="axomContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <Link to="/products/mis">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>MUGA</h4>
                </div>
              </Link>
              <Link to="/products/ahom">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>RIHA</h4>
                </div>
              </Link>

              <Link to="/products/bod">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>MEKHELA</h4>
                </div>
              </Link>

              <Link to="/products/deo">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>JURA</h4>
                </div>
              </Link>

              <Link to="/products/deo">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>PAAT</h4>
                </div>
              </Link>

              <Link to="/products/deo">
                <div className="looking-for-item">
                  <div className="looking-for-item-image">
                    <img
                      className="looking-for-image"
                      src={bannerlogo}
                      alt="looking-for"
                    />
                  </div>
                </div>
                <div className="looking-for-title">
                  <h4>TOSS</h4>
                </div>
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

            <a
              href="https://www.youtube.com/@gamusagugamukh2751"
              className="youContainer"
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
