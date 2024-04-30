import { Link } from 'react-router-dom';
import Loginimg from '../../assets/images/login/login.svg';
const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col  lg:flex-row'>
          <div className='w-1/2 mx-12'>
            <img src={Loginimg} alt='' />
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body' onSubmit={handleSignup}>
              <h1 className='text-4xl text-center font-bold'>Sign Up</h1>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='name'
                  className='input input-bordered'
                  required
                  name='name'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                  name='email'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  name='password'
                  required
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>
            <p className='my-4 text-center'>
              Have an account
              <>&nbsp;</>
              <Link className='text-orange-600 font-bold' to='/login'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
