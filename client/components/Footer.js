import React from 'react';
import { FooterWrapper } from './style/footerStyle';
import {  Button, StyledA } from './style/style';

export default props => {
  return (
    <FooterWrapper>
      <div>
        <div>
          <Button><StyledA href="https://github.com/parky22/myoutfit">Fork me on Github!</StyledA></Button>
        </div>
      </div>
      <div>
        <div>
          <Button><StyledA href="https://github.com/parky22">More Github Projects by Yoo-Nah</StyledA></Button>
        </div>
      </div>
    </FooterWrapper>
  );
};
