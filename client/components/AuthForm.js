import React from 'react';

export default props => {

  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="row">
      <form onSubmit={handleSubmit} name={name} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="email"><small>Email</small></label>
            <input name="email" type="text" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="password"><small>Password</small></label>
            <input name="password" type="password" />
          </div>
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
    </div>
  );
};
