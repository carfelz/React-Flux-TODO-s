import React from 'react';

function AppView(props) {
  return (
    <div>
      <Header {...props}/>
      <Main {...props}/>
      <Footer {...props}/>
    </div>
  )
}

function Header(props) {
  return(
    <header id='header'>
      <h1>To-Do's</h1>
    </header>
  )
}

function Main(props) {
  if (props.todos.size === 0) {
    return null;
  }
  return(
    <section id="main">
      <ul id="todo-list">
        {[...props.todos.values()].reverse().map(todo => (
          <li key={todo.id}>
            <div className='view'>
              <input 
                className='toggle'
                type="checkbox"
                checked={todo.complete}
                onChange={() => props.onToggleTodo(todo.id)}
              />
              <label>{todo.text}</label>
              <button 
                className='destroy'
                onClick={ () => props.onDeleteTodo(todo.id)}
              />
            </div>
          </li>
        ))}
      </ul> 
    </section>
  )
}

function Footer(props) {
  if (props.todos.size === 0) {
    return null;
  }

  const remainding = props.todos.filter(todo => !todo.complete).size;
  const phrase = remainding === 1 ? ' item left' : ' items left';
  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>
          {remainding}
        </strong>
        {phrase}
      </span>
    </footer>
  );
}

export default AppView;