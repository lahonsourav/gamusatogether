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
              <div className="looking-for-item">
                <Link to="/products/deal">
                  <div className="looking-for-text-container">
                    <h4>Just launched, opening offer upto 40% off</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>OPENING OFFER</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/deals">
                  <div className="looking-for-text-container">
                    <h4>The summer collection for comfy wearing</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>SUMMER DEALS</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/tren">
                  <div className="looking-for-text-container">
                    <h4>Trending collection of Gamusa, get yourself fit</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>TRENDING</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/deals">
                  <div className="looking-for-text-container">
                    <h4>The sale is here with unbelivable prices</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>SALES</h5>
                </div>
              </div>
            </div>

            <Link to="/products" className="justContainer"></Link>
            <div className="container" id="container">
              {products &&
                products.map((products) => <ProductCard product={products} />)}
            </div>
            <Link className="show-all" to="/products">
              SHOW ALL
            </Link>

            <Link to="/products/marry" className="marryContainer">
              <div></div>
            </Link>

            <div className="looking-for">
              <div className="looking-for-item">
                <Link to="/products/boy">
                  <div className="looking-for-text-container">
                    <h4>Gamusa's beautiful collection for the Groom</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>DORA</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/girl">
                  <div className="looking-for-text-container">
                    <h4>Gamusa's beutiful collection for the Bride</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>KOINA</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/gam">
                  <div className="looking-for-text-container">
                    <h4>Our ultimate collection of Gamusa for every purpose</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>GAMUSA</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/mar">
                  <div className="looking-for-text-container">
                    <h4>Explore the Marriage Collection of Gamusa</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>EXPLORE</h5>
                </div>
              </div>
            </div>

            <div className="giftContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <div className="looking-for-item">
                <Link to="/products/boy">
                  <div className="looking-for-text-container">
                    <h4>
                      Gents Attire at affordable price and Ultimate quality
                    </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>FOR HIM</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/girl">
                  <div className="looking-for-text-container">
                    <h4>Gamusa's ultimate section to find gifts for her </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>FOR HER</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/bboy">
                  <div className="looking-for-text-container">
                    <h4>The Assamese swag Kid, find attire for your child </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>BABY HE</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/bgirl">
                  <div className="looking-for-text-container">
                    <h4>The Assamese swag Lady, find attire for your child </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>BABY SHE</h5>
                </div>
              </div>
            </div>

            <div className="ethContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <div className="looking-for-item">
                <Link to="/products/ahom">
                  <div className="looking-for-text-container">
                    <h4>
                      We all know the Legacy, get those Legacy Attire here{" "}
                    </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>AHOM</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/mis">
                  <div className="looking-for-text-container">
                    <h4>Gamusa's Collection of high quality Mising Attire </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>MISING</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/bod">
                  <div className="looking-for-text-container">
                    <h4>Explore and buy the featured Bodo Attire here </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>BODO</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/tribe">
                  <div className="looking-for-text-container">
                    <h4>Explore the indigineous Community Attire </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>EXPLORE</h5>
                </div>
              </div>
            </div>

            <div className="axomContainer">
              <div></div>
            </div>

            <div className="looking-for">
              <div className="looking-for-item">
                <Link to="/products/mug">
                  <div className="looking-for-text-container">
                    <h4>
                      Get the finest collection of Muga Clothing of Gamusa
                    </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>MUGA</h5>
                </div>
              </div>

              <div className="looking-for-item">
                <Link to="/products/paat">
                  <div className="looking-for-text-container">
                    <h4>
                      Get the finest collection of Paat clothing of Gamusa{" "}
                    </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>PAAT</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/eri">
                  <div className="looking-for-text-container">
                    <h4>The featured collection of Homemade Eri clothing</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>ERI</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/riha">
                  <div className="looking-for-text-container">
                    <h4>Look into the premium Riha collection of Gamusa </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>RIHA</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/mekh">
                  <div className="looking-for-text-container">
                    <h4>The premium Mekhela collection of Gamusa </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>MEKHELA</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/sad">
                  <div className="looking-for-text-container">
                    <h4>Look into the premium Sador collection of Gamusa </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>SADOR</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products/jura">
                  <div className="looking-for-text-container">
                    <h4>Look into the premium Jura collection of Gamusa </h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>JURA</h5>
                </div>
              </div>
              <div className="looking-for-item">
                <Link to="/products">
                  <div className="looking-for-text-container">
                    <h4>Explore the original Assamese Attire collection</h4>
                  </div>
                </Link>

                <div className="looking-for-item-title">
                  <h5>EXPLORE</h5>
                </div>
              </div>
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
