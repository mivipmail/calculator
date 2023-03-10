import React from 'react';
import styled from "styled-components";
import {buttonsData} from "../../../consts";
import {Droppable} from "react-beautiful-dnd";
import DraggableButtonGroup from "../../ButtonGroup/DraggableButtonGroup";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
`

type DivProps = {
    invisible: boolean
    marginBottom: boolean
}

const Div = styled.div.attrs<DivProps>(({invisible, marginBottom}) => ({
    invisible: invisible,
    marginBottom: marginBottom
}))<DivProps>`
  visibility: ${props => props.invisible ? 'hidden' : 'visible'};
  margin-bottom: ${props => props.marginBottom ? '12px' : '0px'}
`

type PropsType = {
    draggableId: string | null
}

const SidebarDraggableElements: React.FC<PropsType> = ({draggableId}) => {
    const sectionIds = useSelector((state: RootState) => state.canvas.sectionIds)
    const isNotDraggable = (sectionId: string) => sectionIds.includes(sectionId)

    return (
        <Wrapper>
            {
                Object.keys(buttonsData).map((sectionId, index) => {
                        return (
                            <Droppable key={index.toString()} droppableId={index.toString()}
                                       isDropDisabled={true}>
                                {(provided) => {
                                    return (
                                        <Div ref={provided.innerRef} {...provided.droppableProps}
                                             invisible={isNotDraggable(sectionId) ||
                                                 (draggableId != null && draggableId !== sectionId)}
                                             marginBottom={sectionId !== 'equal'}>
                                            <DraggableButtonGroup key={sectionId}
                                                                  sectionId={sectionId}
                                                                  index={0}
                                                                  isDragDisabled={isNotDraggable(sectionId)}/>
                                            {provided.placeholder}
                                        </Div>
                                    )
                                }
                                }
                            </Droppable>
                        )
                    }
                )
            }
        </Wrapper>
    );
};

export default SidebarDraggableElements;