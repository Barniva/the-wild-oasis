import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

// In a regular component, props are defined using destructuring, setting `text` to "test..." by default.
// In a styled component, props are accessed via `props` and default values are set using `defaultProps`.
// function Row({ text = "test..." }) {
//   return <div>

//   </div>;
// }

export default Row;
