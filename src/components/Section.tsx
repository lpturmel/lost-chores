import { Component, JSX } from "solid-js";

interface SectionProps {
    title: string;
    icon?: JSX.Element;
}
const Section: Component<SectionProps> = (props) => {
    return (
        <div className="flex flex-col gap-y-2 p-4">
            <p className="text-xl font-semibold text-white"> {props.title} </p>
            {props.children}
        </div>
    );
};

export default Section;
