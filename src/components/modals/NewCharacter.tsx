import { Component, createSignal } from "solid-js";
import Modal from "../Modal";
import ModalOverlay from "../Modal/ModalOverlay";
import { RiSystemAddFill } from "solid-icons/ri";
import ModalContent from "../Modal/ModalContent";
import ModalBody from "../Modal/ModalBody";
import Dropdown from "../Dropdown";
import { classMap } from "../../types/config";
import ModalFooter from "../Modal/ModalFooter";
import ModalHeader from "../Modal/ModalHeader";
import { createCharacter } from "../../utils/character";

const classArray = Object.keys(classMap).map((key) => ({
    game_class: parseInt(key),
    name: classMap[key].name,
    icon: classMap[key].icon,
}));

const NewCharacter: Component = (props) => {
    const [isOpen, setIsOpen] = createSignal(false);
    const [name, setName] = createSignal("");
    const [selected, setSelected] = createSignal(classArray[0]);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    const handleCreation = () => {
        console.log("Creating: ", name(), selected());
        createCharacter({
            name: name(),
            game_class: selected().game_class,
        });
    };

    const handleDropdownChange = (item: any) => {
        setSelected(item);
    };
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
                    <ModalHeader onClose={closeModal}>
                        Add Character
                    </ModalHeader>
                    <ModalBody>
                        <div className="w-full h-full flex flex-row justify-center items-center gap-2 p-2">
                            <Dropdown
                                onChange={handleDropdownChange}
                                value={selected()}
                                items={classArray}
                            />
                            <input
                                value={name()}
                                onChange={(e) => setName(e.currentTarget.value)}
                                placeholder="Your character name..."
                                className="px-2 h-[34px] appearance-none bg-transparent rounded-md border divider-color py-1 text-sm focus:ring-2 outline-none "
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-full h-full text-sm flex flex-row justify-end gap-4 items-center">
                            <button onClick={closeModal}>Cancel</button>
                            <button
                                onClick={handleCreation}
                                className="px-2 py-1 rounded-md border divider-color focus:ring-2"
                            >
                                Create
                            </button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NewCharacter;
