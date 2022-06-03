import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import PageHeader from "../../components/PageHeader";

const geq = () => {
  return (
    <>
      <Helmet>
        <title>
          La société Nouvelle | Indice d'Ecart des Rémunérations Femmes/Hommes
        </title>
      </Helmet>
      <PageHeader
        title="Indice d'Ecart des Rémunérations Femmes/Hommes"
        prev={"indicateur"}
        prevTitle={"Liste des indicateurs"}
        path={"indicateur/geq"}
      />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Description de l'indicateur</h3>
              <p>
                Ecart entre le taux horaire brut moyen des femmes et des hommes
                (en pourcentage du taux horaire moyen), exprimé en % (du taux
                horaire moyen).
              </p>
              <p>
                L’indicateur informe sur les écarts de salaires entre les femmes
                et les hommes au sein des entreprises ayant contribué à la
                production de la valeur. Il vise à encourager les actions en
                faveur de la réduction de l'écart de rémunérations entre les
                femmes/hommes ; en 2017 cet écart était de 16.8 % dans le
                secteur privé (
                <a href="https://www.insee.fr/fr/statistiques/4514861#figure3_radio1">
                  Insee
                </a>
                ).
              </p>

              <Image fluid src="/ESE/GEQ.png" className="my-3" />
              <p>
                <b>Code : </b> GEQ
              </p>
            </Col>
            <Col>
              <h3>Objectifs de développement durable</h3>
              <p>
                5.1 : Mettre fin, dans le monde entier, à toutes les formes de
                discrimination à l’égard des femmes et des filles.
              </p>
              <p>
                5.5 : Garantir la participation entière et effective des femmes
                et leur accès en toute égalité aux fonctions de direction à tous
                les niveaux de décision, dans la vie politique, économique et
                publique.
              </p>
              <p>
                8.5 : D’ici à 2030, parvenir au plein emploi productif et
                garantir à toutes les femmes et à tous les hommes, y compris les
                jeunes et les personnes handicapées, un travail décent et un
                salaire égal pour un travail de valeur égale
              </p>
              <p>
                10.2 : D’ici à 2030, autonomiser toutes les personnes et
                favoriser leur intégration sociale, économique et politique,
                indépendamment de leur âge, de leur sexe, de leurs handicaps, de
                leur race, de leur appartenance ethnique, de leurs origines, de
                leur religion ou de leur statut économique ou autre.
              </p>
              <Image
                id="logo-odd"
                src="/resources/odd_geq.png"
                alt="logo odd"
                fluid
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light">
        <Container>
          <h3>Impact direct mesuré</h3>
          <p>
            <b>Grandeur mesurée : </b>Ecart absolu entre le taux horaires moyens
            bruts des femmes et celui des hommes, en pourcentage du taux horaire
            brut moyen
          </p>

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
            Les données disponibles se limitent à l’écart de rémunération à
            l’échelle nationale pour les revenus des ménages avant transferts
            sociaux.
          </p>

          <p>
            La valeur par défaut est appliquée à l’ensemble des unités légales
            dont les effectifs sont supérieurs à 2 collaborateurs. Pour les
            unités légales dont les effectifs ne dépassent pas
          </p>
          <p>
            2 collaborateurs, l'écart est défini comme nul pour la valeur
            ajoutée, et la valeur par défaut est appliqué pour les
            consommations.
          </p>
          <p>L’intervalle de confiance est de 50 %.</p>
        </Container>
      </section>
      <section className="info-supp">
        <Container>
          <hr></hr>
          <h4 className="mt-5">Pour aller plus loin </h4>
          <ul>
            <li>
              Données EUROSTAT 
              <a href="https://appsso.eurostat.ec.europa.eu/nui/show.do?dataset=earn_ses_hourly&lang=fr">
                Enquête sur la structure des salaires : salaires horaires
              </a>
            </li>
            <li>
            Ministère du Travail, de l’Emploi et de l’Insertion
              <a href="https://travail-emploi.gouv.fr/droit-du-travail/la-remuneration/article/l-egalite-de-remuneration-entre-les-femmes-et-les-hommes-et-les-obligations-des-374533">
              L’égalité de rémunération entre les femmes et les hommes et les obligations des employeurs
                </a>                
            </li>     
          </ul>
        </Container>
      </section>
    </>
  );
};

export default geq;
