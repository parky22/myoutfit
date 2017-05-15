import React from 'react';
import { Button, Input } from './style/style';

export default props => {

  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <div>
            <label htmlFor="email"><small>Email</small></label>
            <Input name="email" type="text" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password"><small>Password</small></label>
            <Input name="password" type="password" />
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
