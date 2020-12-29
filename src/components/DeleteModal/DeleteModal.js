import React, { Fragment } from 'react';
import {ModalExtContainer, ModalIntContainer, ModalContainer} from '../../style/DeleteModal'

const DeleteModal = () => {
    return (
        <Fragment>
            <ModalExtContainer>
                <ModalIntContainer>
                    <i className='fas fa-times'></i>
                </ModalIntContainer>
                <ModalContainer>
                    <i class="fas fa-trash"></i>
                </ModalContainer>
            </ModalExtContainer>
        </Fragment>
    )
}

export default DeleteModal;
