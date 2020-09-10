import React from "react";
import "./Timer.css";

class Timer extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            start: this.props.start,
            timer: '00:00:00'
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        const now = new Date();
        const seconds = Math.floor((now - this.state.start) / 1000);
        const timer = this.formatTimer(seconds);
        this.setState({
            timer: timer
        });
    }

    formatTimer(total_seconds) {
        const hours = Math.floor(total_seconds / 3600);
        const minutes = Math.floor((total_seconds - (hours * 3600)) / 60);
        const seconds = total_seconds - (hours * 3600) - (minutes * 60);

        let timer_string = hours < 10 ? '0' + hours : hours;
        timer_string += ":" + (minutes < 10 ? '0' + minutes : minutes);
        timer_string += ":" + (seconds < 10 ? '0' + seconds : seconds);

        return timer_string;
    }

    render () {
        return (
            <div className="timer">
                { this.state.timer }
            </div>
        )
    }
}

export default Timer;