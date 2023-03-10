import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

type InputProps = {
    isEmpty?: boolean
}

const Input = styled.div.attrs<InputProps>(({isEmpty}) => ({
    isEmpty: isEmpty ?? true,
}))<InputProps>`
  height: 52px;
  text-align: right;
  font-weight: 800;
  font-size: ${props => props.isEmpty ? '36px' : '19px'};
  line-height: ${props => props.isEmpty ? '44px' : '23px'};
  padding: ${props => props.isEmpty ? '4px 8px' : '25px 8px 4px 8px'};
  gap: 10px;
  border: none;
  border-radius: 6px;
  background-color: #F3F4F6;
  color: #111827;
`

const Wrapper = styled.div`
  width: 240px;
  padding: 4px;
`

const Display = () => {
    let displayText = useSelector((state: RootState) => state.calculator.displayText)

    return (
        <Wrapper>
            <Input isEmpty={displayText === null}>
                {displayText || '0'}
            </Input>
        </Wrapper>
    );
};

export default Display;