import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component
{
    onClose = e => {
        this.props.onClose(e);
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal">
                <div className="modal-header">
                    <span>{this.props.title}</span>
                    { this.props.onClose !== null ? <button onClick={ e => {this.onClose(e);}}>Close</button> : null }
                </div>
                <div className="modal-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;