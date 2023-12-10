import { useState } from "react";
import ChildComponent from "./ChildComponent";
import "./index.css";

const App = () => {
  const [message, setMessage] = useState("");

  const handleClick = (userInput) => {
    setMessage(userInput);
  };

  return (
    <main>
      <h1>Data Passing with User Input</h1>
      <ChildComponent handleClick={handleClick} />
      <p>{message}</p>
    </main>
  );
};

export default App;

// 6. import Counter from './Counter';
// import './index.css';

// const App = () => {
//   return (
//     <main>
//       <h1>React State and useState Exercise</h1>
//       <Counter />
//     </main>
//   );
// };

// export default App;

// 5. Your goal is to change the title, author, genre and reading status when the button in the App component is pressed
// You DON'T need to fetch the values entered into the <input /> fields
// import "./index.css";

// export const book = {
//   title: "",
//   author: "",
//   genre: "",
//   isRead: true,
// };

// // Please note: The Add book does not actually work!
// // This exercise is just about practicing event handling
// // Ignore the inputs; you'll learn to handle user input later.

// function App() {
//   function handleClick() {
//     book.title = "title";
//     book.author = "author";
//     book.genre = "genre";
//     book.isRead = true;
//   }

//   return (
//     <div id="app">
//       <h1>Add book</h1>
//       <div>
//         <label>Title</label>
//         <input type="text" />
//       </div>

//       <div>
//         <label>Author</label>
//         <input type="text" />
//       </div>

//       <div>
//         <label>Genre</label>
//         <select name="genre">
//           <option value="mystery">Mystery</option>
//           <option value="science_fiction">Science Fiction</option>
//           <option value="history_fiction">Historical Fiction</option>
//         </select>
//       </div>

//       <button onClick={handleClick}>Add book</button>
//     </div>
//   );
// }

// export default App;

// 4. import React from "react";
// import BookCard from "./BookCard";
// import "./index.css";

// const App = () => {
//   return (
//     <div className="books">
//       <BookCard title="The Art of Programming">
//         An insightful journey through the world of programming, exploring both
//         theory and practical applications.
//         <button>Read More</button>
//       </BookCard>
//     </div>
//   );
// };

// export default App;

// 3. import React from "react";
// import BookInfo from "./BookInfo";
// import "./index.css";

// const App = () => {
//   return (
//     <div className="books">
//       <BookInfo title="The Little Prince" author="Antoine de Saint-Exupéry" />
//       <BookInfo title="Another Book Title" author="Another Author" />
//     </div>
//   );
// };

// export default App;

// 2. import "./index.css";

// export const userData = {
//   firstName: "Maria", // replace with your first name
//   lastName: "Kuznetsova", // replace with your last name
//   title: "Teacher", // replace with your title
// };

// // Edit the User component code to output the userData data
// export function User() {
//   return (
//     <div className="card">
//       <h2>
//         {userData.firstName} {userData.lastName}
//       </h2>
//       <p>{userData.title}</p>
//     </div>
//   );
// }

// // DON'T edit the App component code
// function App() {
//   return (
//     <div id="app">
//       <h1>Time to Practice</h1>
//       <User />
//     </div>
//   );
// }

// export default App;

// 1. import ParentComponent from "./ParentComponent.jsx";
// import "./index.css";

// const App = () => {
//   return (
//     <main>
//       <h1>My first React app</h1>
//       <ParentComponent />
//     </main>
//   );
// };

// export default App;
