import { styled } from "styled-components";

export default function NavHeader() {
  return <Title>Task Manager</Title>;
}

const Title = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;
