// App.js - главный компонент (обертка) создаваемого приложения;
// Компоненты обязательно называются с большой буквы. В одном файл - прописываем работу только одного компонента;
// компонент - это функция, куда мы закидываем настроийки, а на выходе получаем Virtual DOM, который потом рендерится в настоящий DOM.

import React from "react"; //обзятельно import React  в каждый файл, чтобы использовать JSX и он мог  скомпилироваться и транспайлиться

// 1. Profile
import Profile from "./components/Profile/Profile"; //import Profile из Profile.js для вставки части кода

import userData from "./datadase/user.json"; //database of user
// console.log(userData);

//2. Statistics
import Statistics from "./components/Statistics/Statistics";

import statisticalData from "./datadase/statistical-data.json";
// console.log(statisticalData);

//3. FriendList
import FriendList from "./components/FriendList/FriendList";

import friendsData from "./datadase/friends.json";
console.log(friendsData);

const App = () => {
  return (
    <div>
      {/* 1. рендерим и вставляем часть кода из components/Profile/Profile.js */}
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        // stats={userData.stats}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      {/* 2. рендерим и вставляем часть кода из components/Statistics/Statistics.js */}
      {/* <Statistics title="Upload stats" stats={statisticalData} /> */}
      <Statistics stats={statisticalData} />
      {/* 3.  рендерим и вставляем часть кода из components/FriendList/FriendList.js */}
      <FriendList friendsData={friendsData} />
    </div>
  );
};

export default App;
