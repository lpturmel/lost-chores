import { Component } from "solid-js";

export interface ModalFooterProps {}

const ModalFooter: Component<ModalFooterProps> = (props) => {
    return <div className="px-4 py-4">{props.children}</div>;
};

export default ModalFooter;
