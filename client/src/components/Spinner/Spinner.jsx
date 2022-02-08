import React from 'react';

const Spinner = () => {
    return (
        <div className="container text-center mt-5">
            <div
                className="spinner-border"
                style={{ width: '3rem', height: '3rem' }}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
            <div
                className="spinner-grow"
                style={{ width: '3rem', height: '3rem' }}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
