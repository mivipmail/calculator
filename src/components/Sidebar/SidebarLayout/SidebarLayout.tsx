import React from 'react';
import styled from "styled-components";
import {buttonsData} from "../../../consts";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 1px;
  left: 0;
`

interface DivProps {
    transparent?: boolean
}

const Div = styled.div.attrs<DivProps>(({transparent}) => ({
    transparent: transparent ?? false,
}))<DivProps>`
  margin-bottom: 12px;
  opacity: ${props => props.transparent ? 0.4 : 1.0};
`

const SidebarLayout: React.FC<{ draggableId: string | null }> = ({draggableId}) => {
    const sectionIds = useSelector((state: RootState) => state.canvas.sectionIds)

    const isDisabled = (sectionId: string) =>
        sectionIds.includes(sectionId) || draggableId === sectionId

    return (
        <Wrapper>
            {
                Object.keys(buttonsData).map((sectionId, index) =>
                    <Div key={sectionId} transparent={isDisabled(sectionId)}>
                        <ButtonGroup sectionId={sectionId}
                                     index={0}
                                     isDragDisabled={isDisabled(sectionId)}/>
                    </Div>
                )
            }

        </Wrapper>
    );
};

export default SidebarLayout;