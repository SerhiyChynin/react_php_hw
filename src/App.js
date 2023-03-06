import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [t3, setT3] = useState('');
  const [t4, setT4] = useState('');
  const [t5, setT5] = useState([]);

  function task1() {
    fetch('http://server/api.php', {
      method: 'POST',
      header: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ action: 1 })
    })
      .then(response => response.text())
      .then(response => {
        console.log(response)
        setT1(response)
      })
  }

  function task2(event) {
    event.preventDefault();
    let n1 = event.target.elements.num1.value;
    let n2 = event.target.elements.num2.value;
    fetch('http://server.ua/api.php', {
      method: 'POST',
      header: {
        'Content-type': 'application/x-www-form-urlencoded'
      },

      body: JSON.stringify({ action: 2, num1: n1, num2: n2 },

      )
    })
      .then(response => response.text())
      .then(response => {
        console.log(response)
        setT2(response)
      })

  }

  function task3(event) {
    event.preventDefault();
    // console.log(event.target.elements.filename.value)
    // console.log(event.target.elements.filedata.value)
    let filename = event.target.elements.filename.value;
    let filedata = event.target.elements.filedata.value;
    fetch('http://server.ua/api.php', {
      method: 'POST',
      header: {
        'Content-type': 'application/x-www-form-urlencoded'
      },

      body: JSON.stringify({ action: 3, filename: filename, filedata: filedata },

      )
    })
      .then(response => response.text())
      .then(response => {
        if (response > 0)
          return setT3(filename);
        setT3(false);
      })
  }

  function task4(event) {
    event.preventDefault();
    fetch('http://server.ua/api.php', {
      method: 'POST',
      header: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      
      body: JSON.stringify({ action: 4 }

      )
    })
      .then(response => response.text())
      .then(response => {
        console.log(response)
        setT4(response);
      })
  }

  function task5(event) {
    event.preventDefault();
    fetch('http://server.ua/api.php', {
      method: 'POST',
      header: {
        'Content-type': 'application/json'
      },
      
      body: JSON.stringify({ action: 5 }
      )

    })
      .then(response => response.json())
      .then(response => {
        setT5(response);
      })
  }
  

  return (
    <div>
      <h1>ItGid.info</h1>
      <p>{ }</p>
      <hr />
      <div>
        <h2>Время сервера</h2>
        <button onClick={task1}>GET</button>
        <p>{t1}</p>
      </div>
      <hr />
      <div>
        <h2>Случайное число между</h2>
        <form onSubmit={task2}>
          <div><input type="number" name="num1" defaultValue="30" /></div>
          <div><input type="number" name="num2" defaultValue="44" /></div>
          <button type="submit">Push</button>
        </form>
        <p>{t2}</p>
      </div>
      <hr />
      <div>
        <h2>Создание файла</h2>
        <form action="" onSubmit={task3}>
          <div><input type="text" name="filename" /></div>
          <div><input type="text" name="filedata" /></div>
          <button type="submit">Push</button>
        </form>
        <p> {t3 === false ? '' : <a href={"http://server.ua/files/" + t3}>скачать</a>} </p>
      </div>
      <hr />
      <div>
        <h2>Получение данных компьютера</h2>
        <form action="" onSubmit={task4}>
          <button type="submit">Push</button>
        </form>
        <p>{t4}</p>
      </div>
      <hr />
      <div>
        <h2>Получение курса валют</h2>
        <form action="" onSubmit={task5}>
          <button type="submit">Push</button>
        </form>
        <ul>
          {t5.map(item => <li key={item.ccy.toString()}> {item.ccy} - {item.buy} { item.sale} {item.base_ccy}</li>)}
        </ul>
      </div>
    </div>
  );
} 

export default App;
