import React from "react";


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: this.props.text || "Button"
        };
    }

    render() {
        return (
            <Button>{this.state.text}</Button>
        );
    }
}
