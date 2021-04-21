var React = require('react');
import {DropDown} from "../src/lasocietenouvelle/component/dropdown.js";


export default class Header extends React.Component {
  render() {
    return (

    <div className="Header">

      <div id="header">

        <div id="header-strip">
          <a href="/">
          <img id="logo-header" src="/resources/logo_miniature.jpg" alt="logo"/>
          </a>
          <div id="header-name-company">
            <h1 id="company-name-header">La Société Nouvelle</h1>
            <p id="text-header">L'OpenData au service de l'économie</p>
          </div>
          <p className="header-strip-item" id="header-text2">
            Système d'Information extra-financière
          </p>
        </div>

        <div id="menu">
          <ul>
          <div className="v-line"/>
            <li className="menu-item"><a href="/a-propos">A Propos</a></li>
            <div className="v-line"/>
            <li className="menu-item">
              <DropDown
                title="Empreinte Societale"
                href="/empreinte-societale">
                <div><a href="/empreinte-societale">Présentation générale</a></div>
                <div><a href="/indicateur/ghg">Emissions de gaz à effet de serre</a></div>
                <div><a href="/indicateur/eco">Production française</a></div>
                <div><a href="/indicateur/was">Déchets</a></div>
                <div><a href="/indicateur/geq">Inégalités Femmes/Hommes</a></div>
                <div><a href="/indicateur/nrg">Consommation d'énergie</a></div>
                <div><a href="/indicateur/wat">Consommation d'eau</a></div>
                <div><a href="/indicateur/dis">Répartition des rémunérations</a></div>
                <div><a href="/indicateur/soc">Acteurs d'intérêt social</a></div>
                <div><a href="/indicateur/mat">Ressources naturelles</a></div>
                <div><a href="/indicateur/knw">Compétences et Connaissances</a></div>
                <div><a href="/indicateur/art">Métiers d'Art et Savoir-Faire</a></div>
                <div><a href="/indicateur/haz">Produits dangereux</a></div>
              </DropDown>
            </li>
            <div className="v-line"/>
            <li className="menu-item"><a href="/portail">Portail</a></li>
            <div className="v-line"/>
            <li className="menu-item"><a href="/services">Services</a></li>
            <div className="v-line"/>
            <li className="menu-item"><a href="/ressources">Ressources</a></li>
            <div className="v-line"/>
            <li className="menu-item"><a href="/contact">Contact</a></li>
            <div className="v-line"/>
          </ul>
        </div>

      </div>

    </div>

    );
  }
}
