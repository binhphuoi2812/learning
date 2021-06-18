import logo from './logo.svg';
import './App.css';
import ChildComponent from './components/childComponent';
import TitleComponent from './components/titleComponent';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomeComponent from './components/homeComponent';

import ChildComponent2 from './hookChildComponents/childComponent';
import HookListInput from './hookChildComponents/hookListInput';
import ListPersonComponent from './hookChildComponents/listPerson';
import SimpleCount from './container/simpleCount';
import useMemo from './views/useMemoComponent';
import useMemoComponent from './views/useMemoComponent';
import UseMemoComponent from './views/useMemoComponent';
import Test from './components/test';
import Radio from './components/radio';
import ClockDemo from './components/test2';
import { Father } from './components/children';
import { CallRef } from './components/useRef';
import { GotApi } from './components/TestApi';
import { GetApi } from './components/CheckApi';


function App() {
  return (
    <div className="App">
      {/* <ChildComponent></ChildComponent> */}
      {/* <TitleComponent></TitleComponent> */}
{/* 
      <Router>
        <Link></Link>
        <Route path="/" component={HomeComponent}></Route>
        <Route path="/child" component={ChildComponent}></Route>
        <Route path="/title" component={TitleComponent}></Route>
      </Router> */}
      {/* <ChildComponent2 name= "Hello World" ></ChildComponent2> */}
      {/* <HookListInput></HookListInput> */}
      {/* <ListPersonComponent></ListPersonComponent> */}

      {/* <SimpleCount></SimpleCount> */}
      {/* <Test></Test> */}
      {/* <Father></Father> */}

      {/* <CallRef></CallRef> */}
      <GotApi></GotApi>
      {/* <Radio></Radio> */}
       {/* <GetApi></GetApi> */}
       {/* <GetApi></GetApi> */}
      {/* <ClockDemo></ClockDemo> */}
      {/* <UseMemoComponent></UseMemoComponent> */}
    </div>
  );
}

export default App;

//Redux : quan ly data , chia se data giua các component

// Store: a b c 
// Reducer : a= a' , component-> action -> reducer->store->component