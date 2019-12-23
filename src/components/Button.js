import React from 'react';

class Button extends React.Component {
    
    render() {
        return (
            <button 
            className="btn btn-info float-right" 
            onClick={this.handleClick}>
                    +
            </button>
        );
    }
    
    handleClick = () => {
        alert(this.props.alert);
    } 
}

export default Button;