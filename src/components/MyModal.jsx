import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';

export default function MyModal() {
    const [isModal, setIsModal] = useState(false);
    const toggle = () => {
        setIsModal(prev => !prev);
        console.log(isModal)
    }
  return (
    <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={toggle}>Open</button>
                <Modal show={isModal}>
                    <Modal.Header>Modal title</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-secondary" onClick={toggle}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
  )
}
