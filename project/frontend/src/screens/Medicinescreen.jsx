import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MedicineData from "../products";
import Message from "../components/Message";
import Medicine from "../components/medicinepage/Medicine";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const Homescreen = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [medicine, setmedicine] = useState([]);
  useEffect(() => {

    setloading(true);
    axios
      .get("http://localhost:5000/api/medicine")
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
  }, [MedicineData]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message />
      ) : (
        <>
          <Row>
            {medicine.map((medicine) => {
              return (
                <Col md={3} lg={3}>
                  <Medicine key={medicine._id} medicine={medicine} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
};

export default Homescreen;
