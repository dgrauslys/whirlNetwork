import React from "react";
import { Card, NestedCard } from "./styles";

function CardContainer({ children }) {
  return (
    <Card elevation={3}>
      <NestedCard>{children}</NestedCard>
    </Card>
  );
}

export default CardContainer;
