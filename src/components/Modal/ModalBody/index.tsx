import { Component } from "solid-js";

export interface ModalBodyProps {}

const ModalBody: Component<ModalBodyProps> = (props) => {
    return <div className="z-50 px-4 py-4">{props.children}</div>;
};

export default ModalBody;
