import React from 'react';
import { SectionSpacerWrapper } from './styles';

const SectionSpacer = ({ children }) => {
  return (
    <SectionSpacerWrapper>
      {children}
    </SectionSpacerWrapper>
  );
};

export default SectionSpacer;
