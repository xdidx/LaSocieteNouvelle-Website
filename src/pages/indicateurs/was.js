import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const was = () => {
  return (
    <>
      <Helmet>
        <title>La société Nouvelle | Intensité de Production de Déchets</title>
      </Helmet>
      <PageHeader
        title="Intensité de Production de Déchets"
        prev={"indicateur"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/was"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/was.svg" height="80" className="mb-3" />
              <p>
              Quantité d’eau consommée par unité de valeur produite, exprimée en L/€ (litres par euro)
              </p>
              <p>
                L’indicateur informe sur la quantité de déchets produite, avec
                pour objectif de la réduire.
              </p>
              <p>
                Il n’informe cependant pas sur le traitement des déchets
                (recyclages, destruction, etc.) et leur dangerosité. Des
                indicateurs spécifiques pourront être mis en place pour ces
                catégories.
              </p>
              <p>
                <b>Code : </b> WAS
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-was" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/odd_was.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                3.9 : D’ici à 2030, réduire nettement le nombre de décès et de
                maladies dus à des substances chimiques dangereuses et à la
                pollution et à la contamination de l’air, de l’eau et du sol.
              </p>
              <p>
                6.3 : D’ici à 2030, améliorer la qualité de l’eau en réduisant
                la pollution, en éliminant l’immersion de déchets et en
                réduisant au minimum les émissions de produits chimiques et de
                matières dangereuses, en diminuant de moitié la proportion
                d’eaux usées non traitées et en augmentant considérablement à
                l’échelle mondiale le recyclage et la réutilisation sans danger
                de l’eau.
              </p>
              <p>
                11.6 : D’ici à 2030, réduire l’impact environnemental négatif
                des villes par habitant, y compris en accordant une attention
                particulière à la qualité de l’air et à la gestion, notamment
                municipale, des déchets.
              </p>
              <p>
                12.3 : D’ici à 2030, réduire de moitié à l’échelle mondiale le
                volume de déchets alimentaires par habitant au niveau de la
                distribution comme de la consommation et réduire les pertes de
                produits alimentaires tout au long des chaînes de production et
                d’approvisionnement, y compris les pertes après récolte.
              </p>
              <p>
              12.5 : D’ici à 2030, réduire considérablement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation.
              </p>
              <p>
              14.1 D’ici à 2025, prévenir et réduire nettement la pollution marine de tous types, en particulier celle résultant des activités terrestres, y compris les déchets en mer et la pollution par les nutriments.
              </p>
              <p>
              15.1 : D’ici à 2020, garantir la préservation, la restauration et l’exploitation durable des écosystèmes terrestres et des écosystèmes d’eau douce et des services connexes, en particulier les forêts, les zones humides, les montagnes et les zones arides, conformément aux obligations découlant des accords internationaux.
              </p>
         
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b>Quantité produite de déchets (en kg)
          </p>
          <p>Catégories de déchets :</p>
          <ul>
            <li>Déchets dangereux</li>
            <li>Déchets non-dangereux valorisés (recyclage, etc.)</li>
            <li>Déchets non-dangereux non-valorisé</li>
          </ul>
          <p>
          Les co-produits ne sont pas comptabilisés. Un co-produit correspond à un produit / résidu de production non vendu et transmis à une autre société en vue d’être transformé, sans destruction, en un produit vendu.
          </p>
          <p>
          Note : L'impact direct est associé à la valeur ajoutée nette de l'entreprise. Pour la valeur produite, la mesure est complétée par les impacts indirects liés aux consommations et aux amortissements, obtenus à partir des données des entreprises sollicitées
          </p>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <h3>Données par défaut</h3>
          <p>
            Les valeurs par défaut affectées aux unités légales s'appuient sur leur activité principale. 
            Elles correspondent à l'intensité de production de déchets de la production de la division économique à laquelle appartient l'unité légale.
          </p>
          <p>
            Les données macro-économiques à l’échelle des divisions sont obtenues à partir des données EUROSTAT relatives aux déchets générés par activité, 
            des comptes de production des divisions économiques, des modélisations des flux de consommations et de produits entre les branches d’activités 
            et des volumes des importations par produits.
          </p>
          <p>
            L’intervalle de confiance associé à l’utilisation des valeurs statistiques est de 100 % pour les valeurs sectorielles.
          </p>
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Ministère de la Transition Ecologique - {" "}
              <a href="https://www.ecologie.gouv.fr/politiques/economie-circulaire-et-dechets" target="_blank">
              Politiques publiques - Économie circulaire et déchets
              </a>
            </li>
            <li>
             Agence de la Transition écologique (ADEME) - {" "}
              <a href="https://www.ademe.fr/expertises/dechets" target="_blank">
               Expertises - Déchets
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default was;
