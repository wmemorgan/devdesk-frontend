import React from "react";
import axios from "axios";
import {Container, FormHeader, Form, InputWrapper, ButtonContainer} from "../../styled-components/TicketForm_Styles";
const api = `https://api-devdesk.herokuapp.com/api`;

class TicketForm extends React.Component {
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
    categories: []
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
        opened_by: this.props.activeUser.id,
        comment: this.state.ticket.snippet
      })
      .then(res => {
        this.props.history.push(`/tickets`)
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
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
              {this.state.categories.map((category, i) => (
                <option key={i} value={category.id}>{category.name}</option>
              ))}
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
