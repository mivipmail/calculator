import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import ButtonGroup from "./ButtonGroup";

type PropsType = {
    sectionId: string
    index: any
    isDragDisabled: boolean
    clone?: boolean
    children?: any
}

const DraggableButtonGroup: React.FC<PropsType> = (props) => {
    const {sectionId, index, isDragDisabled, clone, children} = props

    return (
        <>
            {children}
            <Draggable draggableId={clone ? `${sectionId}_clone` : sectionId}
                       index={index}
                       disableInteractiveElementBlocking={false}
                       isDragDisabled={isDragDisabled}>
                {(provided) =>
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}>
                        <ButtonGroup {...props} />
                    </div>
                }
            </Draggable>
        </>
    );
};

export default DraggableButtonGroup;