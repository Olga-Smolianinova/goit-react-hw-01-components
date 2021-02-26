import React from 'react'; // import React, чтобы могли использовать createElement для создания ссылки;

import ReactDOM from 'react-dom'; // import ReactDOM чтобы Virtual DOM зарендерил что-либо в настоящий DOM;

import App from './App'; //import функции App из  App.js - главного компонента (обертки) создаваемого приложения;

import 'modern-normalize/modern-normalize.css'; //подключение стилей для normalize

import styles from './styles.css';

// рендерим код из Аpp.js - главного компонента (обертки) создаваемого приложения;
// ReactDOM.render(<App />, document.getElementById("root"));
// но лучше использовать нижеследующую запись, т.к. React.StrictMode (строгий режим), т.к. это инструмент для обнаружения потенциальных проблем в приложении. Строгий режим активирует доп.проверки и предупреждения для своих потомков.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// для работы с Virtual DOM (VD):
// - сперва создаем элемент VD или React-element (самый маленький строительный блок React);
// - указать, что хотели бы этот элемент зарендерить;
// -  после этого VD превратит его в настоящий <tag-element> и вставит в DOM.

// console.log(React);
// const link = React.createElement(
//   "a",
//   { href: "https://reactjs.org/" },
//   "Ссылка на reactjs.org"
// ); //в параметрах указываем: 1) <tag-element>, который хотим создать; 2) дополнительные атрибуты <tag-element>. Они еще называются PROPS или свойства создаваемого будущего компонената и то, что ему будет передано; 3) CHILDREN - то, что стоит между открывающим и закрывающим тегом (<a href="">...CHILDREN...</a>)
// console.log(link);

// перепишем код для большей читабельности и удобства с помощью JSX - специальный шаблонизатор, который при помощи Babel под капотом трансформирует JSX-код в вызовы React.createElement()
// const jsxLink = <a href="https://reactjs.org/">Ссылка на reactjs.org</a>;
// console.log(jsxLink);

// Чтобы ссылку из VD перенести в настоящий DOM - ее нужно зарендерить. В Свойстве render нужно указать, что именно (link) и где (ссылка на <div id="root"></div> из index.html) нужно отобразить в реальном  DOM
// console.log(ReactDOM);
// ReactDOM.render(jsxLink, document.getElementById("root"));
