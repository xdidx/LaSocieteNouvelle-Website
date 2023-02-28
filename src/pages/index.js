// Components

// Modules
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Graph from "../components/charts/Graph";
import LatestPosts from "../components/posts/LatestPosts";
import axios from "axios";
import { MetrizButton } from "../components/buttons/MetrizButton";

const Home = () => {
  const [pinKeyfigure, setPinKeyFigure] = useState();
  const [geqKeyFigure, setGeqKeyFigure] = useState();
  const [ghgKeyFigure, setGhgKeyFigure] = useState();

  useEffect(() => {
    fetchKeyFiguresData();
  }, []);

  const fetchKeyFiguresData = async () => {
    const getPinKeyFigure = axios.get(
      `https://api.test.lasocietenouvelle.org/serie/MACRO_FINANCIALDATA___FRA_CPMEUR/?area=FRA&aggregate=PIN`
    );

    const getGhgKeyFigure = axios.get(
      `https://api.test.lasocietenouvelle.org/serie/MACRO_HISTORICALDATA_DISCOUNTED_GHG_FRA_BRANCH?area=FRA&code=TOTAL&aggregate=NVA`
    );

    const getGeqKeyFigure = axios.get(
      `https://api.test.lasocietenouvelle.org/serie/MACRO_HISTORICALDATA_DISCOUNTED_GEQ_FRA_BRANCH?area=FRA&code=TOTAL&aggregate=NVA`
    );

    await axios
      .all([getPinKeyFigure, getGhgKeyFigure, getGeqKeyFigure])
      .then(
        axios.spread((...responses) => {
          const pinKeyfigure = responses[0];
          const ghgKeyFigure = responses[1];
          const geqKeyFigure = responses[2];

          if (pinKeyfigure.data.header.code == 200) {
            const value = pinKeyfigure.data.data[0].value.toFixed(0);
            const convertedValue = (value / 1000).toFixed(2);
            setPinKeyFigure(convertedValue);
          }

          if (ghgKeyFigure.data.header.code == 200) {
            const value = ghgKeyFigure.data.data[0].value.toFixed(0);

            setGhgKeyFigure(value);
          }

          if (geqKeyFigure.data.header.code == 200) {
            const value = geqKeyFigure.data.data[0].value.toFixed(1);
            setGeqKeyFigure(value);
          }
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>
          La Société Nouvelle | Système d'Information national sur les impacts
          des entreprises
        </title>

        <meta
          property="og:title"
          content="Portail des empreintes sociétales des
          entreprises françaises"
        />
        <meta property="og:url" content="https://lasocietenouvelle.org/" />

        <meta property="og:image" content="/website-screen.jpg" />
      </Helmet>

      {/* // statistic */}

      <section>
        <Container>
          <Row>
            <Col>
              <h2>Comptabilité Extra-Financière</h2>
              <p>
                Nous proposons un outil de mesure de comptabilité
                extra-financière axés sur la durabilité et le développement
                durable, en prenant en compte les impacts sociaux et
                environnementaux de chaque décision dans le processus de
                production d’une entreprise.
              </p>
              <p>
                Cette initiative est open data et open source afin de déployer
                au maximum l’information à ce sujet.
              </p>
              <p>
                Notre objectif est de permettre aux entreprises de mesurer, sur
                des dimensions clefs, les impacts de la valeur qu’elles
                produisent.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <Row className="d-flex justify-content-between">
            <Col className="statistic-item" xs={12} lg={4}>
              <Image
                src="ESE/icon-ese-bleues/eco.svg"
                height="60"
                className="mx-auto d-block my-2"
                alt="eco"
              />
              <p className="text-center">
                <span className="h1">{pinKeyfigure}</span> <sup> Mds €</sup>
              </p>
              <p className="text-center">Production intérieure nette</p>
            </Col>
            <Col className="statistic-item" xs={12} lg={4}>
              <Image
                src="ESE/icon-ese-bleues/ghg.svg"
                height="60"
                className="mx-auto d-block my-2"
                alt="co²"
              />
              <p className="text-center">
                <span className="h1">{ghgKeyFigure}</span> <sup>gCO₂e/€</sup>
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
                alt="Egalité"
              />
              <p className="text-center">
                <span className="h1">{geqKeyFigure}</span> <sup>%</sup>
              </p>
              <p className="text-center">Ecart de rémunération F/H</p>
            </Col>
            <p className="source text-end mt-3">
              Données estimées par La Société Nouvelle pour l'année 2021 |
              Sources : Insee, Eurostat et Banque mondiale
            </p>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg={9}>
              <h2>Mesurez l’impact de la production de votre entreprise</h2>
              <p>
                Grâce à
                <a href="https://metriz.lasocietenouvelle.org" target="_blank">
                  l’application Web Metriz
                </a>
                , vous pouvez rendre compte des impacts sociaux -
                environnementaux d’un euro de production vendu.
              </p>

              <h3 className="h4">Pourquoi mesurer son empreinte?</h3>
              <ol>
                <li>
                  Se positionner par rapport à sa branche et aux objectifs
                  socio-environnementaux
                </li>
                <li>Comprendre l’origine de ses impacts</li>
                <li>S’engager dans la transition écologique et sociale</li>
              </ol>
              <div className="mt-4">
                <MetrizButton />
                <Button variant="outline-primary" className="mx-2">
                  En savoir plus
                </Button>
              </div>
            </Col>
            <Col lg={3}>
              <Image
                src="/illustrations/diminuer-impact.png"
                alt="Illustration Mesure de l'impact"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg={4}>
              <Image
                src="/illustrations/default-data-illu.png"
                alt="Illustration Base de données ouverte"
              />
            </Col>
            <Col>
              <h2>
                Consultez la base de données ouverte sur les impacts de la
                production des entreprises
              </h2>
              <p>
                Vous pouvez connaître gratuitement l’empreinte sociétale des
                entreprises. Ces données peuvent être des valeurs par défaut ou
                provenir directement de la publication des entreprises.
              </p>
              <h3 className="h4">Pourquoi publier son empreinte?</h3>
              <ol>
                <li>Valoriser votre performance et informer vos clients</li>
                <li>Contribue à une économie pus transparente</li>
                <li>
                  Permettre aux acteurs de votre marché de vous identifier comme
                  acteur de la transition écologique et sociale
                </li>
              </ol>
              <div className="mt-4">
                <Button variant="secondary">
                  Consulter les données
                </Button>
                <Button className="mx-2">
                  Publier les données
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="text-center bg-light-secondary">
        <Container>
          <h2>Suivis macro-économiques</h2>
          <p>
            Indicateurs clefs relatifs à l'empreinte sociale et environnementale
            de l'économie française
          </p>
          <Row>
            <Col lg={4} xs={12} className="mb-2">
              <Graph indic={"GHG"} />
            </Col>
            <Col lg={4} xs={12} className="mb-2">
              <Graph indic={"WAT"} />
            </Col>
            <Col lg={4} xs={12} className="mb-2">
              <Graph indic={"NRG"} />
            </Col>
          </Row>
        </Container>
      </section>
    <section>
      <Container>
        <h4 className="h3">Nos actualités</h4>
      </Container>
    </section>
    <section>
      <Container>
        <h4 className="h3">FAQ</h4>
      </Container>
    </section>
      {/* Partenaires */}
      <section className="partenaires ">
        <Container>
          <h3 className="text-center">Avec le soutien de</h3>
          <Row className="align-items-center">
            <Col className="text-center" xs={4} lg={2}>
              <a href="https://www.euratechnologies.com/" target="_blank">
                <Image
                  fluid
                  src="/partners/euratech.svg"
                  alt="Euratech"
                ></Image>
              </a>
            </Col>
            <Col className="text-center" xs={4} lg={2}>
              <a
                href="https://www.bpifrance.fr/communaute-du-coq-vert"
                target="_blank"
              >
                <Image
                  fluid
                  src="/partners/Coq_Vert_RVB.png"
                  alt="Coq Vert"
                ></Image>
              </a>
            </Col>
            <Col className="text-center" xs={4} lg={2}>
              <a href="https://www.impactfrance.eco/" target="_blank">
                <Image
                  fluid
                  src="/partners/Logo_du_Mouvement_Impact_France.png"
                  alt="Impact France"
                ></Image>
              </a>
            </Col>
            <Col className="text-center" xs={4} lg={2}>
              <a href="https://www.bpifrance.fr/" target="_blank">
                <Image
                  fluid
                  src="/partners/bpifrance.svg"
                  alt="BPI France"
                  style={{ height: "50px" }}
                ></Image>
              </a>
            </Col>
            <Col className="text-center">
              <a href="https://www.hautsdefrance.fr/" target="_blank">
                <Image
                  fluid
                  src="/partners/HDF-financementLogo-r.png"
                  alt="Financement Hauts-De-France"
                ></Image>
              </a>
            </Col>
            <Col xs={4} lg={2}>
              <Row>
                <Col className="text-center" lg={5} xs={4}>
                  <a href="https://www.economie.gouv.fr/" target="_blank">
                    <Image
                      fluid
                      src="/partners/Logotype-rouge-bleu.png"
                      alt="France 2030"
                    ></Image>
                  </a>
                </Col>
                <Col className="text-center" lg={7} xs={8}>
                  <a href="https://www.economie.gouv.fr/" target="_blank">
                    <Image
                      fluid
                      src="/partners/ministere_de_l_economie.svg"
                      alt="Ministère de l'économie "
                    ></Image>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
