import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 32px 0 16px;
  text-shadow: 0px 0 3px #000;
`;

function Title({ children }: { children: string }) {
  return (
    <Container className="flex-column align-center">
      <h1>{children}</h1>
    </Container>
  );
}

export default Title;
