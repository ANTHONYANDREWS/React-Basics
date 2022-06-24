import React from 'react';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import ClassComponent from './components/ClassComponent/ClassComponent';
import ChildfunctionalComponent from './components/FunctionalComponent/ChildfunctionalComponent';
import ChildClassComponent from './components/ClassComponent/ChildClassComponent';
import Counter from './components/Tasks/Counter';
import BulbOnOff from './components/Tasks/BulbOnOff';

function App() {
  return (
    <div className="App">
    <FunctionalComponent message='Hello Functional Component'/>
    <ClassComponent message = 'Hello Class Component'/>
    <ChildClassComponent
    personNo ="1"
    personImg = 'https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/check_user_man-512.png'
    personDetail = {{
      firstName: "John",
      lastName : "Watson"
    }}
    hobbies={["Swimming", "Reading"]}
    />

    <ChildfunctionalComponent
    personNo = "2"
    personImg = 'https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/check_user_man-512.png'
    personDetail = {{
      firstName : 'Mark',
      lastName : 'Ron'
    }}
    hobbies = {["Learning", "Writing"]}
    /> 

    <Counter/> 
     
   <BulbOnOff/>
   </div>
    );
  }


export default App;