import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import DraggableButtonGroup from "../ButtonGroup/DraggableButtonGroup";
import styled from "styled-components";
import {Droppable} from "react-beautiful-dnd";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import CanvasLabel from "./CanvasLabel/CanvasLabel";
import {CANVAS_ID} from "../../consts";


type WrapperProps = {
    isEmpty?: boolean
}

const Wrapper = styled.div.attrs<WrapperProps>(({isEmpty}) => ({
    isEmpty: isEmpty ?? false,
}))<WrapperProps>`
  width: 243px;
  height: 100%;
  min-height: 450px;
  padding: 0;
  border-radius: 3px;
  border: ${props => props.isEmpty ? 'dashed 2px lightgray' : 'none'};
`

const Hr = styled.div`
  padding: 0;
  height: 5px;
  background-color: #5D5FeF;
  border-top: solid 2px white;
  border-bottom: solid 2px white;
  border-right: 3px solid #5D5FeF;
  border-left: 3px solid #5D5FeF;
`

type PropsType = {
    isRuntime: boolean
    destinationIndex: number | null
}

const Canvas: React.FC<PropsType> = (props) => {
    const sections = useSelector((state: RootState) => state.canvas.sectionIds)

    return (
        <Droppable droppableId={CANVAS_ID}>
            {(provided) =>
                <Wrapper ref={provided.innerRef} {...provided.droppableProps} isEmpty={sections.length === 0}>
                    {sections.length === 0 &&
                        <CanvasLabel/>
                    }
                    {sections.map((element, index) => {
                            return (
                                props.isRuntime
                                    ?
                                    <ButtonGroup index={index}
                                                 key={element}
                                                 sectionId={element}
                                                 disabled={false}
                                                 isDragDisabled={true}/>
                                    :
                                    element === 'display'
                                        ?
                                        <ButtonGroup index={index}
                                                     key={element}
                                                     sectionId={element}
                                                     disabled={true}
                                                     isDragDisabled={true}/>
                                        :
                                        <DraggableButtonGroup index={index}
                                                              clone={true}
                                                              key={element}
                                                              sectionId={element}
                                                              isDragDisabled={true}>
                                            {index === props.destinationIndex ? <Hr/> : null}
                                        </DraggableButtonGroup>
                            )
                        }
                    )
                    }
                    {sections.length === props.destinationIndex ? <Hr/> : null}
                    {provided.placeholder}
                </Wrapper>
            }
        </Droppable>
    );
};

export default Canvas;