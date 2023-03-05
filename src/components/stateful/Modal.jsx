import React from 'react'
import "./Modal.module.css"

const Modal = ({content, closeModal}) => {

    const callCloseModal = () => {
        closeModal()
    }
  return (
        <div className='modal'>
            {content}
        <button onClick={callCloseModal}></button>
        </div>
  )
}

export default Modal