import React, { Fragment } from 'react';
import { useState } from 'react/cjs/react.development';
import {ModalExtContainer, ModalIntContainer, ModalContainer, ButtonContainer, ButtonNo, ButtonYes} from '../../style/DeleteModal'
import {deletePostAction} from '../../store/actions/deletePostAction'
import { useDispatch, useSelector } from 'react-redux';

const DeleteModal = () => {
    const [showModal, setShowModal] = useState(true)
    const dispatch = useDispatch();
    const id = useSelector(state => state.postReducer)
    const showModalHandler = () => {
        setShowModal(showModal => !showModal)
    }

    const deleteHandler = () => {
        // const data = dispatch(deletePostAction(id))
        // return data;

    }

    return (
        <Fragment>
            {showModal ? (
                <ModalExtContainer>
                <ModalIntContainer>
                    <i className='fas fa-times' onClick={showModalHandler} />
                </ModalIntContainer>
                <ModalContainer>
                    <i className="fas fa-trash"></i>
                    <h3>Are you sure you want to do this?</h3>
                </ModalContainer>
                <ButtonContainer>
                    <ButtonNo setShowModal={false}>NO</ButtonNo>
                    <ButtonYes onClick={deleteHandler}>YES</ButtonYes>
                </ButtonContainer>
            </ModalExtContainer>
            ) : null}
        </Fragment>
    )
}

export default DeleteModal;
