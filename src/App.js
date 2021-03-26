import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState("Phil");

  return (
    <div>
        <h4 className="bg-primary text-white text-center p-2">
        { userName }'s To Do List
        </h4>
      <button className="btn btn-primary m-2"
              onClick={ () => setUserName(userName === "Phil" ? "Clair" : "Phil") }>
          Change
      </button>
    </div>
  );
}

export default App;
