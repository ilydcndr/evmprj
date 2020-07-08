import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label, Col, Form } from 'reactstrap';
import { useForm } from "react-hook-form";

const ModalComp = () => {
    const [modal, setModal] = useState(false);
    const { handleSubmit, register, errors } = useForm();
     const onSubmit = values =>{ 
         console.log("hello")
         console.log(values);
         setModal(!modal)
    }

    const toggle = () => {
        setModal(!modal);
    }

    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    return (
        <div>
            <Button color="primary" onClick={toggle}>Form Oluştur</Button>
            
            <Modal isOpen={modal} toggle={toggle} size="lg">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader toggle={toggle} close={closeBtn}>Form Oluşturma</ModalHeader>
                <ModalBody>
                        <FormGroup row>
                            <Label for="formName" sm={2}>Form Adı</Label>
                            <Col sm={10}>
                                <Input type="text" name="formName" id="formName"
                                innerRef={register({
                                    required: "Required",
                                  })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="formDescription" sm={2}>Form Tanımı</Label>
                            <Col sm={10}>
                                <Input type="text" name="formDescription" id="formDescription"
                                innerRef={register({
                                    required: "Required",
                                  })}  />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="fieldName1" sm={2}>Alan Adı</Label>
                            <Col sm={3}>
                                <Input type="text" name="fieldName1" id="fieldName1" 
                                innerRef={register({
                                    required: "Required",
                                  })}  />
                            </Col>
                            <Label check sm={2}>
                                <Input type="checkbox" id="checkbox1" name="checkbox1" 
                                innerRef={register} />{' '}
                            gerekli
                            </Label>

                            <Label for="dataType" sm={1}>Alan Tipi</Label>
                            <Col sm={4}>
                                <Input type="select" name="dataType" id="dataType"
                                innerRef={register({
                                    required: "Required",
                                  })} >
                                    <option>String</option>
                                    <option>Number</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="fieldName2" sm={2}>Alan Adı</Label>
                            <Col sm={3}>
                                <Input type="text" name="fieldName2" id="fieldName2"
                                innerRef={register({
                                    required: "Required",
                                  })}  />
                            </Col>
                            <Label check sm={2}>
                                <Input type="checkbox" id="checkbox2" name="checkbox2" 
                                innerRef={register} />{' '}
                            gerekli
                            </Label>

                            <Label for="dataType" sm={1}>Alan Tipi</Label>
                            <Col sm={4}>
                                <Input type="select" name="dataType" id="dataType">
                                    <option>String</option>
                                    <option>Number</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="fieldName3" sm={2}>Alan Adı</Label>
                            <Col sm={3}>
                                <Input type="text" name="fieldName3" id="fieldName3"
                                innerRef={register({
                                    required: "Required",
                                  })}  />
                            </Col>
                            <Label check sm={2}>
                                <Input type="checkbox" id="checkbox3" name="checkbox3" 
                                innerRef={register} />{' '}
                            gerekli
                            </Label>

                            <Label for="dataType" sm={1}>Alan Tipi</Label>
                            <Col sm={4}>
                                <Input type="select" name="dataType" id="dataType">
                                    <option>String</option>
                                    <option>Number</option>
                                </Input>
                            </Col>
                        </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="success">Alan Ekle</Button>
                    <Button type="submit" color="primary">Kaydet</Button>{' '}
                    <Button color="secondary" onClick={toggle}>İptal</Button>
                </ModalFooter>
                </Form>
            </Modal>       
        </div>
    );
}

export default ModalComp;