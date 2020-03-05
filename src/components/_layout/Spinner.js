import React, { Fragment } from 'react';

const Spinner = () => {
    return (
        <Fragment>
            <span className="spinner-border text-secondary text-center" role="status">
                <span className="sr-only">Loading...</span>
            </span>
            <span className="text-secondary ml-2">Loading...</span>
        </Fragment>
    )
}

export default Spinner;
