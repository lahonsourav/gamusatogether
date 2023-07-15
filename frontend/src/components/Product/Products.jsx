import React, { Fragment, useEffect, useState } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productActions";
import Loader from "../layout/loader/Loader";
import ProductCard from "../home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { useAlert } from "react-alert";

import { Slider } from "@material-ui/core";
import Metadata from "../layout/Metadata";

const categories = [
  "Track",
  "Shirt",
  "TShirt",
  "Jeans",
  "Shoes",
  "Others",
  "All",
];

const Products = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { keyword } = useParams();

  const [category, setCategory] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 10000]);
  // const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    // filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
    // e.preventDefault();
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = productsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category));
  }, [dispatch, keyword, currentPage, price, category, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Categories" />

          <div className="product-page-container">
            <div className="filterBoxProduct">
              <ul className="categoryBoxProduct">
                {categories.map((category) => (
                  <li
                    className="category-link-product"
                    key={category}
                    onClick={() => {
                      category === "All"
                        ? setCategory("")
                        : setCategory(category);
                    }}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="price-slider">
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                min={0}
                max={10000}
              />
            </div>

            <div className="products">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>

            {resultPerPage < count && (
              <div className="pagination-box">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
