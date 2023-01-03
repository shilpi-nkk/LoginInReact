import React from "react";
import LogedIn from "./LogedIn";
var isLoggedIn = false;
function Rendering() {
  if (isLoggedIn) {
    return <h1>welcome user</h1>;
  } else {
    return (
      <div className="container">
        <h1>Hello</h1>
        <LogedIn />
      </div>
    );
  }
}
function App() {
  return <Rendering />;
}

export default App;
