import React from 'react';
import './Header.css';
import UserBox from './UserBox';


function Header({setPage, setModalBox}) {
  return (
    <div className="Header">
        <ul>
        <li onClick={() => setPage('Main')}>Главная</li>
        <li onClick={() => setPage('Usl')}>Услуги</li>
        <li onClick={() => setPage('Contacts')}>Контакты</li>
        <li onClick={() => setPage('About')}>О компании</li>
        <li onClick={() => setPage('Ivent')}>Мероприятия</li>
      </ul>
      <UserBox setModalBox={setModalBox} />
    </div>
  );
}

export default Header;