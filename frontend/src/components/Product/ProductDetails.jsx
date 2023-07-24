import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./productDetails.css";
import {
  clearErrors,
  newReview,
  getProductDetails,
} from "../../actions/productActions";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
import Metadata from "../layout/Metadata";
import { addItemsToCart } from "../../actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { product, loading, error } = useSelector(
    (state) => state.productdetails
  );

  const { user } = useSelector((state) => state.user);

  const increaseQuantity = () => {
    if (product && product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(addItemsToCart(params.id, quantity));
      alert.success("Item Added To Cart");
    }
  };

  const buyHandler = () => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(addItemsToCart(params.id, quantity));
      navigate("/cart");
    }
  };

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product ? product.ratings : "no ratings",
    isHalf: true,
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", params.id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (url) => {
    setEnlargedImage(url);
  };

  const handleCloseModal = () => {
    setEnlargedImage(null);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata
            title={`${product && product.category}-${product && product.name}`}
          />

          <div className="productDetails">
            <div className="carousal-container">
              <Carousel className="carousal">
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div className="swipe_more_one">
              <small>swipe for more images</small>
            </div>

            <div className="detail-block">
              <div className="detailsBlock-1">
                <h1>{product && product.name}</h1>
                <p>{product && product.description}</p>
                <div className="price-container">
                  <h2>{product && product.price}/-</h2>
                  <small>inclusive of all taxes</small>
                </div>
              </div>

              <div className="detailsBlock3">
                <div className="detailsBlock3-1-1">
                  <button onClick={decreaseQuantity}>-</button>
                  <input readOnly type="number" value={quantity} />
                  <button onClick={increaseQuantity}>+</button>
                </div>

                <p>
                  <b
                    className={
                      product && product.Stock < 1 ? "redColor" : "greenColor"
                    }
                  >
                    {product && product.Stock < 1 ? "OutOfStock" : "a few left"}
                  </b>
                </p>
              </div>
              <div className="product-buttons">
                <button
                  className="product-btn"
                  disabled={product && product.Stock < 1 ? true : false}
                  onClick={addToCartHandler}
                >
                  add to cart
                </button>

                <button className="product-btn" onClick={buyHandler}>
                  buy
                </button>
              </div>

              <Dialog
                aria-labelledby="simple-dialog-title"
                open={open}
                onClose={submitReviewToggle}
              >
                <DialogTitle>Submit Review</DialogTitle>
                <DialogContent className="submitDialog">
                  <Rating
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    size="large"
                  />

                  <textarea
                    className="submitDialogTextArea"
                    cols="30"
                    rows="5"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </DialogContent>
                <DialogActions>
                  <Button onClick={submitReviewToggle} color="secondary">
                    Cancel
                  </Button>
                  <Button onClick={reviewSubmitHandler} color="primary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>

          <div className="imageContainer">
            <div className="productImages">
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                    onClick={() => handleImageClick(item.url)}
                  />
                ))}
            </div>
            {enlargedImage && (
              <div className="imageModal" onClick={handleCloseModal}>
                <img
                  className="enlargedImg"
                  src={enlargedImage}
                  alt="Enlarged Slide"
                />
              </div>
            )}
          </div>

          <div className="swipe_more">
            <small>swipe and click to view</small>
          </div>

          <div className="review_container">
            <button onClick={submitReviewToggle} className="product-btn">
              Submit Review
            </button>
            <h3>Reviews</h3>
            <div className="detailsBlock-2">
              <ReactStars {...options} />
              <span>({product && product.numOfReviews})</span>
            </div>
            {product && product.reviews && product.reviews.length > 0 ? (
              <div className="reviews">
                {product.reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews Yet</p>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
