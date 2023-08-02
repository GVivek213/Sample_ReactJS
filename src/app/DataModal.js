import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function DataModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div>
            <Modal isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
                style={{ width: "50px", height: "100px" }}>
                <h2>This is the text from Modal</h2>
                <p>I am vivek from Photon, working as Senior Software Engineer from July to till now.</p>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
            <button onClick={() => setModalIsOpen(true)}>Subscribe</button>
        </div>
    )
}

export default DataModal
