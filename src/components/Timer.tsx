import { Component, createEffect, createSignal } from "solid-js";
import { formatTime } from "../utils/date";

interface TimerProps {
    cb: Function;
}
const Timer: Component<TimerProps> = (props) => {
    const [time, setTime] = createSignal(props.cb());

    createEffect(() => {
        setInterval(() => {
            setTime(props.cb());
        }, 1000);
    });
    return <p>{formatTime(time())}</p>;
};

export default Timer;
