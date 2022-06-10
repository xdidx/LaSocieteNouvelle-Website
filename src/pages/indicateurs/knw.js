import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet"; 
import PageHeader from "../../components/PageHeader";

const knw = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Contribution à l'Evolution des Compétences et
          des Connaissances
        </title>
      </Helmet>
      <PageHeader
        title="Contribution à l'Evolution des Compétences et des Connaissances"
        prev={"indicateur"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/knw"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/knw.svg" height="80" className="mb-3" />
              <p>
                Part de la valeur produite, contribuant à la recherche, à la
                formation ou à l’enseignement, exprimée en % (de la valeur).
              </p>
              <p>
                L’indicateur informe sur la part des revenus de l’entreprise
                dédiée à la formation, la recherche ou l’enseignement.
              </p>

              <p>
                <b>Code : </b> KNW
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-knw" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/odd_knw.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                4.3 : D’ici à 2030, faire en sorte que les femmes et les hommes
                aient tous accès dans des conditions d’égalité à un enseignement
                technique, professionnel ou tertiaire, y compris universitaire,
                de qualité et d’un coût abordable.
              </p>
              <p>
                4.4 : D’ici à 2030, augmenter considérablement le nombre de
                jeunes et d’adultes disposant des compétences, notamment
                techniques et professionnelles, nécessaires à l’emploi, à
                l’obtention d’un travail décent et à l’entrepreneuriat
              </p>
              <p>
                8.6 : D’ici à 2020, réduire considérablement la proportion de
                jeunes non scolarisés et sans emploi ni formation
              </p>
              <p>
                9.5 : Renforcer la recherche scientifique, perfectionner les
                capacités technologiques des secteurs industriels de tous les
                pays, notamment en encourageant l’innovation et en augmentant
                considérablement le nombre de personnes travaillant dans le
                secteur de la recherche et du développement \[...\ et en
                accroissant les dépenses publiques et privées consacrées à la
                recherche et au développement d’ici à 2030.
              </p>
              
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b> Montant total des charges (hors charges
            externes) liées à la formation, l’éducation ou la recherche (en
            euros)
          </p>
          <p>Les postes de charges sont les suivants :</p>
          <ul>
            <li>
              Rémunérations de contrat de formation : stage, alternance, contrat
              d’apprentissage
            </li>
            <li>Rémunérations liées à l’encadrement de formation</li>
            <li>Rémunérations liées à des travaux de recherche</li>
            <li>
              Rémunérations liées à des partenariats avec des établissements de
              formation
            </li>
          </ul>
          <p>
          Note : L'impact direct est associé à la valeur ajoutée nette de l'entreprise. Pour la valeur produite, la mesure est complétée par les impacts indirects liés aux consommations et aux amortissements, obtenus à partir des données des entreprises sollicitées
          </p>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <h3>Données par défaut</h3>
          <p>
          Les données macroéconomiques disponibles se limitent à la part du PIB dédiée à la formation professionnelle à l’échelle nationale, pour les pays de l'Union Européenne.
          </p>
           <p>
           La valeur par défaut des unités légales  correspond à la valeur par défaut à l'échelle nationale, excepté pour les unités légales des branches de l’éducation, de la formation ou de la recherche pour lesquelles la valeur ajoutée est considérée comme entièrement contributrice à l’évolution des compétences et des connaissances. Le cas échant le taux de valeur ajoutée correspond à celui de la branche économique concernée. Les valeurs par défaut à l'échelle française et européenne sont affectées aux consommations domestiques et aux importations.
           </p>
           <p>
           La valeur par défaut associé aux importations correspond à la contribution de la production intérieure européenne.
            </p>   
            <p>
            Les jeux de données ouvertes du ministère de l’Enseignement supérieur, de la Recherche et de l’Innovation sont en cours d’exploitation pour une ventilation des dépenses en R&D par taille et branche d’activité.
            </p>
            <p>
            L’intervalle de confiance si situe aux alentours de 25 % pour les valeurs ajustées (branches spécifiques) et de 500 % dans les autres cas i.e. une contribution entre 0.1 % et 10 %.
            </p>
            <p>
               Données EUROSTAT : <a href="https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=trng_cvt_16n2&lang=fr">
              Coûts des cours FPC par type et activité de la NACE Rév. 2
              </a>
            </p>

        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
            Ministère de l’Enseignement Supérieur, de la Recherche et de l’Innovation
              <a href="https://www.enseignementsup-recherche.gouv.fr/">
              Ministère de l’Enseignement Supérieur, de la Recherche et de l’Innovation
              </a>
            </li>
            <li>
              Ministère du Travail, de l’Emploi et de l’Insertion 
              <a href="https://travail-emploi.gouv.fr/formation-professionnelle/">
              Formation professionnelle
              </a>
            </li>
            <li>
            Ministère de l’Economie, des Finances et de la Relance
              <a href="https://www.economie.gouv.fr/entreprises/innovation-et-data">
              Innovation et data
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default knw;
