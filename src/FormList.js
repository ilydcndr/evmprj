import React from 'react';
import FormComp from './FormComp';
import {Row} from 'reactstrap'

const FormList = (props) => {
 
  return (
    <Row className="mt-5">
          {
            props.data.map((item, index) => {
              const uniqField = `fieldName${index}`
              return (
                <FormComp index={index} uniqField={uniqField} data={props.data}/>
              )
            })
          }
        
    </Row>
  );
};

export default FormList;