import React from 'react'
import './services.scss';

const Services = () => {

  const [view, setView] = React.useState('password');
  const [userInfo, setUserInfo] = React.useState({});

  const getData = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const passValidation = () => {
    const splitVal = userInfo?.password.split('');
    for (let i = 0; i < splitVal.length; i++) {
      if (splitVal[i] === '0') {
        splitVal[i] = 'zero';
      } else if (splitVal[i] === '1') {
        splitVal[i] = 'one';
      }
      else if (splitVal[i] === '2') {
        splitVal[i] = 'two';
      }
      else if (splitVal[i] === '3') {
        splitVal[i] = 'three';
      }
      else if (splitVal[i] === '4') {
        splitVal[i] = 'four';
      }
      else if (splitVal[i] === '5') {
        splitVal[i] = 'five';
      }
      else if (splitVal[i] === '6') {
        splitVal[i] = 'six';
      }
      else if (splitVal[i] === '7') {
        splitVal[i] = 'seven';
      }
      else if (splitVal[i] === '8') {
        splitVal[i] = 'eight';
      }
      else if (splitVal[i] === '9') {
        splitVal[i] = 'nine';
      }
    }


    const pass = splitVal.toString();
    const changeVal = pass.replaceAll(',', '')
    const newUserInfo = { ...userInfo, password: changeVal };

    return newUserInfo;

  };



  const submitBtn = () => {
    const validateUser = passValidation();
    console.log(validateUser);
  }


  return (
    <div id='services'>
      <div className='service'>
        <h1>Service</h1>
        <button onClick={() => setView(view === 'text' ? 'password' : 'text')}>View Pass</button>

        <input type="text" name="name" onChange={(e) => getData(e)} />
        <input type="text" name="email" onChange={(e) => getData(e)} />
        <input type={view} name="password" onChange={(e) => getData(e)} />
        <button onClick={() => submitBtn()}>Submit</button>
      </div>
    </div>
  )
}

export default Services