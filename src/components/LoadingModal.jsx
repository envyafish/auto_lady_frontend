// LoadingModal.js
import React from 'react';
import ReactModal from 'react-modal';
import ReactLoading from 'react-loading';

const LoadingModal = ({ isOpen, type = 'spin', color = '#000', height = 100, width = 100 }) => (
    <ReactModal
        isOpen={isOpen}
        contentLabel="Loading"
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                border: 'none',
                background: 'none',
            },
        }}
        ariaHideApp={false}
    >
        <ReactLoading type={type} color={color} height={height} width={width} />
    </ReactModal>
);

export default LoadingModal;
