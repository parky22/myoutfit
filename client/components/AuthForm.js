import React from 'react';
import { Button, Input } from './style';

export default props => {

  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="row">
      <form onSubmit={handleSubmit} name={name} className="col s12">
        <div className="row">
          <div className="col s12">
            <label htmlFor="email"><small>Email</small></label>
            <Input placeholder="email" name="email" type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <label htmlFor="password"><small>Password</small></label>
            <Input placeholder="password" name="password" type="password" />
          </div>
        </div>
        <div>
          <Button type="submit">{displayName}</Button>
        </div>
        {error && <div> {error.response.data} </div>}
      </form>
      <Button><a href="/auth/google">{displayName} with Google</a></Button>
    </div>
  );
};
