import React, { Fragment } from 'react';
import { useState } from 'react/cjs/react.development';
import {ModalExtContainer, ModalIntContainer, ModalContainer, ButtonContainer, ButtonNo, ButtonYes} from '../../style/DeleteModal'

const DeleteModal = () => {
    const [showModal, setShowModal] = useState(true)

    const showModalHandler = () => {
        setShowModal(showModal => !showModal)
    }

    return (
        <Fragment>
            {showModal ? (
                <ModalExtContainer>
                <ModalIntContainer>
                    <i className='fas fa-times' onClick={showModalHandler} />
                </ModalIntContainer>
                <ModalContainer>
                    <i class="fas fa-trash"></i>
                    <h3>Are you sure you want to do this?</h3>
                </ModalContainer>
                <ButtonContainer>
                    <ButtonNo>NO</ButtonNo>
                    <ButtonYes>YES</ButtonYes>
                </ButtonContainer>
            </ModalExtContainer>
            ) : null}
        </Fragment>
    )
}

export default DeleteModal;
