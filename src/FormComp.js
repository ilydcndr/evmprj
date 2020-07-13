import React from 'react';
import { Card, CardTitle,Col, FormGroup, Form, Button, CardBody, CardFooter } from 'reactstrap';
import { useForm } from "react-hook-form";
import { Input, Label } from 'reactstrap'

const FormComp = (props) => {
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (createdData, e) => {
        console.log(createdData);

    }

    return (
        <Col sm="4">
            <div>
                <Card body>
                    <CardTitle>
                        {props.data[props.index].details.formName}
                    </CardTitle>
                    <CardTitle>{props.data[props.index].details.formDescription}</CardTitle>
                    <CardTitle>{`Düzenlenme Tarihi : ${props.data[props.index].details.time}`}</CardTitle>
                    <CardBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {props.data[props.index].details.fields && props.data[props.index].details.fields.map((item, num) => {
                                return (
                                    <div class="form-group row" >
                                        <Label for={props.uniqField} class="col-sm-2">{props.data[props.index].details.fields && props.data[props.index].details.fields[num].fieldName}</Label>
                                        <div class="col-sm-10">
                                            <Input type={props.data[props.index].details.fields && props.data[props.index].details.fields[num].dataType !== "String" && "number"} name={props.uniqField} id={props.uniqField}
                                                innerRef={register({
                                                    required: props.data[props.index].details.fields && props.data[props.index].details.fields[num].checkbox,
                                                })} />
                                            {errors[props.uniqField] && (<p1>Lütfen,Bu alanı doldurunuz</p1>)}
                                        </div>
                                    </div>
                                )
                            })}
                            <CardFooter>
                                <button type="submit" >Gönder</button>
                            </CardFooter>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}
export default FormComp;