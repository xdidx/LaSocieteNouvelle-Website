import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";

import metaData from "../../lib/metaData.json";

const IndicatorsPanel = (props) => {
  const [selectedIndic, setSelectedIndic] = React.useState(props.indics[0]); // or "none"

  const indics = props.indics;
  const listOdds = props.indics
    .map((indic) => metaData[indic].odds)
    .reduce((a, b) => a.concat(b), [])
    .filter(
      (value, index, self) => index === self.findIndex((item) => item === value)
    )
    .sort();
  const icon = indics.includes("eco")
    ? "social-brf-1-blue.png"
    : "environnement-brf-1-blue.png";

  return (
    <div className="indicator-section">
      <Accordion flush defaultActiveKey={0}>
        {indics.map((indic, index) => (
          <Accordion.Item
            eventKey={index}
            key={index}
            onClick={() => setSelectedIndic(indic)}
          >
            <Accordion.Header> {metaData[indic].libelle}</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex mb-5 align-items-center">
                <div className="me-2">
                  <img
                    src={"/ESE/" + selectedIndic + ".png"}
                    alt=""
                  />
                </div>
                <div className="icons-odd ">
                  {listOdds.map((odd, index) => (
                    <img
                      key={index}
                      className={
                        "icon-odd" +
                        (selectedIndic != "none" &&
                        metaData[selectedIndic].odds.includes(odd)
                          ? ""
                          : " not-concerned")
                      }
                      id={"icon-odd-" + odd}
                      src={"/images/icon-odd-" + odd + ".png"}
                      width="50px"
                      alt="icon-odd"
                    />
                  ))}
                </div>
              </div>
              <IndicatorDetails indic={selectedIndic} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

const IndicatorDetails = ({ indic }) => {
  return (
    <div className="indicators-panel-details">
      <p>
        <b>Description : </b>
        {metaData[indic].description}
      </p>
      <p>
        <b>Finalité : </b>
        {metaData[indic].finalite}
      </p>
      <p>
        <b>Impact direct mesuré : </b>
        {metaData[indic].descriptionImpactDirect}
      </p>
      <a className="btn btn-primary" href={"/indicateur/" + indic}> En savoir plus</a>
    </div>
  );
};

export default IndicatorsPanel;
