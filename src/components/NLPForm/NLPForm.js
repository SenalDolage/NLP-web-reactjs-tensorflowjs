import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { useEffect, useRef, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './styles.css';

export const NLPForm = () => {
  const passageRef = useRef(null);
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState();
  const [model, setModel] = useState();

  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log('Model loaded');
  }

  useEffect(() => {
    loadModel();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('form submit', passageRef.current.value);
    console.log('form submit', questionRef.current.value);
  }

  return (
    <div className="form-wrapper py-5">
      <Container>
        <Form onSubmit={onFormSubmit}>

          <Form.Group className="mb-5" controlId="formPassage">
            <Form.Label>Passage</Form.Label>
            <Form.Control type="textarea" as="textarea" placeholder="Enter Passage" name="passage" ref={passageRef} required className="passage-text" />
          </Form.Group>

          <Form.Group className="mb-5" controlId="formQuestion">
            <Form.Label>Question</Form.Label>
            <Form.Control type="textarea" as="textarea" placeholder="Enter Question" name="question" ref={questionRef} required className="question-text" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}