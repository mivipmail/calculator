import React from 'react';
import {buttonsData} from "../../consts";
import SmartButton from "../SmartButton/SmartButton";
import {useDispatch} from "react-redux";
import {remove} from "../../redux/canvasSlice";
import styled from "styled-components";
import Display from "../Display/Display";

interface WrapperProps {
    isDragDisabled?: boolean
    isMarginBottom?: boolean
}

const Wrapper = styled.div.attrs<WrapperProps>(({isDragDisabled, isMarginBottom}) => ({
    isDragDisabled: isDragDisabled ?? false,
    isMarginBottom: isMarginBottom ?? true,
}))<WrapperProps>`
  width: 240px;
  border-radius: 4px;
  box-shadow: ${props => props.isDragDisabled ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'};
  background-color: #FFFFFF;
  margin-bottom: ${props => props.isMarginBottom ? '12px' : '0px'};
`;

type PropsType = {
    sectionId: any
    index?: any
    disabled?: boolean
    isDragDisabled?: boolean
}

const ButtonGroup: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const disabled = props.disabled ?? true

    const onClick = (e: React.MouseEvent<HTMLElement>, sectionId: string) => {
        if (e.detail === 2 && disabled) {
            dispatch(remove(sectionId))
        }
    }

    return (
        <Wrapper id={props.sectionId} isDragDisabled={props.isDragDisabled} isMarginBottom={props.sectionId !== 'equal'}
                 onClick={(e) => onClick(e, props.sectionId)}>
            {
                props.sectionId === 'display'
                    ?
                    <Display/>
                    :
                    buttonsData[props.sectionId as keyof typeof buttonsData].map((el: any) =>
                        <SmartButton key={el.id}
                                     button={el}
                                     disabled={disabled}/>
                    )
            }
        </Wrapper>
    );
};

export default ButtonGroup;