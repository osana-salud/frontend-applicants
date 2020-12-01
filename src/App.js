import React from "react";
import './App.css';
import Github from "./components/github"
import Gitlab from "./components/gitlab";
import { Tab } from "semantic-ui-react";
import  "./App.css"

const Options = [
  {
    menuItem: "Github",
    key: "1",
    pane: {
      content: (
        <Tab.Pane>
          <Github/>
        </Tab.Pane>
      ),
    },
  },
  {
    menuItem: "Gitlab",
    key: "2",
    pane: {
      content: (
        <Tab.Pane>
          <Gitlab />
        </Tab.Pane>
       ),
      },
    },
  ];
const App = () => {
  return <Tab panes={Options} className="formWidth" renderActiveOnly={false} />;
};

export default App;
