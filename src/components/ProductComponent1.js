import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addCart } from "./redux/actions/productActions";
import { Card, Button } from "react-bootstrap";
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
import Navbar from "./Navbar";
const ProductComponent1 = (props) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  let data = "";
  data = props.search;
  console.log({ data });
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products
    .filter((value) => {
      if (data === "") {
        return value;
      } else if (value.title.toLowerCase().includes(data.toLowerCase())) {
        return value;
      }
    })
    .map((product) => {
      const {
        id,
        title,
        image,
        price,
        category,
        rating,
        description,
      } = product;

      return (
        <div>
          <Link to={`/product/${id}`} className="link-id">
            {/* key id */}
            <div key={id}>
              <Row>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      className="image-style"
                      variant="top"
                      src={image}
                      alt={title}
                      style={{ marginTop: 25, marginBottom: 25 }}
                    />
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
                        <br></br>
                        {description.substring(0, 20)}
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

                            <Col className="buy-id">
                              {/* here i have put the link to cart first */}
                              <Link to={`/product/${id}`}>
                                <Button onClick={() => addProduct(product)}>
                                  Buy Now
                                </Button>
                              </Link>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Link>
        </div>
      );
    });

  return <>{loading === false ? <>{renderList}</> : <h2>Loading....</h2>}</>;
};

export default ProductComponent1;
