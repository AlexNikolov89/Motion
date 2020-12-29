import React, { Fragment, useState } from 'react';
import {useDispatch} from 'react-redux'
import {
	ModalExtContainer,
	ModalIntContainer,
	ContentSection,
	ActionsModal,
    AttachmentsModal,
    Button
} from '../../style/Modal.js';
import imgIcon from '../../assets/svgs/icon-image.svg';
import linkIcon from '../../assets/svgs/icon-link.svg';
import avatar from '../../assets/images/users/jennifer.png';
import send from '../../assets/svgs/send_button.svg';
import {newPostAction} from '../../store/actions/newPostAction'

const Modal = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(true)
    const [content, setContent] = useState('')
    const [picture, setPicture] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        const getData = async () => {
            const data = await dispatch(newPostAction(content));
            console.log(data)
        };
        getData()
    }

    const addPicHandler = e => {
		setPicture(URL.createObjectURL(e.target.files[0]));
	};


    const showModalHandler = () => {
        setShowModal(showModal => !showModal)
    }

	return (
        <Fragment>
            {showModal ? (
                <ModalExtContainer>
					<ModalIntContainer>
						<ContentSection>
							<img src={avatar} width='70px' alt='avatar' />
							<textarea
								name=''
								id=''
								cols='50'
                                rows='5'
                                value={content}
                                onChange={e => setContent(e.target.value)}
							></textarea>
						</ContentSection>
						<ActionsModal>
							<AttachmentsModal>
								<label htmlFor='img-attach'>
                                    <img src={imgIcon} width='35px' alt='attach-img'
                                    value={picture} onChange={e => setPicture(e.target.value)} />
								</label>
								<input type='file' id='img-attach' />
								<label htmlFor='link-attach'>
									<img src={linkIcon} width='35px' alt='attach-link' />
								</label>
								<input type='file' id='link-attach' />
							</AttachmentsModal>
							<Button>
								<img src={send} alt='send' onClick={submitHandler} />
							</Button>
						</ActionsModal>
						<i className='fas fa-times' onClick={showModalHandler}></i>
					</ModalIntContainer>
				</ModalExtContainer>
            ) : null}
				
		</Fragment>
	);
};

export default Modal;

