import { Component } from "solid-js";

export interface ModalOverlayProps {}

const ModalOverlay: Component<ModalOverlayProps> = () => {
    return (
        <div
            className="top-0 left-0 backdrop-blur-sm fixed h-screen w-screen z-10"
            style={{ background: "rgba(0, 0, 0, 0.48)" }}
        />
    );
};

export default ModalOverlay;
