import './App.css';
import React from 'react';

const App = () => {
  
    const handleChange = event => {
      setSearchTerm(event.target.value);
      };      
    const [searchTerm, setSearchTerm] = React.useState('');
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <hr />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};

// const List = () => {
//   return list.map(item => {
//     return (
//       <div key={item.objectID}>
//         <span>
//         <a href={item.url}>{item.title}</a>
//         </span>
//         <span>{item.author}</span>
//         <span>{item.num_comments}</span>
//         <span>{item.points}</span>
//       </div>
//       );
//     });
// };

export default App;
