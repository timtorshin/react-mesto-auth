import React from 'react';

function Login({ authorization }) {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  function handleChangeEmail(evt) {
    setEmailValue(evt.target.value);
  }

  function handleChangePassword(evt) {
    setPasswordValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const email = emailValue;
    const password = passwordValue;
    authorization(email, password);
  }

  return (
    <div className="sign">
      <h2 className="sign__title">Вход</h2>
      <form onSubmit={handleSubmit} className="sign__form">
        <input type="email" placeholder="Email" value={emailValue} onChange={handleChangeEmail} className="sign__input"></input>
        <input type="password" placeholder="Пароль" value={passwordValue} onChange={handleChangePassword} className="sign__input"></input>
        <button type="submit" className="sign__button">Войти</button>
      </form>
    </div>
  );
}

export default Login;
