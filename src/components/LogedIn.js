import React from "react";
import Input from "./Input";

function LogedIn() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default LogedIn;
