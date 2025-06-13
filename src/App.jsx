import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main.jsx";
// import PracticePage from "./PracticePage.jsx";
import EmployeePage from "./PracticeEmployeePge.jsx";
import FormInReact from "./PracticePage.jsx";
import JokesPage from "./JokesPage.jsx";
import JokesData from "./JokesData";
import PractiseClock from "./PractiseClock.jsx";
import PracticeBody from "./Practice/PracticeBody.jsx";
import PracticeHeader from "./Practice/PracticeHeader.jsx";
import PadApp from "./Practice/PadApp.jsx";

function App() {
  // const [count, setCount] = useState(0);
  const jokes = JokesData.map((prev) => (
    <JokesPage key={prev.id} setUp={prev.setup} punchLine={prev.punchline} />
  ));
  const [userName, setUserName] = React.useState("Joe");
  return (
    <>
      <Header />
      <Main />
      {/* <PractiseClock /> */}
      {/* <PracticePage /> */}
      {/* <EmployeePage /> */}
      {/* <FormInReact /> */}
      {/* {jokes} */}
      {/* <PracticeHeader username={userName} />
      <PracticeBody username={userName} /> */}
      {/* <PadApp /> */}
    </>
  );
}

export default App;
