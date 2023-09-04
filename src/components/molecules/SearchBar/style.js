import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 421px;
    border: 2px solid #0d6efd;
    border-radius: 6px 0 0 6px;
    color: #8b96a5;
    font-weight: 400;
    padding-left: 10px;
  }

  select {
    width: 145px;
    border: 2px solid #0d6efd;
    border-left: 0px;
    padding-left: 10px;
    appearance: none;
    -webkit-appearance: none;
    background: url("/custom_arrow_icon.svg") no-repeat right center;
  }

  button {
    width: 76px;
    background-color: #0d6efd;
    color: #fff;
    text-align: center;
    font-weight: 500;
    border: none;
    border-radius: 0 6px 6px 0;
  }

  input,
  select,
  button {
    font-family: Inter;
    height: 40px;
    outline: none;
  }
`;
