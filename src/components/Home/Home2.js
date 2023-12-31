import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/image/profile/logo.png";
import Tilt from "react-parallax-tilt";
import { withTranslation } from 'react-i18next';
import Social from '../Social.js';
import Recommandations from "../Recommandation";
import config from '../../config.js';

function Home2({ t }) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textTransform: "uppercase" }}>
              <p dangerouslySetInnerHTML={{ __html: t('home.myself.introTitle') }} />
            </h1>
            <p className="home-about-body" dangerouslySetInnerHTML={{ __html: t('home.myself.intro') }} />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col>
            {config.recommandations.enabled && (
              <Container className='home-content' style={{ marginBottom: '50px' }}>
                <h1 style={{ color: 'whitesmoke', textAlign: 'left', textTransform: "uppercase" }} className="heading-header"><p dangerouslySetInnerHTML={{ __html: t('home.recommandation') }} /></h1>
                <Recommandations listRecommandation={t('home.listRecommandation', { returnObjects: true })} />
              </Container>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ textTransform: "uppercase" }}> <p dangerouslySetInnerHTML={{ __html: t('multiple.follow') }} /> </h1>
            <Social></Social>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default withTranslation(['translation', 'common'])(Home2);
