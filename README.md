# React State Management Lab

![React State Management Lab](./assets/hero.png)

#### About

Reactville is on high alert. As bizarre rumors turn into chilling reality, the city council has called for immediate action to safeguard the town and its inhabitants against a looming zombie apocalypse.

Your mission is to strategically assemble a survival team, handpicking members from the city's diverse population, each bringing their unique skills and quirks. As the city's newly appointed Survival Strategist, you will manage your team's skills, resources, and stats.

![Solution UI](./assets/solution-ui.png)

In this lab, you'll utilize React's state management to add and remove team members, track essential resources, and monitor your team's overall readiness. This isn't just about surviving, it's about making dynamic UI updates and understanding the inner workings of React state through a fun and engaging simulation.

#### Prerequisites

- React State Management

#### Setup

Open your terminal application and navigate to your `~/code/ga/labs` directory:

```bash
cd ~/code/ga/labs
```

Clone the `react-state-management-lab` repo and `cd` into it:

```bash
git clone <repo-url> react-state-management-lab
cd react-state-management-lab
```

Create a new Vite project inside the cloned repo:

```bash
npm create vite@latest . -- --template react
```

If prompted about the directory not being empty, choose to keep your existing files.

Install the necessary dependencies:

```bash
npm i
```

If you run into eslint permission errors during install, try running the install with `sudo npm install` instead.

Open the project's folder in your code editor:

```bash
code .
```

Open the `App.jsx` file in the `src` directory and replace the contents of it with the following:

```jsx
// src/App.jsx

const App = () => {
  return <h1>Hello world!</h1>;
};

export default App;
```

Clear out the contents of the `App.css` file in the `src` directory. Add the following CSS to the `App.css` file:

```css
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  list-style: none;
  margin: 10px;
}
```

To start the development server and view our app in the browser, run:

```bash
npm run dev
```

You should see that Vite is available on port number 5173:

```plaintext
localhost:5173
```

#### The Challenge

Welcome to the React State Management Lab. In this lab, we'll be interacting with state to get a better understanding of how to manage it in a React application. Your task is to assemble a team of characters to survive a zombie apocalypse. You will:

- Add characters to your team from a given list.
- Remove characters from your team.
- Display the team's total cost, strength, and agility.
- Add a unit test that makes sense. Your choice.

Let's dive in.

Here's the data you'll be working with:

```js
[
  {
    name: "Survivor",
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://via.placeholder.com/150/92c952",
  },
  {
    name: "Scavenger",
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://via.placeholder.com/150/771796",
  },
  {
    name: "Shadow",
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://via.placeholder.com/150/24f355",
  },
  {
    name: "Tracker",
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/d32776",
  },
  {
    name: "Sharpshooter",
    price: 20,
    strength: 6,
    agility: 8,
    img: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    name: "Medic",
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://via.placeholder.com/150/66b7d2",
  },
  {
    name: "Engineer",
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://via.placeholder.com/150/56acb2",
  },
  {
    name: "Brawler",
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://via.placeholder.com/150/8985dc",
  },
  {
    name: "Infiltrator",
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://via.placeholder.com/150/392537",
  },
  {
    name: "Leader",
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/602b9e",
  },
];
```

#### Hints

You should never change state directly. If you need to make a copy of an array, you can use the syntax `const copyArray = [...sourceArray]`.

You can use the `reduce` method to get the total strength and agility of the team.

You can use `https://jsonplaceholder.typicode.com/photos` to get images for the characters. These are just random photos and don't have anything to do with the characters.