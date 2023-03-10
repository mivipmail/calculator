import React from 'react';
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const H = styled.div`
  color: #5D5FEF;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`

const P = styled.div`
  color: #6B7280;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`

const Pic = styled.div`
    font-size: 18px;
`

const CanvasLabel = () => {
    return (
        <Row className="h-100 align-items-center">
            <Col className="">
                <Pic>
                    <FontAwesomeIcon icon={faImage} />
                </Pic>
                <H>Перетащите сюда</H>
                <P>любой элемент <br/>из левой панели</P>
            </Col>
        </Row>
    );
};

export default CanvasLabel;