import React, { Fragment } from 'react'
import Avatar from '../../assets/images/users/jennifer.png';
import {NewPostContainer, AvatarImg, Input, Button, ButtonImg} from '../../style/NewPost'
import button from '../../assets/svgs/send_button.svg'

const NewPost = () => {
    return (
        <Fragment>
            <NewPostContainer>
                <AvatarImg src={Avatar} />
                <Input type='text'
                    placeholder="What's on your mind, Aleksandra?"
                     />
                <Button>
                    <ButtonImg src={button} />
                </Button>
            </NewPostContainer>
        </Fragment>
    )
}

export default NewPost
