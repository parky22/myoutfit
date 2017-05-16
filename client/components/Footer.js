import React from 'react';
import { FooterWrapper, FooterLink } from './style/footerStyle';
import { Button, StyledA } from './style/style';

export default props => {
  return (
    <FooterWrapper>
      <div>
        <FooterLink href="https://github.com/parky22/myoutfit">Fork me on Github!</FooterLink>
      </div>
      <div>
        <FooterLink href="https://github.com/parky22">More Github Projects by Yoo-Nah</FooterLink>
      </div>
    </FooterWrapper>
  );
};
