import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const haz = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Intensité d'Utilisation de produits dangereux{" "}
        </title>
      </Helmet>
      <PageHeader
        title="Intensité d'Utilisation de produits dangereux"
        prev={"indicateur"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/haz"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <Image src="/ESE/HAZ.svg" height="80" className="mb-3" />
              <p>
                Quantité utilisée de produits classifiés comme dangereux pour la
                santé ou l’environnement par unité de valeur produite, exprimée
                en g/€ (grammes par euro). Les dangers physiques (irritation,
                explosif, inflammable, etc.) ne sont pas pris en compte. La
                classification s’appuie sur les pictogrammes de danger présents
                sur les produits.
              </p>
              <p>
                L’indicateur vise à informer sur le degré d’utilisation de
                produits pouvant entraîner des conséquences néfastes sur la
                santé et/ou l’environnement (pesticides, etc.). Son objectif est
                de diminuer le recours à ces catégories de produits.
              </p>
              <p>
                L’indicateur n’informe pas sur les types de dangers liés à ces
                produits (toxicité, irritation, etc.), sur leur périmètre
                (danger temporaire lors d’une manipulation, contact avec
                l’environnement, présence résiduelle dans les produits, etc.) et
                des mesures prises pour limiter les risques.
              </p>
              <p>
                Dans une volonté de réduire l’utilisation de produits
                spécifiques, il conviendra alors de construire un indicateur ad
                hoc.
              </p>
              <p>
                <b>Code : </b> HAZ
              </p>
              <Button variant="secondary" href="https://docs.lasocietenouvelle.org/empreinte-societale/indicateurs/indicateur-haz" target="_blank" rel="noreferrer">
                Documentation
              </Button>
            </Col>
            <Col className="odd">
              <h3>Objectifs de développement durable</h3>
              <Image
                id="logo-odd"
                src="/images/odd/odd_haz.png"
                alt="logo odd"
                className="mb-3"
              />
              <p>
                3.9 : D’ici à 2030, réduire nettement le nombre de décès et de
                maladies dus à des substances chimiques dangereuses et à la
                pollution et à la contamination de l’air, de l’eau et du sol.
              </p>
              <p>
                8.4 : s’attacher à ce que la croissance économique n’entraîne
                plus la dégradation de l’environnement, comme prévu dans le
                cadre décennal de programmation relatif à la consommation et à
                la production durables, les pays développés montrant l’exemple
                en la matière.
              </p>
              <p>
                12.4 : D’ici à 2020, instaurer une gestion écologiquement
                rationnelle des produits chimiques et de tous les déchets tout
                au long de leur cycle de vie, conformément aux principes
                directeurs arrêtés à l’échelle internationale, et réduire
                considérablement leur déversement dans l’air, l’eau et le sol,
                afin de minimiser leurs effets négatifs sur la santé et
                l’environnement.
              </p>
              <p>
                14.1 : D’ici à 2025, prévenir et réduire nettement la pollution
                marine de tous types, en particulier celle résultant des
                activités terrestres, y compris les déchets en mer et la
                pollution par les nutriments.
              </p>
              <p>
                15.1 : D’ici à 2020, garantir la préservation, la restauration
                et l’exploitation durable des écosystèmes terrestres et des
                écosystèmes d’eau douce et des services connexes, en particulier
                les forêts, les zones humides, les montagnes et les zones
                arides, conformément aux obligations découlant des accords
                internationaux
              </p>
            
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b>Quantité utilisée de produits dangereux
            pour la santé et/ou l’environnement (en kg)
          </p>
          <p>Les dangers considérés sont :</p>
          <ul>
            <li>Dangereux, nocif et irritant</li>
            <li>Polluant pour l’environnement</li>
            <li>Produit dangereux pour la santé</li>
            <li>Toxique</li>
          </ul>
          <p>
            *Note : L'impact direct est associé à la valeur ajoutée nette de
            l'entreprise. Pour la valeur produite, la mesure est complétée par
            les impacts indirects liés aux consommations et aux amortissements,
            obtenus à partir des données des entreprises sollicitées*
          </p>
        </Container>
      </section>
      <section className="pb-0">
        <Container>
          <h3>Données par défaut</h3>
          <p>
            Les données disponibles se limitent à l’intensité d’utilisation de
            produits dangereux à l’échelle de la production intérieure
            européenne. Elle est affectée à l’ensemble des unités légales.
          </p>
          <p>
            L’intervalle de confiance associé à l’utilisation de la valeur est à
            1000 %.{" "}
          </p>
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Ministère de la Transition Ecologique{" "}
              <a href="https://www.ecologie.gouv.fr/politiques/produits-chimiques">
                Politiques publiques - Produits chimiques
              </a>
            </li>
            <li>
              Institut National de Recherche et de Sécurité (INRS)
              <a href="https://www.inrs.fr/risques/cmr-agents-chimiques/ce-qu-il-faut-retenir.html">
                Agents chimiques CMR
              </a>
            </li>
            <li>
              <a href="https://echa.europa.eu/fr/home">
                European Chemicals Agency (ECHA)
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default haz;
