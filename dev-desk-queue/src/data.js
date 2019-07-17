export const users = [
  {
    id: 0,
    firstName: "Dave",
    lastName: "Vazquez",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  },
  {
    id: 1,
    firstName: "Doug",
    lastName: "Dupree",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  },
  {
    id: 2,
    firstName: "George",
    lastName: "Clinton",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  },
  {
    id: 3,
    firstName: "Wendy",
    lastName: "Adames",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  },
  {
    id: 4,
    firstName: "Lily",
    lastName: "Choy",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  },
  {
    id: 5,
    firstName: "Adam",
    lastName: "Lopez",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  },
  {
    id: 6,
    firstName: "Rebecca",
    lastName: "Young",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  },
  {
    id: 7,
    firstName: "Mike",
    lastName: "Limoncelli",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  },
  {
    id: 8,
    firstName: "Kohji",
    lastName: "Cuomin",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  },
  {
    id: 9,
    firstName: "Allison",
    lastName: "Weinberg",
    password: "12345",
    email: "dmvaz.li@gmail.com",
    role_id: "student"
  }
];

export const tickets = [
  {
    id: 0,
    title: "Problem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    comments: [
      `let number = 12;

      const multiplyNumBy = num1 => {
        return function(num2) {
          return num1 * num1;
        };
      };
      
      const mulitplyNumBy5 = multiplyNumBy(5);
      
      const result = mulitplyNumBy5(10);
      
      console.log(result);`
    ],
    category: "Javascript",
    openedBy: {
      id: 1,
      firstName: "Doug",
      lastName: "Dupree",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/3/2019",
    assignedTo: {
      id: 2,
      firstName: "George",
      lastName: "Clinton",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    updatedAt: "",
    updatedBy: 0,
    closed: false,
    completedAt: ""
  },
  {
    id: 1,
    title: "Problem with a really long title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione atque quam sint, modi magnam commodi illum quisquam cupiditate quia qui dolor aliquam distinctio mollitia explicabo repellat? Porro tempore aspernatur sint facilis, voluptatum obcaecati corporis dolore officiis nostrum, exercitationem voluptatibus nulla perspiciatis incidunt molestiae minima natus praesentium reiciendis quia quasi.",
    comments: [
      `<label for="pet-select">Choose a pet:</label>

        <select id="pet-select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>`
    ],
    category: "HTML",
    openedBy: {
      id: 0,
      firstName: "Dave",
      lastName: "Vazquez",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/12/2019",
    assignedTo: null,
    updatedAt: "7",
    updatedBy: 0,
    closed: false,
    completedAt: ""
  },

  {
    id: 2,
    title: "Problem problem",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod amet autem harum dolorem cum natus quia ducimus expedita odio? Rerum, error sunt. Aspernatur saepe vitae hic iure cum iusto non nam, repellendus a sed nobis? Veritatis cumque, quis repudiandae rem commodi inventore, quidem vitae sint dolorum voluptate aspernatur voluptates molestiae sunt rerum itaque corrupti repellendus ab dolore? Natus nulla veritatis consectetur, autem, a impedit quia id fugit eum odit excepturi, consequatur vel? Placeat, mollitia assumenda. Illo incidunt quae optio nemo?",
    comments: [
      `p::first-line {
        color: blue;
        text-transform: uppercase;}`
    ],
    category: "Javascript",
    openedBy: {
      id: 1,
      firstName: "Doug",
      lastName: "Dupree",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/11/2019",
    assignedTo: null,
    updatedAt: "",
    updatedBy: 0,
    closed: false,
    completedAt: ""
  },

  {
    id: 3,
    title: "Problem problem problem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae beatae libero quia modi nobis quaerat molestias consequuntur iste laborum pariatur consectetur dicta sequi, incidunt, sit atque quas ipsum repellat error explicabo nemo dolorum porro. A et officia aperiam ipsa eveniet alias, laudantium animi rerum itaque maiores vel assumenda obcaecati!",
    category: "Javascript",
    comments: [
      `const person = {
        isHuman: false,
        printIntroduction: function () {
          console.log(\`My name is \${this.name}. Am I human? \${this.isHuman}\`);
        }
      };
      
      const me = Object.create(person);
      
      me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
      me.isHuman = true; // inherited properties can be overwritten
      
      me.printIntroduction();
      // expected output: "My name is Matthew. Am I human? true"`
    ],
    openedBy: {
      id: 2,
      firstName: "George",
      lastName: "Clinton",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/8/2019",
    assignedTo: null,
    updatedAt: "",
    updatedBy: 0,
    closed: true,
    completedAt: ""
  },
  {
    id: 4,
    title: "Higher Order Function isn't returning the expected value.",
    description: `I'm not sure what I'm doing wrong, but the multiplyNumBy5 keeps returning the incorrect result. It's returning 25 when it should be returning 50.`,
    category: "Javascript",
    comments: [
      `let number = 12;

const multiplyNumBy = num1 => {
  return function(num2) {
    return num1 * num1;
  };
};

const mulitplyNumBy5 = multiplyNumBy(5);

const result = mulitplyNumBy5(10);

console.log(result); // returns 25 instead of 50`
    ],
    openedBy: {
      id: 5,
      firstName: "Adam",
      lastName: "Lopez",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/9/2019",
    assignedTo: {
      id: 4,
      firstName: "Lily",
      lastName: "Choy",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    updatedAt: "",
    updatedBy: 0,
    closed: false,
    completedAt: ""
  },
  {
    id: 5,
    title: "problem problem problem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, harum!",
    comments: [
      `class Welcome extends React.Component {
        render() {
          return <h1>Hello, {this.props.name}</h1>;
        }
      }`
    ],
    category: "React",
    openedBy: {
      id: 9,
      firstName: "Allison",
      lastName: "Weinberg",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/4/2019",
    assignedTo: null,
    updatedAt: "",
    updatedBy: 0,
    closed: true,
    completedAt: ""
  },
  {
    id: 6,
    title: "problem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, harum!",
    comments: [
      `let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}`
    ],
    category: "Redux",
    openedBy: {
      id: 6,
      firstName: "Rebecca",
      lastName: "Young",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/1/2019",
    assignedTo: {
      id: 4,
      firstName: "Lily",
      lastName: "Chung",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    updatedAt: "",
    updatedBy: 0,
    closed: false,
    completedAt: ""
  },
  {
    id: 7,
    title: "problem problem problem",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia deleniti necessitatibus quis dolorem voluptatum, vero dolor esse vel, tenetur facere minus, quia sapiente sequi id laudantium velit obcaecati! Error pariatur accusamus, est quisquam eveniet optio ipsa id nisi corrupti fugit. Reprehenderit debitis quis dolorem fuga dolorum quidem, delectus impedit earum non ex eius error, excepturi aspernatur? Tempora repellat impedit pariatur doloribus modi, blanditiis id, reiciendis rem facilis, hic fugit ipsum? Molestiae reprehenderit autem illum nulla. Necessitatibus tempora recusandae doloremque saepe.",
    comments: [
      `const Button = styled.a\`
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;

	\${props => props.primary && css\`
		background: white;
		color: palevioletred;
\`}`
    ],
    category: "Styled-Components",
    openedBy: {
      id: 8,
      firstName: "Kohji",
      lastName: "Cuomin",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/2/2019",
    assignedTo: null,
    updatedAt: "",
    updatedBy: 0,
    closed: false,
    completedAt: ""
  },
  {
    id: 8,
    title: "problem problem",
    description: "",
    comments: [],
    category: "React",
    openedBy: {
      id: 8,
      firstName: "Kohji",
      lastName: "Cuomin",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/3/2019",
    assignedTo: {
      id: 6,
      firstName: "Rebecca",
      lastName: "Young",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    updatedAt: "",
    updatedBy: 0,
    closed: false,
    completedAt: ""
  },
  {
    id: 9,
    title: "problem problem problem ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit vitae beatae libero quia modi nobis quaerat molestias consequuntur iste laborum pariatur consectetur dicta sequi, incidunt, sit atque quas ipsum repellat error explicabo nemo dolorum porro. A et officia aperiam ipsa eveniet alias, laudantium animi rerum itaque maiores vel assumenda obcaecati!",
    comments: [
      `fruits.forEach(function(item, index, array) {
        console.log(item, index);
      });`
    ],
    category: "Javascript",
    openedBy: {
      id: 2,
      firstName: "George",
      lastName: "Clinton",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/12/2019",
    assignedTo: {
      id: 8,
      firstName: "Kohji",
      lastName: "Cuomin",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    updatedAt: "",
    updatedBy: 0,
    closed: false,
    completedAt: ""
  },
  {
    id: 10,
    title: "Problem",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione atque quam sint, modi magnam commodi illum quisquam cupiditate quia qui dolor aliquam distinctio mollitia explicabo repellat? Porro tempore aspernatur sint facilis, voluptatum obcaecati corporis dolore officiis nostrum, exercitationem voluptatibus nulla perspiciatis incidunt molestiae minima natus praesentium reiciendis quia quasi.",
    comments: [
      `<section>
<h1>Introduction</h1>
<p>People have been catching fish for food since before recorded history…</p>
</section>

<section>
<h1>Equipment</h1>
<p>The first thing you’ll need is a fishing rod or pole that you find comfortable and is strong enough for the kind of fish you’re expecting to land…</p>
</section>`
    ],
    category: "HTML",
    openedBy: {
      id: 2,
      firstName: "George",
      lastName: "Clinton",
      password: "12345",
      email: "dmvaz.li@gmail.com",
      role_id: "student"
    },
    createdAt: "7/12/2019",
    assignedTo: null,
    updatedAt: "",
    updatedBy: 0,
    closed: false,
    completedAt: ""
  }
];

export const loggedInUser = users[0];
