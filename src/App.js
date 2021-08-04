
import { useState } from 'react';
import './App.css';

function App() {
  const langContent={
    uz:{
      first:"Xush kelibsiz!",
      header:"Kirish",
      top:"Iltimos email va parolingizni kiriting!",
      title: "Emailingizni kiriting",
      parol:"Parolni kiriting",
      text: "Parolni unutdingizmi?",
      button:"Kirish"
    },
    en:{
      first:"Welcome!",
      header:"Login",
      top:"Please enter your login and password!",
      title:"Login Email",
      parol:"Password",
      text: "Forget password?",
      button:"Log In"
    },
    rus:{
      first:"Welcome!",
      header:"Авторизоваться",
      top:"Введите ваш логин и пароль",
      title:"Логин",
      parol:"Пароль",
      text: "Забыли пароль?",
      button:"Вход"

    }
  }
             
  
  const[lang, setlang]=useState("en")
  return (
    <>
    {/* <h1>{langContent[lang].first}</h1> */}
      
    {/* {lang} */}
    <select 
      defaultValue={lang}
      onChange={(e)=>setlang(e.target.value)}
      >
      
      <option className="uzb" value="uz">Uzbek</option>
      <option className="eng" value="en">English</option>
      <option value="rus">Russian</option>
      
    </select>
    <div className="Login">
    
      <h2>{langContent[lang].header}</h2>
      <p>{langContent[lang].top}</p>
    <input
    type="email"
    placeholder={langContent[lang].title}
    required
    />
    <input  
    required
    type="password"
    placeholder={langContent[lang].parol}
    /> 
    <p>{langContent[lang].text}</p>
    <button>{langContent[lang].button}</button>

    </div>
            
    </>
  );
}

export default App;
