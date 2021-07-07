import './App.css';
import './fonts/css/all.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import { Todos } from './components/Todos';
// if we used export default then we would not required curly braces for defining component
import React, {useState} from 'react';
import { Addtodos } from "./components/AddTodos";
import { About } from "./components/About";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  // let initTodo;

  // if(localStorage.getItem("todo") === null) {
  //   initTodo = [];
  // } else {
  //   initTodo = JSON.parse(localStorage.getItem("todo"));
  // }

  const onDelete = (item) => {
    console.log("I'm ondelete of item", item);
    // Deleting this way in react does not work
    // let index = todoList.indexOf(item);
    // todoList.splice(index, 1);

    setTodoList(todoList.filter((e) => {
      return e !== item;
      // returning the unavailable item(s)
    }))

    // localStorage.getItem("todos", JSON.stringify(todoList));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding function", title, desc);
    let sno = 0;
    if (todoList.length === 0) {
      sno++;
    } else {
      sno = todoList[todoList.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodoList([...todoList, myTodo]);
    console.log(myTodo);

    // localStorage.setItem("todos", JSON.stringify(todoList));
  }

  const [todoList, setTodoList] = useState( [
    {sno: 1, title: "Go to the market", desc: "You need to go to the market to get this job done1"},
    {sno: 2, title: "Go to the mall", desc: "You need to go to the mall to get this job done2"},
    {sno: 3, title: "Go to the Rajkot", desc: "You need to go to the Rajkot to get this job done3"}
  ] );

  // const [todoList, setTodoList] = useState(initTodo);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todoList))
  // }, [todoList]);

  return (
    <Router>
      <div className="App">
        <Header title="MY Todos List" searchBar={false} />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
              <Addtodos addTodos={addTodo} />
              <Todos todoList={todoList} onDelete={onDelete} />
              </>
            )
          }}></Route>

          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
