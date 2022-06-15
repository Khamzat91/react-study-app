import React from 'react';
import Layout from "../Layout/layout";
import btn from "../../images/btn.svg";
import passwordIcons from "../../images/password.svg";
import "./index.scss"
import {Link, useNavigate} from "react-router-dom";
import {setUserData} from "../../redux/actions/user";
import {useDispatch} from "react-redux";

const Registration = () => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = async (e) => {
   try {
     e.preventDefault();
     const data = {fullName, email, password}
     await dispatch(setUserData(data, 'register'))
     navigate("/profile");
   } catch (e) {
     alert(e.response.data.error || 'Неверные данные...')
   }
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