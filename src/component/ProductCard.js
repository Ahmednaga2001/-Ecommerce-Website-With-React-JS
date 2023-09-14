import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaEye } from "react-icons/fa";
import { addToCart } from "../rtk/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

function ProductCard() {

  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
    <Zoom>
    <section className="products py-3">
        <Container>
          <Row>
            {products.map((product) => (
              <div className="col-md-6 mb-1 col-lg-3" key={product.id}>
                <div>
                  <Card style={{ height: "300px" }}>
                    <div className="overlay">
                      <Button className="mb-1" variant="danger" onClick={()=>dispatch(addToCart(product))}>
                        <FaPlus />
                      </Button>
                      <br />
                      <Button onClick={()=>navigate(`/product/${product.id}`)}>
                        <FaEye />
                      </Button>
                    </div>
                    <Card.Img
                      variant="top"
                      style={{ width: "100px", height: "150px" }}
                      className="mx-auto p-2"
                      src={product.image}
                    />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text className="font-semibold">
                        ${product.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </Zoom>

    </>
  );
}

export default ProductCard;