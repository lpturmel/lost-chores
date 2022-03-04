import { IoClose } from "solid-icons/io";
import { Component } from "solid-js";
import { Character } from "../types/config";

interface CharacterHeaderProps {
    character: Character;
}
const CharacterHeader: Component<CharacterHeaderProps> = (props) => {
    return (
        <div className="w-full h-[50px] p-4 flex flex-row text-white justify-between items-center">
            <div>
                <h1 className="font-bold text-xl"> {props.character.name} </h1>
            </div>
            <div className="flex flex-row justify-center items-center">
                <IoClose className="w-6 h-6" />
            </div>
        </div>
    );
};

export default CharacterHeader;
