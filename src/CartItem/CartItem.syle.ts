import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid blue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }
  .information .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  img {
    margin: 50px auto;
    max-width: 250px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
