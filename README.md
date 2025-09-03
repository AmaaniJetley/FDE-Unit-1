# ![React State Management Lab](./assets/hero.png)

## About

Reactville is on high alert! As bizarre rumors turn into chilling reality, the city council has called for immediate action to safeguard the town and its inhabitants - against a looming zombie apocalypse!

Your mission is to strategically assemble a survival team, handpicking members from the city’s diverse population, each bringing their unique skills and quirks. As the city's newly appointed Survival Strategist, you will manage your team's skills, resources, and stats.

![Solution UI](./assets/solution-ui.png)

In this lab, you'll utilize React’s state management to add and remove team members, track essential resources, and monitor your team's overall readiness. This isn't just about surviving; it's about making dynamic UI updates and understanding the inner workings of React state through a fun and engaging simulation.

## Prerequisites

- React State Management

## Setup

Open your Terminal application and navigate to your `~/code/ga/labs` directory:

```bash
cd ~/code/ga/labs
```

Create a new Vite project for your React app:

```bash
npm create vite@latest
```

You'll be prompted to choose a project name. Let's name it `react-state-management-lab`.

- Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.

- Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```bash
cd react-state-management-lab
npm i
```

Open the project's folder in your code editor:

```bash
code .
```

The first addition prevents warnings if you're not declaring types for your props (which we're not), and the second prevents warnings if you're using contractions within JSX.

### Clear `App.jsx`

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

### Running the development server

To start the development server and view our app in the browser, we'll use the following command:

```bash
npm run dev
```

You should see that `Vite` is available on port number 5173:

```plaintext
localhost:5173
```

### GitHub setup

To add this project to GitHub, initialize a Git repository:

```bash
git init
git add .
git commit -m "init commit"
```

Make a new repository on [GitHub](https://github.com/) named react-state-management-lab.

Link your local project to your remote GitHub repo:

```bash
git remote add origin https://github.com/<github-username>/react-state-management-lab.git
git push origin main
```

> 🚨 Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the `<` and `>`) in the URL above.

Welcome to the React State Management Lab! In this lab, we'll be interacting with state to get a better understanding of how to manage it in a React application. Your task is to assemble a team of characters to survive a zombie apocalypse. You will:

- Add characters to your team from a given list.
- Remove characters from your team.
- Display the team's total cost, strength, and agility.
- Add a unit test that makes sense. Your choice

Let’s dive in!

Data

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

## Hints

- You should never change state directly. If you need to make a copy of an array you can use the syntax `const copyArray = [...sourceArray]`.
- You can use the `reduce` method to get the total strength and agility of the team.
- You can use `https://jsonplaceholder.typicode.com/photos` to get images for the characters. These are just random photos and don't have anything to do with the characters.
