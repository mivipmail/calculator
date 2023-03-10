import React from 'react';
import styled from "styled-components";
import SidebarLayout from "./SidebarLayout/SidebarLayout";
import SidebarDraggableElements from "./SidebarDraggableElements/SidebarDraggableElements";

type WrapperType = {
    isVisible?: boolean
}

const Wrapper = styled.div.attrs<WrapperType>(({isVisible}) => ({
    isVisible: isVisible ?? true,
}))<WrapperType>`
  position: relative;
  z-index: 1;
  padding: 1px 0 0 0;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
`

type PropsType = {
    draggableId: string | null
    isVisible?: boolean
}

const Sidebar: React.FC<PropsType> = ({draggableId, isVisible}) => {
    return (
        <Wrapper isVisible={isVisible}>
            <SidebarLayout draggableId={draggableId} />
            <SidebarDraggableElements draggableId={draggableId} />
        </Wrapper>
    );
};

export default Sidebar;