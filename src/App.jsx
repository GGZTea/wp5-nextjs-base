import React from "react";
import ReactDOM from "react-dom";
import Nav from 'consumer/Nav';

import "./index.css";

const App = () => <div>
    <div>Hi, I'm Base App</div>
    <div>loading Consumer Nav Component</div>
    <Nav />
</div>;

ReactDOM.render(<App />, document.getElementById("app"));
