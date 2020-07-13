import React from 'react';
import { Card, CardTitle, CardText, Row, Col, FormGroup, Form, Button, CardBody, CardFooter } from 'reactstrap';
import { useForm } from "react-hook-form";
import { Input, Label } from 'reactstrap'

const FormList = (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = createdData => {

  }
  { console.log("dataaaa", props.data) }
  return (
    <div>
      {
        props.data.map((item,index)=>{
          const uniqField=`fieldName${index}`
         return(
          <div>
          <Row className="mt-5">
            <Col sm="4">
              <Card body>
                <CardTitle>
                  {props.data[index].details.formName}
                </CardTitle>
                <CardTitle>{props.data[index].details.formDescription}</CardTitle>
                <CardTitle>{`Düzenlenme Tarihi : ${props.data[index].details.time}`}</CardTitle>
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {props.data[index].details.fields && props.data[index].details.fields.map((item, num) => {
                      return (
                        <div class="form-group row" >
                          <Label for={uniqField} class="col-sm-2">{props.data[index].details.fields && props.data[index].details.fields[num].fieldName}</Label>
                          <div class="col-sm-10">
                            <Input type={props.data[index].details.fields && props.data[index].details.fields[num].dataType !== "String" && "number"} name={uniqField} id={uniqField}
                              innerRef={register({
                                required: props.data[index].details.fields && props.data[index].details.fields[num].checkbox,
                              })} />
                            {errors[uniqField] && (<p1>Lütfen,Bu alanı doldurunuz</p1>)}
                          </div>
                        </div>
                      )
                    })}
                    <CardFooter>
                      <button type="submit">Gönder</button>
                    </CardFooter>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
            )
        </div>
         )
        })
      }
    </div>
 


  );
};

export default FormList;