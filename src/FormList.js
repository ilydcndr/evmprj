import React from 'react';
import { Card, CardTitle, CardText, Row, Col, FormGroup, Form,Button, CardBody, CardFooter } from 'reactstrap';
import { useForm } from "react-hook-form";
import { Input, Label } from 'reactstrap'

const FormList = (props) => {
  const { handleSubmit, register,errors} = useForm();
  console.log(props.data, "data")

  const onSubmit =createdData=>{    
   
  }
  

  return (
    <Row className="mt-5">
      <Col sm="4">
        <Card body>
          <CardTitle>
            {props.data.formName}
          </CardTitle>
          <CardTitle>{props.data.formDescription}</CardTitle>
          <CardTitle></CardTitle> 
          <CardBody>
         <form onSubmit={handleSubmit(onSubmit)}>       
           <div class="form-group row" >
           <Label for="formfieldName1" class="col-sm-2">{props.data.fieldName1}</Label>
             <div class="col-sm-10">
             <Input type="text" name="formfieldName1" id="formfieldName1" 
             innerRef={register({
              required: true,
            })}/>
            {errors.formfieldName1 && (<p1>Lütfen,Bu alanı doldurunuz</p1>)}
             </div>
           </div>     
           {/* <div class="form-group row">
           <Label for="formfieldName2" class="col-sm-2">{props.data.fieldName2}</Label>
             <div class="col-sm-10">
             <Input type="text" name="formfieldName2" id="formfieldName2" 
             innerRef={register({
              required: true,
            })}/>
             {errors.formfieldName2 && (<p1>Lütfen,Bu alanı doldurunuz</p1>)}
             </div>
           </div>
           <div class="form-group row">
           <Label for="formfieldName3" class="col-sm-2">{props.data.fieldName3}</Label>
             <div class="col-sm-10">
             <Input type="text" name="formfieldName3" id="formfieldName3" 
             innerRef={register({
              required: true,
            })} />
            {errors.formfieldName1 && (<p1>Lütfen,Bu alanı doldurunuz</p1>)}
             </div>
           </div>       
           <CardFooter>
           <button type="submit">Gönder</button>
           </CardFooter>  */}
         </form> 
         </CardBody>   
        </Card>
      </Col>
    </Row>
  );
};

export default FormList;