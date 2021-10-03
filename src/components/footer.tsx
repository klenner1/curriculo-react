import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background: #000000c0;
  padding: 0.5rem;
  margin-top: 2rem;
`;

function Footer() {
  return (
    <Container>
      <small>Klenner Martins Barros</small>
    </Container>
  );
}

export default Footer;
