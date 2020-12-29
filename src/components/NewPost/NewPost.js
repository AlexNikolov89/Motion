import React, { Fragment } from 'react'
import Avatar from '../../assets/images/users/jennifer.png';
import {NewPostContainer, AvatarImg, Input, Button, ButtonImg} from '../../style/NewPost'
import button from '../../assets/svgs/send_button.svg'
import { useState } from 'react/cjs/react.development';
import Modal from '../Modal/Modal'


const NewPost = () => {

    const [showModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(showModal => !showModal)
    }

    return (
        <Fragment>
            {showModal ? <Modal /> : null}
            <NewPostContainer>
                <AvatarImg src={Avatar} />
                <Input type='text'
                    placeholder="What's on your mind, Aleksandra?"
                    onClick={showModalHandler}
                     />
                <Button>
                    <ButtonImg src={button} />
                </Button>
            </NewPostContainer>
        </Fragment>
    )
}

export default NewPost
