import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedProduct,
} from "./redux/actions/productActions";
import { Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { addCart } from "./redux/actions/productActions";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const product = useSelector((state) => state.product);
  const { id, image, title, price, category, description, rating } = product;
  const { productId } = useParams();

  console.log(product);

  useEffect(() => {
    if (productId && productId != "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct);
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div> Loading... </div>
      ) : (
        <Container key={id}>
          <Row>
            <Col>
              <Card style={{ width: "20rem" }}>
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
                  <Card.Title>{title} </Card.Title>
                  <Card.Text>
                    <AiFillStar /> {rating.rate}
                    <br></br>
                    <br></br>${price}
                    <br></br>
                    {category}
                    <br></br>
                    {description}
                  </Card.Text>
                  <div>
                    <Container>
                      <Row>
                        <Col></Col>
                        <Col>
                          {/* here i have put the link to cart first */}
                          <Link to="/cart">
                            <Button onClick={() => addProduct(product)}>
                              Buy Now
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </Container>
                  </div>

                  {/* <Button  variant='danger' className='Product-Button' >
    Read More...
    </Button> */}

                  {/* <Link to={`/product/${id}`} className="Click-here"> More Details </Link> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductDetail;
