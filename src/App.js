// App.js - главный компонент (обертка) создаваемого приложения;
// Компоненты обязательно называются с большой буквы. В одном файл - прописываем работу только одного компонента;
// компонент - это функция, куда мы закидываем настроийки, а на выходе получаем Virtual DOM, который потом рендерится в настоящий DOM.

import React from 'react'; //обзятельно import React  в каждый файл, чтобы использовать JSX и он мог  скомпилироваться и транспайлиться

// Components
import Profile from './components/Profile/Profile'; // 1. Profile

import Statistics from './components/Statistics/Statistics'; //2. Statistics

import FriendList from './components/FriendList/FriendList'; //3. FriendList

import TransactionHistory from './components/TransactionHistory/TransactionHistory'; // 4. TransactionHistory

// Styles
import userData from './datadase/user.json'; //database for user

import statisticalData from './datadase/statistical-data.json'; //database for Statistic

import friendsData from './datadase/friends.json'; //database for FriendList

import transactions from './datadase/transactions.json'; //database for Transaction

const App = () => {
  return (
    <div>
      {/* 1. рендерим и вставляем часть кода из components/Profile/Profile.js */}
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      {/* 2. рендерим и вставляем часть кода из components/Statistics/Statistics.js */}
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      {/* 3.  рендерим и вставляем часть кода из components/FriendList/FriendList.js */}
      <FriendList friendsData={friendsData} />

      {/* 4.  рендерим и вставляем часть кода из components/TransactionHistory/TransactionHistory.js */}
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
