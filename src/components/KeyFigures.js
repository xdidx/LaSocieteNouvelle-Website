import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

export const KeyFigures = () => {
  const [pinKeyFigure, setPinKeyFigure] = useState("");
  const [ghgKeyFigure, setGhgKeyFigure] = useState("");
  const [geqKeyFigure, setGeqKeyFigure] = useState("");

  useEffect(() => {
    fetchKeyFiguresData();
  }, []);

  const fetchKeyFiguresData = async () => {
    const urls = [
      `${process.env.NEXT_PUBLIC_API_URL}/serie/MACRO_FINANCIALDATA___FRA_CPMEUR/?area=FRA&aggregate=PIN`,
      `${process.env.NEXT_PUBLIC_API_URL}/serie/MACRO_HISTORICALDATA_DISCOUNTED_GHG_FRA_BRANCH?area=FRA&code=TOTAL&aggregate=NVA`,
      `${process.env.NEXT_PUBLIC_API_URL}/serie/MACRO_HISTORICALDATA_DISCOUNTED_GEQ_FRA_BRANCH?area=FRA&code=TOTAL&aggregate=NVA`,
    ];

    const requests = urls.map((url) => axios.get(url));

    try {
      const responses = await axios.all(requests);
      const pinKeyFigure =
        responses[0].data.header.code === 200
          ? (responses[0].data.data[0].value / 1000).toFixed(2)
          : "";
      const ghgKeyFigure =
        responses[1].data.header.code === 200
          ? responses[1].data.data[0].value.toFixed(0)
          : "";
      const geqKeyFigure =
        responses[2].data.header.code === 200
          ? responses[2].data.data[0].value.toFixed(1)
          : "";

      setPinKeyFigure(pinKeyFigure);
      setGhgKeyFigure(ghgKeyFigure);
      setGeqKeyFigure(geqKeyFigure);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-light">
      <Container>
        <h2 className="text-center mb-5">Chiffres-clés</h2>
        <Row className="d-flex justify-content-between">
          <Col className="statistic-item" xs={12} lg={4}>
            <Image
              src="ESE/icon-ese-bleues/eco.svg"
              height="60"
              className="mx-auto d-block my-2"
              alt="Pictogramme de la France"
            />

            <p className="text-center">
              <span className="h1">
                <data value={pinKeyFigure}>{pinKeyFigure} </data>
              </span>
              <sup> Mds €</sup>
            </p>
            <p className="text-center">Production intérieure nette</p>
          </Col>
          <Col className="statistic-item" xs={12} lg={4}>
            <Image
              src="ESE/icon-ese-bleues/ghg.svg"
              height="60"
              className="mx-auto d-block my-2"
              alt="Pictogramme pour le CO²"
            />
            <p className="text-center">
              <span className="h1">
                <data value={ghgKeyFigure}>{ghgKeyFigure} </data>
              </span>
              <sup>gCO₂e/€</sup>
            </p>
            <p className="text-center">
              Intensité d'émission de gaz à effet de serre
            </p>
          </Col>
          <Col className="statistic-item" xs={12} lg={4}>
            <Image
              src="ESE/icon-ese-bleues/idr.svg"
              height="60"
              className="mx-auto d-block my-2"
              alt="Pictogramme d'une balance"
            />
            <p className="text-center">
              <span className="h1">
                <data value={geqKeyFigure}>{geqKeyFigure}</data>
              </span>{" "}
              <sup>%</sup>
            </p>
            <p className="text-center">Ecart de rémunération F/H</p>
          </Col>
          <p className="source text-end mt-3">
            Données estimées par La Société Nouvelle pour l'année 2021 | Sources
            : Insee, Eurostat et Banque mondiale
          </p>
        </Row>
      </Container>
    </section>
  );
};
