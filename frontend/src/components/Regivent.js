import React from 'react';

function Regivent() {  
  return (
    <>
        <h1>Регистрация на мероприятие</h1>
        <input id='email' type='email' placeholder='Почта' />
        <input id='date' type='date' placeholder='Почта' />
        <input id='name' type='text' placeholder='Название мероприятия' />
        <button >Записаться</button>
    </>
  );
}

export default Regivent;