import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    display: inline-block;
    line-height: 2.5rem;
    height: 2.5rem;
    margin-bottom: 0rem;
`;

const Centered = styled(Paragraph)`
    margin-left: 45%;
    transform: translateX(-50%);
`;

const Button = styled.button`
    border: none;
    border-radius: 0.25em;
    background-color: teal;
    color: white;
    padding: 0.5em 1em;
    float: right;
`;

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

    }

    increment = () => this.setState({ count: this.state.count + 1});
    
    render() {
        return (
            <div>
                <Paragraph>{this.state.count}</Paragraph>
                <Centered>{this.props.alert}</Centered>
                <Button 
                    onClick = {() => {this.handleClick({'count': this.increment});}}>
                        +
                </Button>
            </div>
        );
    }
    
    handleClick = (e) => {
        this.setState({ count: this.state.count + 1});
    } 
}

export default Counter;