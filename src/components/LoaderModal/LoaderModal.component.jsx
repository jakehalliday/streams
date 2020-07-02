import React from 'react'
import ReactDOM from 'react-dom'

const LoaderModal = () => {

return ReactDOM.createPortal(
        <div className='ui active dimmer'>
          <div className='ui loader'></div>
        </div>,
      document.querySelector('#modal')
    );
};

export default LoaderModal;