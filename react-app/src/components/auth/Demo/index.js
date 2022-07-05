import {useDispatch} from 'react-redux';
import { login } from '../../../store/session';

function Demo(){
  const dispatch = useDispatch();

  const loginDemo = e =>{
    e.preventDefault();
    const email = "demo@aa.io";
    const password = "password";

    return dispatch(login(email, password));
  }

  return (
      <button type="button" className="demo-btn submitLoginBtn" onClick={loginDemo}>
        Demo User
      </button>
  )
}

export default Demo;
