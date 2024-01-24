import { useState } from "react";

function App( ) {
  const [count, setCount] = useState(0);
  <div className="container my-5">
    <div className="card">
      <div className="card text-center my-5">
        <h1>Couter App</h1>
        <div className="my-5">
          <h2 className="my-5">{count}</h2>
          <button className="btn btn-success mx-3 onclick={}">Increment</button>
          <button className="btn btn-danger mx-3">Decrement</button>
            <button className="btn btn-secondary mx-3">Reset</button>
        </div>

      </div>
    </div>
  </div>
}

export default App;