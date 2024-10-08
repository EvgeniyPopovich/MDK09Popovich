import React from 'react';
import './About.css';
import Pers1 from  '../images/Pers1.jpg';
import Pers2 from  '../images/Pers2.jpg';
import Pers3 from  '../images/Pers3.jpg';
function About() {
  return (
    <div className="About">
        
      <h1>Добро пожаловать на сайт Конного клуба!</h1>
        <h2>Приходи и отдохни от суеты!</h2>   
        <p>Конный клуб – не только самый крупный, но и один из самых популярных в Московской области.<br></br>
        <br></br>
        Сегодня в хозяйстве 40 лошадей русской рысистой, тяжеловозной и вятской пород. Так же имеются козы, овцы, кролики, индюки, курицы, собаки.<br></br>
        <br></br>
        Для особо искушенных туристов есть русская баня, родниковая купель и веревочный троллей.<br></br>
        <br></br>
        Верховая езда – это настоящая панацея для современного общества, в жизни которого преобладает сидячий образ жизни, повышенные умственные нагрузки, работа с гаджетами. <br></br>
        А еще – это профилактика и лечение многих болезней, снятие стресса, чувства тревоги, психологическая разгрузка.</p>
        <div className='Person'>
        <h2>Наши сотрудники</h2>
        <ul>
            <li>
            <h3>Белова Светлана</h3>
            <img src = {Pers1}/>
            <p>Опыт работы с лошадьми более 15 лет.<br></br> 
            Училась в Московской конно-спортивной школе.</p>
            </li>
            <li>
            <h3>Вольхина Александра</h3>
            <img src = {Pers3}/>
            <p>Работает с лошадьми более 12 лет.<br></br>  
            Училась в Московской школе наездников.<br></br> 
            Тренер-наездник лошадей, инструктор верховой езды.<br></br> 
            Квалификации: наездник 3 категории.</p>
            </li>
            <li>
            <h3>Лекомцев Роман</h3>
            <img src = {Pers2}/>
            <p>Опыт работы с лошадьми более 15 лет.</p>
            </li>
        </ul>
    </div>
    </div>
  );
}

export default About;