import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {DragDropContext} from "react-beautiful-dnd";
import Sidebar from "../Sidebar/Sidebar";
import Canvas from "../Canvas/Canvas";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {add} from "../../redux/canvasSlice";
import Header from "../Header/Header";
import {CANVAS_ID} from "../../consts";

const Constructor = () => {
    const sectionIds = useSelector((state: RootState) => state.canvas.sectionIds)
    const isRuntime = useSelector((state: RootState) => state.app.isRuntime)
    const dispatch = useDispatch()
    const [draggableId, setDraggableId] = useState(null)
    const [destinationIndex, setDestinationIndex] = useState(null)

    const onDragEnd = (result: any) => {
        if (result.destination?.droppableId === CANVAS_ID && destinationIndex != null) {
            dispatch(add({sectionId: result.draggableId, position: destinationIndex}))
        }
        setTimeout(() => setDraggableId(null), 250)
        setDestinationIndex(null)
    }

    const onDragStart = (dragData: any) => {
        setDraggableId(dragData.draggableId)
    }

    const onDragUpdate = (updateData: any) => {
        if (updateData.destination?.droppableId === CANVAS_ID) {
            let destinationIndex =
                (updateData.destination.index === 0 && sectionIds.includes('display'))
                    ? 1
                    : (updateData.draggableId === 'display')
                        ? 0
                        : updateData.destination.index

            setDestinationIndex(destinationIndex)
        }
    }

    return (
        <Container fluid className="p-0">
            <Row className="justify-content-sm-center">
                <Col xs="auto">
                    <Header/>
                </Col>
            </Row>
            <Row className="justify-content-sm-center">
                <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart} onDragUpdate={onDragUpdate}>
                    <Col xs="auto" sm={{order: 'last'}} className="px-sm-4">
                        <Canvas destinationIndex={destinationIndex} isRuntime={isRuntime}/>
                    </Col>
                    <Col xs="auto" sm={{order: 'first'}} className="px-sm-4">
                        <Sidebar draggableId={draggableId} isVisible={!isRuntime}/>
                    </Col>
                </DragDropContext>
            </Row>
        </Container>
    );
};

export default Constructor;