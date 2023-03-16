import styled from 'styled-components'

export const StyledButton = styled.button`
  border-radius: none;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  padding: 15px 160px;
  background-color: ${({ bg }) => bg || 'rgb(59, 138, 3);'};
  color: ${({ color }) => color || '#fff'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`