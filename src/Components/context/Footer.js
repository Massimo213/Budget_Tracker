import React from 'react';
import { Container, Row, Col,Card,Accordion,Button } from 'react-bootstrap';



export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-auto">
      <Container className="p-4">
        <Row>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">ExpenseOnLine</h5>
            <p>
              Budgeting is essential for maintaining financial stability and achieving long-term goals. It helps you track spending, save for future expenses, and avoid debt. By managing your budget wisely, you can make informed decisions and reduce financial stress.
            </p>
          </Col>
          <Col lg={6} md={12} className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Learn More</h5>
            <p>
              Most people nowadays aren't able to budget the correct way. Here is an article that tremendously helps people gain significant awareness with money: <a href="https://www.linkedin.com/pulse/importance-financial-awareness-empowering-your-future-depano/" target="_blank" rel="noopener noreferrer">Financial Literacy article</a>.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <a href="https://github.com/Massimo213" target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href="Linkedin.com/in/yahya-mounadi-5740b12a8/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </Col>
        </Row>
        <Row> 
          <Col className="text-center py-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} BudgetOn. All Rights Reserved.</p>
          </Col>
        </Row>


        
      </Container>
    </footer>
  );
}
