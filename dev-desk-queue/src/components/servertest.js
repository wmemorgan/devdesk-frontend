import axios from "axios";

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

function editTicket(id, ticket) {
  axios
    .put(`${api}/tickets/${id}`, ticket)
    .then(res => {
      console.log("result", res);
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

function getAllComments() {
  axios
    .get(`${api}/tickets/1/comments`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function getComment(id) {
  axios
    .get(`${api}/comments/${id}`)
    .then(res => {
      console.log("result", res.data);
    })
    .catch(err => {
      console.log("error", err);
    });
}

function addComment(comment) {
  axios
    .post(`${api}/comments`, comment)
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

function deleteComment(id) {
  axios
    .delete(`${api}/comments/${id}`)
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

function register(user) {
  axios
    .post(`https://api-devdesk.herokuapp.com/api/register`, user)
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
