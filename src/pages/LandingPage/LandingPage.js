import React, {Fragment} from 'react'
import {Container} from '../../style/LandingPage';
import LeftSide from '../../components/LeftSide/LeftSide'
import RightSide from '../../components/RightSide/RightSide';

const LandingPage = () => {
    return (
        <Fragment>
            <Container>
                <LeftSide />
                <RightSide />
            </Container>
        </Fragment>
    )
}

export default LandingPage;
