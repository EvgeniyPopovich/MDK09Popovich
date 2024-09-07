import React from 'react';
import './Usl.css';
import PH1 from  '../images/PH1.jpeg';
import PH2 from  '../images/PH2.jpg';
import PH3 from  '../images/PH3.jpg';
import PH4 from  '../images/PH4.jpg';
import PH5 from  '../images/PH5.jpg';
import PH6 from  '../images/PH6.jpeg';

function Usl() {
  return (
    <div className="Usl">
      <h1>Добро пожаловать на сайт Конного клуба!</h1>
        <h2>Наши услуги:</h2>
        <p>
Конные прогулки по живописному лесу, 1200 руб.<br></br>
Обучение верховой езде для взрослых и детей от 2-х лет, 1500 руб.<br></br>
Фотосессии с лошадьми, 1000 руб.<br></br>
Экскурсии на конюшню, 800 руб.<br></br>
Подарочные сертификаты, 1000 руб, 2000 руб.<br></br>

</p>
<h2>Фотогалерея</h2>
    <ul>
        <li><img src = {PH1}/></li>
        <li><img src = {PH2}/></li>
        <li><img src = {PH3}/></li>
        <li><img src = {PH4}/></li>
        <li><img src = {PH5}/></li>
        <li><img src = {PH6}/></li>
    </ul>
    </div>
  );
}

export default Usl;