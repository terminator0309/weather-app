import React, { Component } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { actions, Control, Form, Errors } from "react-redux-form";
import { postFeedback } from "../redux/ActionCreator";

const required = (val) => val && val.length;
const maxlength = (len) => (val) => !val || val.length <= len;
const minlength = (len) => (val) => val && val.length >= len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const mapDispatchToProps = (dispatch) => {
  return {
    postFeedback: (firstname, lastname, email, message) => {
      dispatch(postFeedback(firstname, lastname, email, message));
    },
    resetFeedback: () => dispatch(actions.reset("feedback")),
  };
};

class Feedback extends Component {
  handleSubmit = (values) => {
    this.props.postFeedback(
      values.firstname,
      values.lastname,
      values.email,
      values.message
    );
    this.props.resetFeedback();
    this.props.closeModal();
  };
  render() {
    return (
      <Modal
        centered
        show={this.props.isModalOpen}
        onHide={this.props.closeModal}
      >
        <Modal.Header closeButton>
          <h2>Feedback</h2>
        </Modal.Header>
        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
          <Modal.Body>
            <Row className="form-group">
              <Col md={2}>
                <label htmlFor="firstname">Firstname</label>
              </Col>
              <Col md={10}>
                <Control.text
                  model=".firstname"
                  id="firstname"
                  name="firstname"
                  className="form-control"
                  validators={{
                    required,
                    maxlength: maxlength(15),
                    minlength: minlength(3),
                  }}
                />
                <Errors
                  className="text-danger"
                  show="touched"
                  model=".firstname"
                  messages={{
                    required: "This field is required ",
                    maxlength: "Max length allowed is 15",
                    minlength: "Min length allowed is 3",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={2}>
                <label htmlFor="lastname">Lastname</label>
              </Col>
              <Col md={10}>
                <Control.text
                  model=".lastname"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  validators={{
                    required,
                    maxlength: maxlength(15),
                    minlength: minlength(3),
                  }}
                />
                <Errors
                  className="text-danger"
                  show="touched"
                  model=".lastname"
                  messages={{
                    required: "This field is required ",
                    maxlength: "Max length allowed is 15",
                    minlength: "Min length allowed is 3",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={2}>
                <label htmlFor="email">Email</label>
              </Col>
              <Col md={10}>
                <Control.text
                  model=".email"
                  id="email"
                  className="form-control"
                  name="email"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "This field is required ",
                    validEmail: "Not a valid email ID",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={2}>
                <label htmlFor="message">Message</label>
              </Col>
              <Col md={10}>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  row="12"
                  className="form-control"
                />
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="button-gradient">
              Send Feedback
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default connect(null, mapDispatchToProps)(Feedback);
