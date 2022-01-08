import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { useEffect, useRef, useState } from 'react';
import { Form, Button, Container, Table } from 'react-bootstrap';
import './styles.css';

export const NLPForm = () => {
  const passageRef = useRef(null);
  const questionRef = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [model, setModel] = useState();
  const [formSubmitting, setFormSubmitting] = useState(false);

  const loadModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log('Model loaded');
  }

  useEffect(() => {
    loadModel();
  }, []);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitting(true);

    if (model) {
      const passage = passageRef.current.value;
      const question = questionRef.current.value;

      const modelsAnswers = await model.findAnswers(question, passage);
      setAnswers(modelsAnswers);
      if (modelsAnswers?.length > 0) {
        toast.success('Prediction(s) Loaded!');
      } else {
        toast.error('Model got 0 Predictions');
      }
      console.log(modelsAnswers);
    } else {
      toast.error('Error loading model');
    }
    setFormSubmitting(false);
  }

  return (
    <div className="form-wrapper py-5">
      <Container>
        {model ?
          <>
            <Form onSubmit={onFormSubmit}>
              <Form.Group className="mb-5" controlId="formPassage">
                <Form.Label>Passage</Form.Label>
                <Form.Control type="textarea" as="textarea" placeholder="Enter Passage" name="passage" ref={passageRef} required className="passage-text" />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formQuestion">
                <Form.Label>Question</Form.Label>
                <Form.Control type="textarea" as="textarea" placeholder="Enter Question" name="question" ref={questionRef} required className="question-text" maxLength={64} />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={formSubmitting}>
                Submit
              </Button>
            </Form>

            {answers?.length > 0 ?
              <div className="answers mt-5">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Answer</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {answers.map((ans, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{ans.text}</td>
                        <td>{ans.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              :
              ''
            }
          </>
          :
          <Loader type="TailSpin" color="#166ff8" />
        }
      </Container>
    </div>
  )
}
