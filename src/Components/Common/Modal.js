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
                    <div className="modal-title"><span>{this.props.title}</span></div>
                    { this.props.onClose !== null ? <div className="modal-close-button" onClick={ e => {this.onClose(e);}}>X</div> : null }
                </div>
                <div className="modal-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;