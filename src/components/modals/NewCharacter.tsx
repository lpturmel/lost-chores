import { Component, createSignal } from "solid-js";
import Modal from "../Modal";
import ModalOverlay from "../Modal/ModalOverlay";
import { RiSystemAddFill } from "solid-icons/ri";
import ModalContent from "../Modal/ModalContent";
import ModalBody from "../Modal/ModalBody";

const NewCharacter: Component = (props) => {
    const [isOpen, setIsOpen] = createSignal(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    return (
        <>
            <button
                onClick={openModal}
                className="p-2 flex justify-center items-center"
            >
                <RiSystemAddFill size={24} color="#979696" />
            </button>
            <div></div>
            <Modal isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent onClose={closeModal}>
                    <ModalBody>
                        <p> New Character </p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NewCharacter;
