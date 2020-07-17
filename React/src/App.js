import React, { Component } from "react";
import "./App.css";

import ToDoListItem from "./js/toDoListItem.js";

class App extends Component {
  state = {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  };

  addTodo = (item, callback) => {
    this.setState(
      {
        todoList: this.state.todoList.concat(item),
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        callback && callback();
      }
    );
  };

  removeTodo = (item, callback) => {
    this.setState(
      {
        todoList: this.state.todoList.filter((x) => x !== item),
      },
      () => {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        callback && callback();
      }
    );
  };

  render() {
    return (
      <div className="App">
        <form
          className="App-form"
          onSubmit={(e) => {
            e.preventDefault();

            // idがtitleのElementを取得
            const titleElement = e.target.elements["title"];
            // idがdescriptionのElementを取得
            const descriptionElement = e.target.elements["description"];

            // todoList stateに追加
            this.addTodo(
              {
                title: titleElement.value,
                description: descriptionElement.value,
              },
              () => {
                //state更新後に殻にする
                titleElement.value = "";
                descriptionElement.value = "";
              }
            );
            // this.setState(
            //   {
            //     todoList: this.state.todoList.concat({
            //       title: titleElement.value,
            //       description: descriptionElement.value,
            //     }),
            //   },
            //   // stateの変更後に入力した値を空にする
            //   () => {
            //     titleElement.value = "";
            //     descriptionElement.value = "";
            //   }
            // );
          }}
        >
          <div>
            <input id="title" placeholder="title" />
            <textarea id="description" placeholder="description" />
          </div>
          <div>
            <button type="submit">登録</button>
          </div>
        </form>
        <div>
          {this.state.todoList.map((todo) => (
            <ToDoListItem
              key={todo.title}
              title={todo.title}
              description={todo.description}
              onClick={() => this.removeTodo(todo)}
            />
          ))}
        </div>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <ToDoListItem title="HP desu" description="HPだよ" tes="tes" />
//       </div>
//     </div>
//   );
// }

export default App;
