import styled from "styled-components";

export const Card = styled.li`
  list-style: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 1em;
  margin: 1.5em;
  overflow: hidden;
  max-width: 50%;
  max-height: 55rem;
  opacity: ${(props) => (props.active ? 1 : 0.75)};
  align-items: center;
`;

export const Image = styled.img`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
  max-height: 30rem;
  min-width: 30rem;
  border-radius: 1em;
`;
export const Title = styled.h2`
  margin: 1em 0;
`;
