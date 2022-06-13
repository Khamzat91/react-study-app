import React from 'react';
import Layout from "../Layout/layout";
import btn from "../../images/btn.svg";
import passwordIcons from "../../images/password.svg";
import "./index.scss"
import axios from "axios";
import {Link} from "react-router-dom";

const Registration = () => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {fullName, email, password}
    const response = await axios.post('http://localhost:5656/auth/register', data)
    localStorage.setItem('registerData', JSON.stringify(response))
  }

  const handleOnChangeText = (e) => {
    setFullName(e.target.value)
  }

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <Layout>
      <div className="registration">
        <div className="registration__inner">
          <div className="registration__head">
            <div className="registration__head-title">Регистрация</div>
           <Link to="/"><img src={btn} alt=""/></Link>
          </div>
          <form onSubmit={onSubmit}>
            <label className="form__email">
              <span>Имя и фамилия</span>
              <input value={fullName} onChange={handleOnChangeText} name="fullName" type="text" placeholder="Имя и фамилия"/>
            </label>
            <label className="form__email">
              <span>Email</span>
              <input value={email} onChange={handleOnChangeEmail} name="email" type="email" placeholder="Email..."/>
            </label>
            <label className="form__password">
              <span>Пароль</span>
              <input value={password} onChange={handleOnChangePassword} name="password"
                     type="password" placeholder="password..."/>
              <img src={passwordIcons} alt=""/>
            </label>
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Registration;