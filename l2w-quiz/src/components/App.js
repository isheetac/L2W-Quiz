import React from "react";
import Button from "./Button";
import Score from "./Score";
import Card from "./Card";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Button />
        <Score />
        <Card />
      </div>
    );
  }
}
export default App;
