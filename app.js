{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */}
import React from "react";
import ReactDOM from "react-dom/client";

const parent =  React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},[React.createElement("h1",{},"I'm h3 tag"),React.createElement("h1",{},"I'm h2 tag")]));

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);