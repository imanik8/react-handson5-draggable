import React, { useRef } from "react";
import ReactDOM from "react-dom";
import useDraggable from "./useDraggable";
import useDraggableX from "./useDraggableX";
import useDraggableY from "./useDraggableY";

import "./index.css";

const DraggableCard = ({ children }) => {
  const cardRef = useRef(null);
  useDraggable(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <div style={{ margin: "10px" }}>{children}</div>
    </div>
  );
};

const DraggableCardScroll = ({ children }) => {
  const cardRef = useRef(null);
  useDraggable(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <div className="srl" style={{ margin: "5px" }}>
        {children}
      </div>
    </div>
  );
};

const DraggableCardX = ({ children }) => {
  const cardRef = useRef(null);
  useDraggableX(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <div style={{ margin: "10px" }}>{children}</div>
    </div>
  );
};

const DraggableCardY = ({ children }) => {
  const cardRef = useRef(null);
  useDraggableY(cardRef);

  return (
    <div className="card" ref={cardRef}>
      <div style={{ margin: "10px" }}>{children}</div>
    </div>
  );
};

function StaticCard({ children }) {
  return (
    <div className="card">
      <div style={{ margin: "10px" }}>{children}</div>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <DraggableCard>
        I don't have any restrictions. I can move in all the directions
      </DraggableCard>

      <DraggableCardScroll>
        I am a scrollable div with no movement restrictions. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Exercitationem est ipsum
        reiciendis distinctio corporis vel nihil eaque fugiat adipisci esse
        maxime eligendi amet, sequi perferendis omnis porro voluptatum?
        Explicabo, distinctio.
      </DraggableCardScroll>
      <DraggableCardX>
        I can move only in horizontal direction (x axis)
      </DraggableCardX>
      <DraggableCardY>
        I can move only in vertical direction (y axis)
      </DraggableCardY>
      <StaticCard>I am static card. I won't move</StaticCard>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
