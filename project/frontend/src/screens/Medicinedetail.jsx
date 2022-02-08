import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Rating from "../components/Rating";
import MedicineData from "../products";
import { Row, Col, Button, Image } from "react-bootstrap";
import Message from "../components/Message";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import medicine from "../components/medicinepage/Medicine";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const Medicinedetail = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [medicine, setmedicine] = useState([]);
  const backHandler = () => {
    navigator(-1);
  };
  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:5000/api/medicine/${id}`)
      .then((res) => {
        seterror(null);
        setmedicine(res.data);
      })
      .catch((err) => {
        seterror(err.Message);
      })
      .finally(() => {
        setloading(false);
      });
  }, [id]);

  return (
    <>
      <Row className="mt-5">
        <Col md={12} lg={12}>
          <Button onClick={backHandler}>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Col>
      </Row>

      {loading ? (
        <Loading />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {medicine && (
            <>
              <Col md={5}>
                <Image
                  src={medicine.image}
                  alt={medicine.name}
                  className="medicine-image"
                />
              </Col>
              <Col md={8}></Col>
            </>
          )}
        </Row>
      )}
    </>
  );
};

export default Medicinedetail;
