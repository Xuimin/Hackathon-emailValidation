import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ValidateEmail = () => {
  const [ email, setEmail ] = useState("");

  const validRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  
  /*
    \w same as [a-zA-Z0-9_]
    ^ indicates the beginning of the regex
    $ indicates the end of the regex
  */

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    Swal.fire({
      icon: email.match(validRegEx) ? "success" : "error",
      title: email.match(validRegEx) ? "It's a valid email" : "It's an invalid email",
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <Form method="POST" onSubmit={onSubmitHandler} className="w-75 mx-auto">
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          className="form-control"
          name="email"
          placeholder="example@email.com"
          onChange={onChangeHandler}
        />
        <Button variant="primary" id="button-addon2" type="submit">
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default ValidateEmail;
