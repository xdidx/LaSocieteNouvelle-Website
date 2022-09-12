import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import ErrorAlert from "../../components/Error";
import PaginatedLegalunit from "../../components/PaginatedLegalunit";
import PaginatedItems from "../../components/PaginatedLegalunit";

const portail = () => {
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [legalUnits, setLegalUnits] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {}, []);

  const inputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode == 13) {
      handleClick();
      return true;
    } else {
      return false;
    }
  };

  const handleClick = async () => {
    setLegalUnits([]);
    setError();
    setIsLoading(true);
    await searchLegalUnits(search);
  };

  const searchLegalUnits = async (search) => {
    if (!/[0-9]{9}/.test(search)) {
      // replace accents
      let string = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
      console.log(string);
      axios
        .get(`https://api.test.lasocietenouvelle.org/legalunit/${string}`)
        .then((response) => {
          if (response.data.header.code == 200) {
            setLegalUnits(response.data.legalUnits);
          } else {
            setError(response.data.header);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `https://api.test.lasocietenouvelle.org/legalunitFootprint/${search}`
        )
        .then((response) => {
          if (response.data.header.code == 200) {

            setLegalUnits(legalUnits => [...legalUnits, response.data.legalUnit]);
          } else {
            setError(response.data.header.code);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setIsLoading(false);
  };



  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Portail des empreintes sociétales des
          entreprises françaises{" "}
        </title>
      </Helmet>
      <section className="open-data-portal">
        <Container>
          <div className="text-center">
            <h1>
              Toute l'information sur <br /> <b>l'empreinte sociétale</b> des
              entreprises
            </h1>
            <p className="pt-2 fs-5 mb-5">
              Consultez librement les données publiées sur les impacts de la
              valeur produite par les entreprises françaises.
            </p>

            <Row className="mt-5">
              <Col md={{ span: 6, offset: 3 }}>
                <Row className="justify-content-md-center search-form">
                  <Col lg={8} className="p-0">
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Nom de l'entreprise ou numéro de Siren"
                      onChange={inputChange}
                      onKeyDown={handleKeyPress}
                    />
                  </Col>
                  <Col lg={4} className="p-0 bg-secondary">
                    <div className="d-grid gap-2">
                      <Button
                        variant="link"
                        type="submit"
                        onClick={handleClick}
                        disabled={!search}
                      >
                        Rechercher
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {isLoading && (
            <section className="results  bg-light">
              <Container>
                <div className="alert alert-info text-center">
                  <p>Recherche en cours </p>
                  <div className="dot-pulse m-auto"></div>
                </div>
              </Container>
            </section>
          )}
          {legalUnits.length > 0 && (
            <>

              {legalUnits.length > 1 ? (
                <p>
                  <b>{legalUnits.length}</b> entreprises correspondent à votre
                  recherche.
                </p>
              ) : (
                <p>
                  <b>{legalUnits.length}</b> entreprise correspond à votre
                  recherche.
                </p>
              )}
                                    <PaginatedLegalunit itemsPerPage={10} data={legalUnits} />


            </>
          )}
          {error && <ErrorAlert code={error.code} />}
        </Container>
      </section>
    </>
  );
};

export default portail;
