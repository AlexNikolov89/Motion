import React, {Fragment} from 'react';
import SpinnerImg from '../../assets/spinner.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img src={SpinnerImg}
                alt='loading...'
                style={{ width: 70, margin: 'auto', display: 'block' }} />
        </Fragment>
    )
}

export default Spinner;
