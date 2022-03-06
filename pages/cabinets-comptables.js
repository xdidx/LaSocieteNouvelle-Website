import { Helmet } from 'react-helmet';

// Components
import Header from '../src/components/header'
import Footer from '../src/components/footer'

export default function Home() 
{
  return (
    <div className="container">
      <Helmet>
        <title>La société Nouvelle | Cabinets comptables</title>
      </Helmet>
      <Header page="cabinets-comptables" />

      <main className="main">

        <div className="section">

          <div className="bloc blue">
            <h1 className="titre-bloc">Vous êtes un acteur de la comptabilité</h1>
            <div className="h-group">
              <div>
                <p>
                  "Toute compréhension de l'entreprise passe par sa comptabilité. Or les enjeux sociaux
                  et environnementaux qui doivent être considérés en sont absents."
                </p>
                <p>
                  &nbsp;&nbsp; - Rapport <i>L'entreprise, objet d'intérêt général</i>, Nicole NOTAT et Jean-Dominique SENARD, 2018
                </p>
                <p>
                  Face à l'urgence sociale et environnementale, il est désormais incontournable de compléter les informations
                  comptables et les indicateurs de performance des entreprises. L'objectif de l'approche que nous poussons
                  et de fournir, sur des dimensions clefs, un positionnement de l'entreprise au regard des objectifs collectifs fixés.
                </p>
                <p>
                  Les cabinets comptables sont les acteurs clefs de la mise en oeuvre de ces indicateurs de par leurs expertises et
                  leur proximité avec les entreprises.
                </p>
                <p>
                  Le complément comptable sur lequel nous travaillons, vous permet de compléter vos livrables en fin d'exercice pour :
                  <ul>
                    <li>Sensibiliser vos clients aux enjeux de développement durable</li>
                    <li>Informer vos clients sur leurs performances sociales et environnementales</li>
                    <li>Valoriser leurs actions et leurs engagements sociétaux</li>
                    <li><i>In fine</i>, leur permettre de pleinement contribuer à une économie durable</li>
                  </ul>
                </p>
              </div>
              <div className="v-group">
                <img id="img-illus-cabinets-comptables" src="/images/team_working.png" alt="img-screen-video" />
              </div>
            </div>
          </div>

        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="text-center">Un outil de calcul open source à votre disposition</h2>
          </div>
          <div className="bloc gray">
            <div className="h-group">
              <div className="v-group">
                <img id="img-screen-webapp" src="/images/img-screen-webapp.png" alt="img-screen-webapp" />
                <div className="buttons-group">
                  <a className="btn" href="https://metriz.lasocietenouvelle.org" target="_blank">Tester avec la version libre</a>
                </div>
              </div>
              <div className="v-group">
                <h3>Devenez partenaire et bénéficiez d'une version spécifique à votre disposition</h3>
                <ul>
                  <li>Maintenance évolutive</li>
                  <li>Assistance</li>
                  <li>Personnalisation de vos livrables</li>
                  <li>Ajustements à vos fichiers internes</li>
                </ul>
                <div className="buttons-group">
                  <a className="btn" href="mailto:contact@lasocietenouvelle.org">Demander une démonstration</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="title-with-side-lines">
            <h2 className="text-center">Fonctionnement de l'Application</h2>
          </div>
          <div className="bloc">
            <FigureEtapes />
          </div>
        </div>

      </main>


      <Footer />

    </div>
  )
}

const FigureEtapes = () =>
  <div className="h-group" id="etapes">
    <div className="step-container">
      <h4>Import comptable</h4>
      <p>
        Import des écritures comptables à partir du FEC.
      </p>
      <p className="step-number">1</p>
    </div>
    <div className="step-container">
      <h4>Etats initiaux</h4>
      <p>
        Initialisation de l'empreinte des comptes de stocks et d'immobilisations à partir des résultats
        de l'exercice précédent ou via l'utilisation de données par défaut.
      </p>
      <p className="step-number">2</p>
    </div>
    <div className="step-container">
      <h4>Numéros de siren</h4>
      <p>
        Association des numéros de siren aux comptes fournisseurs auxiliaires, et récupération des empreintes
        de la valeur produite des fournisseurs.
      </p>
      <p className="step-number">3</p>
    </div>
    <div className="step-container">
      <h4>Impacts directs</h4>
      <p>
        Evaluation et déclaration des impacts directs de l'entreprise. Des outils de calcul sont disponibles pour les indicateurs les plus complexes.
      </p>
      <p className="step-number">4</p>
    </div>
  </div>