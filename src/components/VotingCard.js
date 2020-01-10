import React from 'react';
import Counter from './Counter';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 1em 0em;
`;

class VotingCard extends React.Component {
    render() {
        return (
            <Wrapper>
                <Counter alert={this.props.name} />
            </Wrapper>
        );
    }
}

export default VotingCard;