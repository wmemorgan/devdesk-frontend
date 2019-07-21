import React from "react";
import axios from "axios";
import {
  Container,
  FormHeader,
  Form,
  InputWrapper,
  ButtonContainer
} from "../../styled-components/TicketForm_Styles";

const api = `https://api-devdesk.herokuapp.com/api`;

class TicketForm extends React.Component {
  state = {
    ticket: {
      title: "",
      description: "",
      snippet: "",
      language: "monospace",
      repo: "",
      category: ""
    },
    languages: [
      "monospace",
      "HTML",
      "CSS",
      "LESS",
      "JavaScript",
      "Java",
      "Python"
    ],
    formError: {
      title: "",
      description: "",
      snippet: "",
      repo: "",
      category: ""
    },
    categories: []
  };

  componentDidMount() {
    axios.get(`${api}/categories`).then(res => {
      this.setState({
        categories: res.data
      });
    });
  }

  handleChange = e => {
    this.setState({
      ticket: {
        ...this.state.ticket,
        [e.target.name]: e.target.value
      }
    });

    if (e.target.name === "language") {
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.formValidated()) {
      let ticketID;
      const { ticket } = this.state;

      axios
        .post(`https://api-devdesk.herokuapp.com/api/tickets`, {
          title: ticket.title,
          description: ticket.description,
          category_id: ticket.category,
          opened_by: this.props.activeUser.id,
          comment: `${ticket.language}~!~${ticket.snippet}`
        })
        .then(({ data }) => {
          ticketID = data.id;

          return axios.post(`${api}/tickets/${ticketID}/comments`, {
            comment: `link~!~${ticket.repo}`,
            ticket_id: ticketID,
            opened_by: this.props.activeUser.id
          });
        })
        .then(res => {
          console.log("repo comment", res);
          this.props.history.push(`/tickets/${ticketID}`);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  formValidated() {
    let isValid = true;
    const { ticket } = this.state;
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

    const newFormError = {
      title: "",
      description: "",
      snippet: "",
      repo: "",
      category: ""
    };

    if (!ticket.title) {
      newFormError.title = "Title is required field.";
      isValid = false;
    }
    if (!ticket.description) {
      newFormError.description = "Description is a required field";
      isValid = false;
    }
    if (!ticket.snippet) {
      newFormError.snippet = "Code Snippet is a required field";
      isValid = false;
    }
    if (ticket.repo && !urlRegex.test(ticket.repo)) {
      newFormError.repo = "A valid URL must be entered.";
      isValid = false;
    }
    if (!ticket.category) {
      newFormError.category = "Category is a required field";
      isValid = false;
    }

    if (!isValid) {
      this.setState({
        ...this.state,
        formError: newFormError
      });
    }

    return isValid;
  }

  render() {
    const { ticket, formError } = this.state;
    return (
      <Container>
        <FormHeader>
          <h1>Open New Ticket</h1>
        </FormHeader>
        <Form onSubmit={this.handleSubmit}>
          <InputWrapper>
            <label>
              Title <span>*</span>
            </label>
            <input
              type="text"
              name="title"
              maxLength="60"
              placeholder="Enter a new title..."
              value={ticket.title}
              onChange={this.handleChange}
            />
            {formError.title && <span>{formError.title}</span>}
          </InputWrapper>
          <InputWrapper>
            <label>
              Description <span>*</span>
            </label>
            <textarea
              name="description"
              maxLength="1000"
              placeholder="Describe your problem..."
              value={ticket.description}
              onChange={this.handleChange}
            />
            {formError.description && <span>{formError.description}</span>}
          </InputWrapper>
          <InputWrapper>
            <label>
              Code Snippet <span>*</span>
            </label>
            <textarea
              name="snippet"
              className="code-snippet"
              placeholder="Paste your code here.."
              value={ticket.snippet}
              onChange={this.handleChange}
            />
            {formError.snippet && <span>{formError.snippet}</span>}
          </InputWrapper>
          <InputWrapper marginNone>
            <div className="language-select">
              <label>Format Snippet: </label>
              <select name="language" onChange={this.handleChange}>
                {this.state.languages.map((language, i) => (
                  <option key={i} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
          </InputWrapper>
          <InputWrapper>
            <label>Link to Repo</label>
            <input
              type="text"
              name="repo"
              placeholder="https:/github.com/user-name..."
              value={ticket.repo}
              onChange={this.handleChange}
            />
            {formError.repo && <span>{formError.repo}</span>}
          </InputWrapper>
          <InputWrapper>
            <label>
              Category <span>*</span>
            </label>
            <select name="category" onChange={this.handleChange}>
              <option style={{ color: "grey" }} value="">
                Choose a Category
              </option>
              {this.state.categories.map((category, i) => (
                <option key={i} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {formError.category && <span>{formError.category}</span>}
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
