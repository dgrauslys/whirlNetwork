import React from "react";
import { PageHeaderContainer, PageHeaderText } from "./styles";

function PageHeader({ title }: { title: string }) {
  return (
    <PageHeaderContainer>
      <PageHeaderText>{title}</PageHeaderText>
    </PageHeaderContainer>
  );
}

export default PageHeader;
