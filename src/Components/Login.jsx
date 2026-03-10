import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Card,
  CardBody,
  FormFeedback,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const initialErrors = {
  email: "",
  password: "",
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(false);

  const navigate = useNavigate();

  const isEmailValid = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  useEffect(() => {
    const emailValid = isEmailValid(form.email);
    const passwordValid = isPasswordValid(form.password);

    setIsValid(emailValid && passwordValid && form.terms);
  }, [form]);

  const validateField = (name, value) => {
    let message = "";

    if (name === "email") {
      if (!isEmailValid(value)) {
        message = "Geçerli bir email giriniz.";
      }
    }

    if (name === "password") {
      if (!isPasswordValid(value)) {
        message = "Şifre en az 8 karakter olmalıdır.";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: message,
    }));
  };

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      value = checked;
    }

    setForm({ ...form, [name]: value });

    if (type !== "checkbox") {
      validateField(name, value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValid) {
      navigate("/success");
    }
  };

  return (
    <Container style={{ marginTop: "100px", maxWidth: "500px" }}>
      <Card>
        <CardBody>
          <h3 className="text-center mb-4">Login</h3>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                invalid={errors.email !== ""}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                invalid={errors.password !== ""}
              />
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>

            <FormGroup check>
              <Input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
              />
              <Label check>Şartları kabul ediyorum</Label>
            </FormGroup>

            <FormGroup className="text-center mt-4">
              <Button color="primary" disabled={!isValid} data-cy="submit">
                Sign In
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}