import { Transition } from "solid-transition-group";
import { Accessor, Component } from "solid-js";
import { Portal } from "solid-js/web";

interface ModalProps {
    isOpen: Accessor<boolean>;
}
const Modal: Component<ModalProps> = (props) => {
    return (
        <Portal mount={document.getElementById("portal")!}>
            <Transition
                enterClass="opacity-0 scale-50"
                enterActiveClass="duration-200 ease-out"
                enterToClass="opacity-100 scale-100"
                exitClass="opacity-100 scale-100"
                exitActiveClass="duration-100 ease-in"
                exitToClass="opacity-0 scale-50"
            >
                {props.isOpen() && (
                    <div className="overflow-auto justify-start items-center fixed h-screen w-screen top-0 left-0 z-50">
                        {props.children}
                    </div>
                )}
            </Transition>
        </Portal>
    );
};
export default Modal;
