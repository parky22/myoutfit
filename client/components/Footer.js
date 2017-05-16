import React from 'react';
import { FooterWrapper, FooterLink } from './style/footerStyle';
import { Button, StyledA } from './style/style';

export default props => {
  return (
    <FooterWrapper>
      <div>
        <FooterLink href="https://github.com/parky22/myoutfit">fork me on github!</FooterLink>
      </div>
      <div>
        <FooterLink href="https://github.com/parky22">more github projects by yoo-nah</FooterLink>
      </div>
    </FooterWrapper>
  );
};
