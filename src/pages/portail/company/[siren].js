import React, { useEffect, useState } from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

import { Helmet } from "react-helmet";
import { useRouter } from "next/router";

import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

import { Bar } from "react-chartjs-2";

import axios from "axios";
import ErrorAlert from "../../../components/Error";

const CompanyData = () => {
  const router = useRouter();

  const [siren, setSiren] = useState(router.query.siren);
  const [error, setError] = useState();

  const [dataFetched, isDataFetched] = useState(false);
  const [legalUnit, setLegalUnit] = useState();
  const [footprint, setFootprint] = useState();
  const [divisionFootprint, setDivisionFootpint] = useState();
  const [meta, setMeta] = useState();

  useEffect(async () => {
    setSiren(router.query.siren);

    if (siren) {
      await getLegalUnitFootprint(siren);
    }
  }, [router, siren]);

  useEffect(async () => {
    if (legalUnit) {
      const code = legalUnit.activitePrincipaleCode.slice(0, 2);
      await getDivisionFootprint(code);
    }
  }, [legalUnit]);

  async function getLegalUnitFootprint(siren) {
    axios
      .get(`http://localhost:8080/legalunitFootprint/${siren}`)
      .then((response) => {
        if (response.data.header.code == 200) {
          setLegalUnit(response.data.legalUnit);
          setFootprint(response.data.footprint);
          setMeta(response.data.metaData);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        setError({ code: 500 });
        return error;
      });
  }
  async function getDivisionFootprint(code) {
    axios
      .get(
        `http://localhost:8080/defaultfootprint/?code=${code}&aggregate=PRD&area=FRA`
      )
      .then((response) => {
        isDataFetched(true);
        if (response.data.header.code == 200) {
          setDivisionFootpint(response.data.footprint);
        } else {
          setError(response.data.header);
        }
      })
      .catch((error) => {
        setError({ code: 500 });
        return error;
      });
  }

  return (
    <>
      <Helmet>
        <title>
          {` Portail La Société Nouvelle | Empreinte sociétale de l'entreprise #` +
            siren}
        </title>
      </Helmet>
      <section className="open-data-portal bg-light">
        <Container>
          {!error && !dataFetched && (
            <div className="bg-white p-5 rounded-3">
              <h2 className="text-center">
                Empreinte Sociétale de l'entreprise <b>#{siren}</b>
              </h2>
              <div className="text-center">
                <p>Chargement des données... </p>
                <div className="dot-pulse m-auto"></div>
              </div>
            </div>
          )}
          {error && <ErrorAlert code={error.code} />}
          {dataFetched && footprint && divisionFootprint && meta && (
            <>
              <div className="legalUnit bg-white mb-4 p-5 rounded-3 ">
                <Row>
                  <Col lg={4}>
                    <h2 className="h1">{legalUnit.denomination}</h2>
                  </Col>
                  <Col>
                    <h3 className="fw-bold">Informations sur l'entreprise</h3>
                    <p>SIREN : {legalUnit.siren}</p>
                    <p>
                      Activité principale :{legalUnit.activitePrincipaleLibelle}{" "}
                      ({legalUnit.activitePrincipaleCode})
                    </p>
                    <p>
                      Siège :
                      {legalUnit.codePostalSiege + " " + legalUnit.communeSiege}
                    </p>
                    {legalUnit.societeMission && <p>Société à mission : Oui</p>}
                  </Col>
                </Row>
              </div>
              <div className="footprint">
                <ContentSocialFootprint
                  footprint={footprint}
                  meta={meta}
                  divisionFootprint={divisionFootprint}
                />
              </div>
              <Row>
                <Col>
                  <div className="bg-white p-5 rounded-3 mt-3">
                    <Image src="/images/Analyze-rafiki.svg" alt="Illustration calcul données par défaut" height={200} className="mx-auto d-block"/>
                    <h4 className="my-3 text-center">
                      A quoi correspond les valeurs par défaut ? 
                    </h4>
                    <p className="my-4">
                      Les données par défaut correspondent aux données utilisées
                      lorsque l'empreinte sociétale d'une entreprise n'est pas
                      publiée. Elles visent à fournir une estimation des impacts
                      indirects de l'entreprise en s'appuyant sur les
                      caractéristiques connues des fournisseurs.
                    </p>
                    <div className="text-center">
                      <Button  src="https://docs.lasocietenouvelle.org/donnees" target="_blank" title="Accéder à la documentation complète">Voir la documentation</Button>
                    </div>
                  </div>
                </Col>
                <Col>
                <div className="bg-white p-5 rounded-3 mt-3">
                    <Image src="/images/Devices-rafiki.svg" alt="Illustration publication de données" height={200} className="mx-auto d-block"/>
                    <h4 className="my-3 text-center">
                      Comment publier mon empreinte sociétale ? 
                    </h4>
                    <p className="my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et felis quis nibh pharetra viverra a eu ante. 
                    Vestibulum vel nibh dignissim, lobortis lectus non, tristique orci.
                    Ut elit massa, posuere ac varius in, porttitor eu tellus. Aliquam euismod rhoncus accumsan. 
                    </p>
                    <div className="text-center">
                      <Button variant="secondary"  src="https://docs.lasocietenouvelle.org/donnees" target="_blank" title="Accéder à la documentation complète">Publier mon empreinte</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </>
          )}
          <p className="text-end mt-3">
            <Button
              title="Retour au portail"
              href="/portail"
              variant="secondary"
              size="sm"
            >
              « Retour
            </Button>
          </p>
        </Container>
      </section>
    </>
  );
};

/* Body of the page : Viewing the "EmpreinteSocietale" aka "ESE" */
function ContentSocialFootprint({ footprint, meta, divisionFootprint }) {
  //  INDICATORS CATEGORIES
  const valueCreation = ["ECO", "ART", "SOC"];
  const socialFootprint = ["IDR", "GEQ", "KNW"];
  const environmentalFootprint = ["GHG", "NRG", "WAT", "MAT", "WAS", "HAZ"];

  const valueCreationList = Object.fromEntries(
    Object.entries(footprint).filter(([key]) => valueCreation.includes(key))
  );

  const socialFootprintList = Object.fromEntries(
    Object.entries(footprint).filter(([key]) => socialFootprint.includes(key))
  );
  const environmentalFootprintList = Object.fromEntries(
    Object.entries(footprint).filter(([key]) =>
      environmentalFootprint.includes(key)
    )
  );

  const valueCreationComponents = Object.entries(valueCreationList).map(
    ([key, data]) => (
      <IndicatorDetails
        key={key}
        code={key}
        unitSymbol={meta[key].unitSymbol}
        indicatorLabel={meta[key].indicatorLabel}
        divisionFootprint={divisionFootprint}
        {...data}
      />
    )
  );

  const socialFootprintComponents = Object.entries(socialFootprintList).map(
    ([key, data]) => (
      <IndicatorDetails
        key={key}
        code={key}
        unitSymbol={meta[key].unitSymbol}
        indicatorLabel={meta[key].indicatorLabel}
        divisionFootprint={divisionFootprint}
        {...data}
      />
    )
  );
  const environmentalFootprintComponents = Object.entries(
    environmentalFootprintList
  ).map(([key, data]) => (
    <IndicatorDetails
      key={key}
      code={key}
      unitSymbol={meta[key].unitSymbol}
      indicatorLabel={meta[key].indicatorLabel}
      divisionFootprint={divisionFootprint}
      {...data}
    />
  ));

  return (
    <Row className="indic-details">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header as={"h3"}>Création de la valeur</Accordion.Header>
          <Accordion.Body>
            <Row>{valueCreationComponents}</Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Empreinte sociale</Accordion.Header>
          <Accordion.Body>  <Row> {socialFootprintComponents}</Row></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Empreinte environnementale</Accordion.Header>
          <Accordion.Body>
            <Row>{environmentalFootprintComponents}</Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Row>
  );
}

/* Basic indicator view */
function IndicatorDetails({
  code,
  flag,
  info,
  indicatorLabel,
  source,
  uncertainty,
  year,
  value,
  unitSymbol,
  divisionFootprint,
}) {
  const displayedValue = Math.round(10 * value) / 10;
  const divisionValue = Math.round(10 * divisionFootprint[code].value) / 10;


  return (
    <Col key={code} className="my-4" lg={4}>
      <div className="p-3 border border-3 rounded-3">


        <div className="indic-title">
          <div className="indic-icon">
            <Image
              height="20px"
              src={"/ESE/icon-ese-bleues/" + code.toLowerCase() + ".svg"}
              alt={code}
            />
          </div>
          <h3 className="h6">{indicatorLabel} </h3>
        </div>
        <p className="source text-end">
          <a href={"/indicateurs/" + code.toLowerCase() } title="Plus d'informations sur l'indicateur" >Détails &raquo;</a>
        </p>
        <ColumnChart
          performance={displayedValue}
          comparative={divisionValue}
          unit={unitSymbol}
          flag={flag}
        />
              <div className="mb-3">
            {flag == "p" ? (
              <Badge  pill bg="secondary" title="Valeur publiée par l'entreprise">
                Valeur Publiée{" "}
              </Badge>
            ) : (
              <Badge pill bg="primary" title="Valeur proposée à partir de données statistiques">
                Valeur par défaut*{" "}
              </Badge>
            )}
                <Badge pill bg="light" className="ms-2 text-body" title="Intervalle de confiance ">
                {Math.round(uncertainty)} % d'incertitude
              </Badge>
        </div>
 
        <div className="mt-2 text-end">
          <p className="source mb-0">
          {year && year != "NA" && (
              <>Données publiées en {year}  | </>
            )}
           Source : 
          {source ? (
            <> {source}</>
          ) : (
            <> La Société Nouvelle</>
          )}
          </p>
    
        </div>
      </div>
    </Col>
  );
}

function ColumnChart({ performance, unit, flag, comparative }) {
  let bgColor;

  if (flag == "p") {
    bgColor = "RGBA(250, 89, 95,1)";
  } else {
    bgColor = "RGBA(25, 21, 88,1)";
  }

  const data = {
    labels: ["Unité Légale", "Branche"],
    datasets: [
      {
        label: "Empreinte",
        barPercentage: 0.4,
        categoryPercentage: 0.4,
        data: [performance, comparative],
        backgroundColor: [bgColor, "RGBA(255, 182, 66,1)"],
      },
    ],
  };

  let suggestedMax;

  if (unit == "%") {
    switch (true) {
      case performance < 10:
        suggestedMax = 10;
        break;
      case performance > 10 && performance < 25:
        suggestedMax = 25;
        break;
      case performance > 25 && performance < 50:
        suggestedMax = 50;
        break;
      default:
        suggestedMax = 100;
        break;
    }
  } else {
    suggestedMax = null;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    devicePixelRatio: 2,
    layout: {
      padding: {
        top: 30,
        bottom: 10,
        left: 0,
        right: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: function (value, context) {
          return value + " " + unit;
        },
        color: "#191558",
        font: {
          size: 12,
          family: "Roboto",
          weight: "bold",
        },
      },
      tooltip: {
        enabled: false, //
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: suggestedMax,

        ticks: {
          color: "#191558",
          font: {
            size: 10,
            family: "Roboto",
          },
        },
        grid: {
          color: "#ececff",
        },
      },
      x: {
        display: true,
        ticks: {
          color: "#191558",
          font: {
            size: 12,
            family: "Roboto",
          },
        },
        grid: {
          color: "#ececff",
        },
      },
    },
  };

  return (
    <div className="mt-3 mb-3">
      <Bar data={data} options={options} />
    </div>
  );
}

export default CompanyData;
