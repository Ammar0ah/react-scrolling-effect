import React from "react";
import ListContainer from "./containers/ListContainer";
import "./style.css";
import data from "./data.json";
import { Header } from "./styles";

export default function App() {
  return (
    <div>
      <Header>
        React Scrollable List
      </Header>
      <ListContainer data={data} />
    </div>
  );
}
