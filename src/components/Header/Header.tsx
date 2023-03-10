import React from 'react';
import {Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faEye} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {clear, setDisplayText} from "../../redux/calculatorSlice";
import styled from "styled-components";
import {setRuntime} from "../../redux/appSlice";

const MyNav = styled(Nav)`
  width: 530px;
  .nav-item {
    background-color: #F3F4F6;
    border: 2px solid #F3F4F6;
    border-radius: 5px;
  }
  .nav-link {
    color: #4D5562;
    background-color: #F3F4F6;
  }
  .nav-link.active {
    color: #4D5562;
    background-color: white;
  }
  span {
    color: #5D5FEF;
    font-size: 10px;
    font-weight: bold;
  }
`

const Header = () => {
    const isRuntime = useSelector((state: RootState) => state.app.isRuntime)
    const dispatch = useDispatch()

    const enableRuntimeMode = () => {
        dispatch(setRuntime(true))
    }

    const disableRuntimeMode = () => {
        dispatch(setRuntime(false))
        dispatch(clear())
        dispatch(setDisplayText(null))
    }

    return (
        <MyNav variant="pills py-3 justify-content-sm-end">
            <Nav.Item>
                <Nav.Link eventKey="link-0" active={isRuntime} onClick={enableRuntimeMode}>
                    <FontAwesomeIcon icon={faEye}/> Runtime
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" active={!isRuntime} onClick={disableRuntimeMode}>
                    <span><FontAwesomeIcon icon={faChevronLeft}/></span>
                    <span><FontAwesomeIcon icon={faChevronRight}/></span> Constructor
                </Nav.Link>
            </Nav.Item>
        </MyNav>
    );
};

export default Header;