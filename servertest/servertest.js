const api = `https://api-devdesk.herokuapp.com/api`;

/*********************************************************************************
 *                                    TICKET                                      *
 **********************************************************************************/

function getAllTickets() {
  axios
    .get(`${api}/tickets`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function getTicket(id) {
  axios
    .get(`${api}/tickets/${id}`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("error", err);
    });
}

const ticket = {
  title: "test title",
  description: "test description",
  category_id: "2",
  opened_by: "4",
  comment: "test"
}

function addTicket(ticket) {
  axios
    .post(`${api}/tickets`, ticket)
    .then(res => {
      console.log("result", res);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function editTicket() {
  axios
    .put('https://api-devdesk.herokuapp.com/api/tickets/3', {
      title: "Help! Can't center text box",
      description: "I need help trying to vertically and horizontally center a text box",
      category_id: 2,
      opened_by: 2,
      created_at: "2019-07-14T06:01:03.034Z",
      assigned_to: 12, // new value for assigned_to
      updated_at: null,
      closed: false,
      completed_at: null
    })
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function deleteTicket(id) {
  axios
    .delete(`${api}/tickets/${id}`)
    .then(res => {
      console.log("result", res);
    })
    .catch(err => {
      console.log("error", err);
    });
}

/*********************************************************************************
 *                                     COMMENTS                                   *
 **********************************************************************************/

function getAllComments(id) {
  axios
    .get(`${api}/tickets/${id}/comments`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("error", err);
    });
}

// function getAllComments() {
//   axios
//     .get(`${api}/tickets/${id}/comments`)
//     .then(res => {
//       console.log("result", res.data);
//     })
//     .catch(err => {
//       console.log("error", err);
//     });
// }

function getComment(id) {
  axios
    .get(`${api}/tickets/2/comments/${id}`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function addComment(ticket_id, comment) {
  axios
    .post(`${api}/tickets/${ticket_id}/comments`, {
      ticket_id,
      comment,
      opened_by: 4
    })
    .then(res => {
      console.log("result", res);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function editComment(id, comment) {
  axios
    .put(`${api}/comments/${id}`, comment)
    .then(res => {
      console.log("result", res);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function deleteComment(ticket_id, id) {
  axios
    .delete(`${api}/tickets/${ticket_id}/comments/${id}`)
    .then(res => {
      console.log("result", res);
    })
    .catch(err => {
      console.log("error", err);
    });
}

/*********************************************************************************
 *                                     CATEGORIES                                 *
 **********************************************************************************/

function getAllCategories() {
  axios
    .get(`${api}/categories`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function getCateogry(id) {
  axios
    .get(`${api}/categories/${id}`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function addCategory(category) {
  axios
    .post(`${api}/categories`, category)
    .then(res => {
      console.log("result", res);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function editCategory(id, category) {
  axios
    .put(`${api}/categories/${id}`, category)
    .then(res => {
      console.log("result", res);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function deleteCategory(id) {
  axios
    .delete(`${api}/categories/${id}`)
    .then(res => {
      console.log("result", res);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function register() {
  axios
    .post(`https://api-devdesk.herokuapp.com/api/register`, {
      first_name: "David",
      last_name: "Vazquez",
      email: "dmvaz.li@gmail.com",
      password: "123456"
    })
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("result", err);
    });
}

function login(user) {
  axios
    .post(`https://api-devdesk.herokuapp.com/api/login`, user)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("result", err);
    });
}

/**********************************************************************************
 *                                     USER INFO                                   *
 ***********************************************************************************/
function getAllUsers() {
  axios
    .get(`${api}/users`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log(err);
    });
}

function getUser(id) {
  axios
    .get(`${api}/users/${id}`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log(err);
    });
}

/*

axios
      .post(`https://api-devdesk.herokuapp.com/api/tickets`, {
        title: this.state.ticket.title,
        description: this.state.ticket.description,
        category_id: this.state.ticket.category,
        opened_by: this.props.activeUser.id,
        comment: this.state.ticket.snippet
      })
      // .then(({data}) => {
      //   return repo
      //     ? post(`${api}/tickets/${ticket.id}/comments`, {
      //       comment: repo,
      //       ticket_id: data.id,
      //       opened_by: 4
      //     })
      //     : false
      // })
      .then(res => {
        this.props.history.push(`/tickets`)
      })
      .catch(err => {
        console.log(err);
      });

*/
