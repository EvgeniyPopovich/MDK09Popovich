import React from 'react';
import './Contacts.css';
import Map from  '../images/Map.jpg';

function Contacts() {
  return (
    <div className="Contacts">   
      <h1>Добро пожаловать на сайт Конного клуба!</h1>
        <h2>Контакты</h2>

        <h3>Адрес: Московская область,село Зеленое,ул. Первомайская, 77</h3>
        <h3>Номер телефона: +7 922 525 07 07</h3>
        <img src = {Map}/>
        <div className='Form'>
        <h2>Обратная связь</h2>
        <input type='text' placeholder='Имя' />
        <input type='email' placeholder='Почта' />
        <textarea class="input input-textarea" name="comment" cols="50"rows="5"/>    
        <button>Отправить</button>
        </div>
    </div>
  );
}

export default Contacts;