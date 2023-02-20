import React from "react";
import { Link } from "react-router-dom";
import { addCart } from "./redux/actions/productActions";
import { Card, Button } from "react-bootstrap";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

// import AddToCart from './AddToCart';
// import addToCart from './AddToCart';
import "./Products.css";
import Navbar from "./Navbar";
const ProductComponent = (props) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  let data = "";
  data = props.filter;
  console.log({ data });
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products
    .filter((value) => {
      if (data === "") {
        return value;
      } else if (value.category.toLowerCase() === data.toLowerCase()) {
        return value;
      }
    })
    .map((product) => {
      const { id, title, image, price, category, rating } = product;

      return (
        <div>
          {/* key id */}
          <div key={id}>
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Link to={`/product/${id}`} className="link-id">
                    <Card.Img
                      className="image-style"
                      variant="top"
                      src={image}
                      alt={title}
                      style={{ marginTop: 25, marginBottom: 25 }}
                    />
                  </Link>
                  <Card.Body
                    style={{
                      color: "#000000",
                      backgroundColor: "#f43397",
                      textDecoration: "none",
                    }}
                  >
                    <Card.Title>{title.substring(0, 20)}</Card.Title>
                    <Card.Text>
                      <AiFillStar /> {rating.rate}
                      <br></br>₹{price}
                      <br></br>
                      {category}
                    </Card.Text>

                    {/* <Link to={`/product/${id}`} className="Click-here"> More Details </Link> */}
                    {/* <Link to ={`/product/${id}`} >
<Button className='col-md-12' onClick={()=>addProduct(product)}>More Details</Button>
</Link> */}
                    <div>
                      <div>
                        <Row>
                          {/* <Col > 
<Button className='col-md-12' onClick={()=>addProduct(product)}   >Add to Cart</Button>


</Col>  */}

                          <Col style={{ display: "flex" }}>
                            {/* here i have put the link to cart first */}
                            <Link to={"cart/"}>
                              <Button
                                style={{ width: 110 }}
                                onClick={() => addProduct(product)}
                              >
                                Buy Now
                              </Button>
                            </Link>

                            <Button
                              style={{ width: 110, marginLeft: 8 }}
                              onClick={() => addProduct(product)}
                            >
                              Cart
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      );
    });
  return <>{loading === false ? <>{renderList}</> : <h2>Loading...</h2>}</>;
};

export default ProductComponent;
