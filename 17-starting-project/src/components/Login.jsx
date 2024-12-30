import { useRef, useState } from 'react';

export default function Login() {
  const [emailIsValid, setEmailIsInvalid] = useState();


  const email = useRef();
  const password = useRef();

  function handleSumit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsvalid = enteredEmail.includes('@');

    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return; 
    }
    
    setEmailIsInvalid(false);
    console.log('Sending HTTP request...')
  }

  return (
    <form onSubmit={handleSumit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" 
          type="email" 
          name="email" 
          ref={email}
          />
          <div className="control-error">
            {emailIsValid && 
            <p>Please enter the valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password"
           type="password"
           name="password"
           ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
