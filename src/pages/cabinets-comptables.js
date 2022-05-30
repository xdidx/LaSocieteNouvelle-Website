import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'

const Cabinets = () => {
  return (

    <>
      <PageHeader title={"Cabinets comptables"} path={"cabinets-comptables"} />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>Vous êtes un acteur de la comptabilité ?</h3>
              <p>
                Face à l'urgence sociale et environnementale, il est désormais incontournable de compléter les informations comptables traditionnelles 
                par des indicateurs de performance extra-financière. 
                
              </p>
              <p>
                La pérennité d'une entreprise passe désormais par la prise en compte les défis
                sociaux et environnementaux. Chaque entreprise se doit de s'assurer que la valeur qu'elle produit est compatible avec la transition vers
                une économie soutenable.
              </p>
              <p>
                Les indicateurs sur lesquels nous travaillons fournissent un positionnement de l'entreprise au regard d'objectifs clefs de développement durable.
                Ils sont comparables par rapport à la branche d'activité de l'entreprise et à des trajectoires cibles et assurent un suivi annuel.
              </p>
              <p>
                Le complément comptable obtenu, vous permet ainsi d'enrichir vos livrables en fin d'exercice pour :
              </p>
              <ul>
                <li>
                  Sensibiliser vos clients aux enjeux de développement durable
                </li>
                <li>
                  Informer vos clients sur leurs performances sociales et environnementales
                </li>
                <li>
                  Valoriser leurs actions et leurs engagements sociétaux
                </li>
                <li>
                  In fine, leur permettre de pleinement contribuer à une économie durable
                </li>
              </ul>
            </Col>
            <Col>
              <Image fluid src="/images/accounting-illu.jpg" alt="Illustration cabinet compotable" />

            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-light text-center">
        <blockquote className="blockquote">
          <p>
            "Toute compréhension de l'entreprise passe par sa comptabilité. Or les enjeux sociaux et environnementaux qui doivent être considérés en sont absents."
          </p>
          <footer>Rapport L'entreprise, objet d'intérêt général,<cite title="Source Title">Nicole NOTAT et Jean-Dominique SENARD, 2018</cite></footer>
        </blockquote>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Image fluid alt="Metriz" src="images/metriz.png"  className="pe-4" />
            </Col>
            <Col>
              <h3>
                Un outil de calcul open source à votre disposition
              </h3>
              <p>
                Devenez partenaire et bénéficiez d'une version spécifique à votre disposition
              </p>
              <ul>
                <li>Maintenance évolutive</li>
                <li>Assistance</li>
                <li>Livrables personnalisés</li>
                <li>Ajustement de l'outils à vos fichiers internes</li>
              </ul>

              <Button className="btn-outline-secondary mt-4">
                Utiliser l'outil
              </Button>

            </Col>

          </Row>
        </Container>

      </section>
      <section className="cta text-center">
        <Container>
          <h3>Besoin d'une démonstration ? </h3>
          <p>
            Lors d'une entretien nous vous présenterons l'outil et nous vous proposerons une démonstration personnalisée pour apprendre à utiliser l'outil avec vos données comptables.
          </p>
          <Button variant="secondary">
            Demander une démonstration
          </Button>
        </Container>
      </section>
      <section className="text-center steps">
        <Container>
          <h3>Comment  fonctionne l'Application ?</h3>
          <Row>
            <Col>
              <div className="box shadow-sm">
                <div>
                <Image src="images/import.png" alt="icon" />  
                </div>
                <h4>
                <span className="number">
                  1
                </span>
                  Importation du fec
                  </h4>
                <p>
                  Importer vos écritures comptables via un Fichier d’Ecritures Comptables (FEC).
                </p>
              </div>
            </Col>
            <Col>
              <div className="box shadow-sm">
              <div>
                <Image src="images/rocket.png" alt="icon" />  
                </div>
                <h4>
                <span className="number">
                  2
                </span>
                  Etats initiaux
                </h4>
                <p>
                  Initialiser l'empreinte des comptes de stocks et <br />d'immobilisations</p>
              </div>
            </Col>
            <Col>
              <div className="box shadow-sm">
              <div>
                <Image src="images/chain.png" alt="icon" />  
                </div>
                <h4>
                <span className="number">
                  3
                </span>
                  Numéro de Siren
                </h4>
                <p>
                  Récupérer l'empreinte de la valeur produite des fournisseurs grace à leur numéro de Siren.
                </p>
              </div>

            </Col>
            <Col>
              <div className="box shadow-sm">
              <div>
                <Image src="images/analytics.png" alt="icon" />  
                </div>
                <h4>
                <span className="number">
                  4
                </span>
                  Impacts directs
                </h4>
                <p>
                  Evaluer et déclarater les impacts directs de l'entreprise grâce aux outils de calculs.</p>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-3">
            <Button variant="secondary" className="btn-lg" >
              En savoir plus
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Cabinets