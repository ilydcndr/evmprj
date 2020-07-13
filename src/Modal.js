import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label, Col, Form } from 'reactstrap';
import { useForm } from "react-hook-form";

const ModalComp = (props) => {
    const [modal, setModal] = useState(false);
    const [field, setField] = useState([])
    const [count, setCount] = useState(0)
    const [Id, setId] = useState(0)
    const { handleSubmit, register } = useForm();

    const onSubmit = values => {
        setModal(!modal);
        const Increase = Id + 1;
  
        for (let index = 1; index <=count; index++) {
            field[index-1].fieldName=values[`fieldName${index}`]
            field[index-1].checkbox=values[`checkbox${index}`]
            field[index-1].dataType=values[`dataType${index}`]        
        }  
        const Initialdate=props.timefnk().props.children
        const bilgi = { "formId": Increase, "formName": values.formName, "formDescription": values.formDescription,"time":Initialdate ,"fields": field }
        const val = JSON.stringify(bilgi)
        localStorage.setItem(Increase, val)
        props.fnk(Increase)
        setId(Increase)
        setField([]);
        setCount(0)      
    }

    const toggle = () => {
        setModal(!modal);
    }

    const addField = () => {
        const newCount = count + 1
        setCount(newCount);
        const fieldName = `fieldName${newCount}`
        const checkbox = `checkbox${newCount}`
        const dataType = `dataType${newCount}`
        setField([...field, { fieldName, checkbox, dataType }]);
    }
    console.log(field)

    const deleteField = () => {
        const Initialstate = [...field]
        Initialstate.pop();
        setField(Initialstate)
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
                                    })} />
                            </Col>
                        </FormGroup>
                        {
                            field.map(item => {
                                return (
                                    <FormGroup row>
                                        <Label for={item.fieldName}>Alan Adı</Label>
                                        <Col sm={3}>
                                            <Input type="text" name={item.fieldName} id={item.fieldName}
                                                innerRef={register({
                                                    required: "Required",
                                                })} />
                                        </Col>
                                        <Label check sm={2}>
                                            <Input type="checkbox" id={item.checkbox} name={item.checkbox}
                                                innerRef={register} />{' '}
                            gerekli
                            </Label>

                                        <Label for={item.dataType} sm={1}>Alan Tipi</Label>
                                        <Col sm={4}>
                                            <Input type="select" name={item.dataType} id={item.dataType}
                                                innerRef={register({
                                                    required: "Required",
                                                })} >
                                                <option>String</option>
                                                <option>Number</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                )
                            }

                            )
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={addField}>Alan Ekle</Button>
                        <Button color="danger" onClick={deleteField}>Alan Sil</Button>
                        <Button type="submit" color="primary">Kaydet</Button>{' '}
                        <Button color="secondary" onClick={toggle}>İptal</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div >
    );
}

export default ModalComp;