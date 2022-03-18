import { Col, Container, Row } from 'react-bootstrap';

var React = require('react');

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer bg-primary">
        <Container>
          <Row>
            <Col>
              <ul className='nav'>
                <li className="nav-item">
                  <a className="nav-link" href="/a-propos">A propos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/mentions-legales">Mentions légales</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/company-data?siren=889182770">Empreinte Sociétale</a>

                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/La-Societe-Nouvelle/LaSocieteNouvelle-Website" target="_blank"><i className="bi bi-github"></i> GitHub</a>

                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com/company/la-societe-nouvelle/" target="_blank"><i className="bi bi-linkedin"></i> LinkedIn</a>

                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://twitter.com/SHumiliere" target="_blank"><i className="bi bi-twitter"></i> Twitter</a>
                </li>
              </ul>
            </Col>
  
          </Row>

        </Container>

      </div>

    );
  }
}