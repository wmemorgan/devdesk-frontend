import styled from "styled-components";
import { flex } from "./theme";

export const Container = styled.div`
  ${flex("column")}

  width: 100%;
  max-width: 1000px;

  flex-grow: 99;

  @media (max-width: 800px) {
    padding: 0 10px;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`;
