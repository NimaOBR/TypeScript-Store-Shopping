import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  gap: 2;
  transform: scale(.89);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: all 1s ease;
  background: #fff;
  :hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 8px;
    transition: all 1s ease;
  }
  img:hover{
    transform: scale(1.2);
    cursor: pointer;
  }
  div {
    font-family:Roboto,sans-serif ;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    height: 100%;
  }
  div p{
    margin: 0 10px;
  }
  div h3{
    color:#5F9DF7;
  }
  div span{
    font-size: 1.3rem;
    margin:40px 0 10px 0 ;
    color:#E0144C;
  }
  div small{
    margin:40px 0 10px 0 ;
    color:#FF731D;
    font-size: 1.3rem;
    animation: coloranimation 4s infinite alternate;
  }
  @keyframes coloranimation {
    0%{
    color:#FF731D;
    }
    25%{
        color: #E0144C;
    }
    50%{
        color:#00F5FF;
    }
    100%{
        color:#38E54D;
    }
  }
`;
