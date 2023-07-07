import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import ContentHeadline from './ingredients/ContentHeadline';
import Fade from 'react-reveal/Fade';

function TemplateFext() {
  return(
   <div className="template-form px-3 py-5">
     <div className="container">
        
        <ContentHeadline headline={"test"}></ContentHeadline>
        
        <div class="row mt-5">
            <Fade left>
                <Form className="font-poppins">       
                    <Row>   
                        <Form.Group as={Col} controlId="formGridEmail">
                            <FloatingLabel controlId="floatingSelect" label="Anliegen">
                                <Form.Select className="rounded-0" aria-label="Floating label select example">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row className="mt-4">          
                        <Form.Group as={Col} controlId="formGridForname">
                            <FloatingLabel controlId="floatingInput" label="Vorname">
                                <Form.Control type="text" placeholder="-" className="rounded-0"/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridSurename">
                            <FloatingLabel controlId="floatingInput" label="Nachname" >
                                <Form.Control type="text" placeholder="-" className="rounded-0"/>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>

                    <Row className="mt-4">          
                        <Form.Group as={Col} controlId="formGridForname">
                            <FloatingLabel controlId="floatingInput" label="E-Mail">
                                <Form.Control type="email" placeholder="-" className="rounded-0"/>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>

                    <Row className="mt-4">          
                        <Form.Group as={Col} controlId="formGridForname">
                            <FloatingLabel controlId="floatingInput" label="Telefon">
                                <Form.Control type="phone" placeholder="-" className="rounded-0"/>
                            </FloatingLabel>
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label="Bitte um Rückruf"
                                className="mt-3"
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mt-5">          
                        <Form.Group as={Col} controlId="formGridForname">
                            <FloatingLabel controlId="floatingTextarea2" label="Ihre Nachricht">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                className="rounded-0"
                                />
                            </FloatingLabel>
                        </Form.Group>
                            {['checkbox'].map((type) => (
                            <div key={`inline-${type}`} className="mt-3">
                                <Form.Check
                                    inline
                                    label="Die Datenschutzerklärung habe ich gelesen und akzeptiert."
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                            </div>
                        ))}
                    </Row>

                    <Button className="mt-5 rounded-0" type="submit">Anfrage abschicken</Button>
                </Form>
            </Fade>
        </div>    
    </div>
   </div>
  )
}

export default TemplateFext;