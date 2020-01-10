import React from 'react';
import styled from 'styled-components';

import VotingCard from './VotingCard';

const Wrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  margin-top: 2em;
`;

class App extends React.Component{
  render() {
    return (
    <Wrapper>
        <VotingCard name="React" />
        <VotingCard name="Vue" />
        <VotingCard name="Angular" />
        <VotingCard name="Ember" />
      </Wrapper>
    );
  }
}

export default App;
