import React, { Component } from "react";
import styled from "styled-components";
import { tickets } from "../data";
import { loggedInUser } from "../data";
import axios from "axios";
import moment from "moment";

const api = `https://api-devdesk.herokuapp.com/api`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1000px;
  height: fit-content;

  margin-top: 50px;

  border: 1px solid black;

  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.2);
`;

const FormHeader = styled.div`
  padding: 10px 15px;

  border-bottom: 1px solid black;

  color: white;
  background-color: #394141;

  h1 {
    font-size: 1.6rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 10px 15px;

  width: 100%;
  height: fit-content;

  background: linear-gradient(180deg, #bdc9ca 0%, #9eaaab 100%);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 10px 0;

  label {
    font-size: 1.6rem;
    font-weight: bold;
  }
  input,
  textarea,
  select {
    width: 100%;
    margin-top: 5px;
  }

  input,
  textarea {
    width: 100%;

    border: none;
    border-bottom: 1px solid black;

    padding: 3px 0;
    font-size: 1.4rem;

    background-color: transparent;

    outline: none;
  }

  textarea.code-snippet {
    font-family: "Courier";
    font-family: 1.4rem;
  }

  textarea {
    height: 100px;
    resize: vertical;
  }

  select {
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
    outline: none;
    cursor: pointer;

    border-bottom: 1px solid black;
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    border-radius: 0px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;

  button {
    width: 125px;
    height: 25px;

    border: none;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, 0.5);

    color: white;
    font-size: 1.4rem;
    background-color: #658151;

    cursor: pointer;
  }
`;

class TicketForm extends Component {
  state = {
    ticket: {
      title: "",
      description: "",
      snippet: "",
      repo: "",
      category: ""
    },
    formError: {
      title: "",
      description: "",
      categoryError: ""
    },
    categories: [],
    activeUserID: this.props.activeUserID
  };

  componentDidMount() {
    axios.get(`${api}/categories`)
    .then(res => {
      this.setState({
        categories: res.data
      })
    })
  }

  handleChange = e => {
    this.setState({
      ticket: {
        ...this.state.ticket,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // axios call to create new ticket
    axios
      .post(`https://api-devdesk.herokuapp.com/api/tickets`, {
        title: this.state.ticket.title,
        description: this.state.ticket.description,
        category_id: this.state.ticket.category,
        opened_by: this.state.activeUserID,
        comment: this.state.ticket.snippet
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log('DO WE HAVE AN ACTIVE USER ID',this.props.activeUserID)
    return (
      <Container>
        <FormHeader>
          <h1>Open New Ticket</h1>
        </FormHeader>
        <Form onSubmit={this.handleSubmit}>
          <InputWrapper>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter a new title..."
              onChange={this.handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Describe your problem..."
              onChange={this.handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <label>Code Snippet</label>
            <textarea
              name="snippet"
              className="code-snippet"
              placeholder="Paste your code here.."
              onChange={this.handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <label>Link to Repo</label>
            <input
              type="text"
              name="repo"
              placeholder="https:/github.com/user-name..."
              onChange={this.handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <label>Category</label>
            <select name="category" onChange={this.handleChange}>
              <option style={{ color: "grey" }} value="">
                Choose a Category
              </option>
              {this.state.categories.map(category => (
                <option value={category.id}>{category.name}</option>
              ))}
              {/* <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Javascript">Javascript</option>
              <option value="LESS">LESS</option>
              <option value="User Interface">User Interface</option>
              <option value="Responsive Design">Responsive Design</option>
              <option value="Pre-Processing">Preprocessing</option>
              <option value="React">React</option>
              <option value="Styled Components">Styled-Components</option>
              <option value="Redux">Redux</option> */}
            </select>
          </InputWrapper>
          <ButtonContainer>
            <button onSubmit={this.handleSubmit}>Submit Ticket</button>
          </ButtonContainer>
        </Form>
      </Container>
    );
  }
}

export default TicketForm;
