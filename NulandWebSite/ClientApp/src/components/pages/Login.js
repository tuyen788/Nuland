import React, { Component } from "react";

import "../../App.css";
import { variables } from "../../Variables";
import Auth from "../../Auth";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
export class Login extends Component {
  constructor() {
    super();
    this.state = {
      LoginID: "",
      Password: "",
    };
    this.Password = this.Password.bind(this);
    this.LoginID = this.LoginID.bind(this);
    this.login = this.login.bind(this);
  }

  LoginID(event) {
    this.setState({ LoginID: event.target.value });
  }

  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login(event) {
    debugger;

    fetch(variables.API_URL + "Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        LoginID: this.state.LoginID,
        Password: this.state.Password,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (result.Status == "Invalid") {
          alert("Invalid User");
        } else {
          Auth.login();
          this.props.history.push("/admin");
        }
      });
  }

  render() {
    return (
      <div className="login app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <CardGroup>
                <Card className="p-2">
                  <CardBody>
                    <Form>
                      <h2>Log In Required</h2>
                      <InputGroup className="mb-3">
                        <Input
                          type="text"
                          onChange={this.LoginID}
                          placeholder="Enter LoginID"
                        />
                      </InputGroup>

                      <InputGroup className="mb-4">
                        <Input
                          type="password"
                          onChange={this.Password}
                          placeholder="Enter Password"
                        />
                      </InputGroup>

                      <Button onClick={this.login} color="success" block>
                        Login
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
