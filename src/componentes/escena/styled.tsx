import styled from "styled-components";

export const StyledComponent = styled.div<{ seleccionado: boolean }>`
  margin-top: 10px;
  padding: 8px;
  border: 2px solid #00ABB3;
  border-radius: 5px;
  background-color: ${props => {
    if (props.seleccionado) {
      return "#BAD7E9";
    } else {
      return "#FAEDF0";
    }
  }};
`;

export const StyledComponent2 = styled.div`
color: white;
`
;


