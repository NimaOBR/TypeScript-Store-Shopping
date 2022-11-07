import styled from "styled-components";
import { IconButton } from "@mui/material";

export const Wrapper = styled.div`
  background-color: #eaeaea;
  height: 100vh;
 .inputStyle{
    width:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    padding:40px 0;
  }
  .inputStyle input{
    padding: 10px 20px;
    width:30%;
    border: none;
    border-radius: 8px;
    letter-spacing: 2px;
    font-size: 1.1ren;
  }
`;
export const StyleBoutton = styled(IconButton)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  background-color: #2192ff;
  color: #fff;
  :hover {
    color: #000;
  }
`;
