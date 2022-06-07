import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import PageHeader from '../components/PageHeader'

const Entreprises = () => {
  return (

    <>
      <PageHeader title={"Entreprises"} path={"entreprises"} />
      <section>
        <Container>
          <Row>
            <Col>
              <h3>
                Pilotez et valorisez votre performance extra-financière
              </h3>
              <p>
                Climat, inégalités sociales, raréfaction des ressources naturelles... Les entreprises ont un rôle majeur dans la construction d'une société durable. Il est désormais incontournable pour une entreprise de prendre en compte ses enjeux clefs si elle veut assurer sa pérennité.
              </p>
              <p>
                Mesurer les impacts de sa valeur ajoutée et de sa valeur produite permet d'évaluer sa capacité à produire de la valeur en limitant ses impacts négatifs, 
                de se positionner vis-à-vis de sa branche d'activités et des objectifs de développement durable fixés.
              </p>
              <p>
                La publication des indicateurs à l'échelle de votre chiffre d'affaires valorise votre performance auprès de vos clients, leur performance faisant intervenir la vôtre.
              </p>
              <p>  
                La démarche vous permet d'êre transparent sur l'empreinte que vous laissez sur la société et l'environnement, et de prouver que vos activités 
                s'inscrivent dans une trajectoire visant à atteindre une économie soutenable.
              </p>
            </Col>
            <Col>
              <Image fluid src="/images/entreprise.jpg" alt="Illustration Entreprises" />

            </Col>
          </Row>
        </Container>
      </section>
      <section id="cta-entreprise" className="text-center cta-metriz">
        <Container>
          <h3 className="h4">Mesurer vos indicateurs grâce à notre application web</h3>
          <p>
          Une application web Open Source est à votre disposition pour mesurer ces indicateurs. 
          Elle permet de faire le lien entre votre FEC (Fichier d'Ecritures Comptables), 
          les données disponibles relatives à vos fournisseurs et vos impacts directs pour produire automatiquement des 
          livrables téléchargeables.
          </p>
          <Row>
            <Col>
              <div className="box shadow-sm">
                <div>
                  <Image src="images/performance-extra-financiere.png" alt="Performance Extra-financière" />
                </div>
                <h4 className="h6">
                  Suivez et valorisez votre performance extra-financière
                </h4>
              </div>
            </Col>
            <Col>
              <div className="box shadow-sm">
                <div>
                  <Image src="images/position-odd.png" alt="Objectifs développement durable" />
                </div>
                <h4 className="h6">
                  Positionnez vous rapport aux objectifs de développement durable
                </h4>
              </div>
            </Col>
            <Col>
              <div className="box shadow-sm">
                <div>
                  <Image src="images/analyse-risques.png" alt="Risques" />
                </div>
                <h4 className="h6" >
                  Anticipez de protentiels <br/>risques
                </h4>

              </div>

            </Col>
          </Row>
          <div className="text-center mt-3">
            <Button variant="secondary" href="https://metriz.la-societe-nouvelle.org" target='_blank' rel="noreferrer" >
                Utiliser l'application
            </Button>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <h3> Principe de calcul</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris blandit dolor sem. Quisque posuere at diam vitae pharetra.
              Suspendisse quis metus eu ante accumsan luctus eget sit amet lorem. Donec nec commodo nibh. 
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mauris blandit dolor sem. Quisque posuere at diam vitae pharetra.
              Suspendisse quis metus eu ante accumsan luctus eget sit amet lorem. Donec nec commodo nibh. 
              </p>
            </Col>
            <Col>
            <Image fluid src="/images/graphique-donut.png" alt="Graphique Principe de calculs"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Entreprises