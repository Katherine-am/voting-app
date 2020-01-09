import React from 'react';
import LibraryCard from './Library';

class App extends React.Component{
  render() {
    return (
      <div 
        className="container offset-4" 
        style={{textAlign:'center', marginTop:'5%'}}
      >
        <LibraryCard name="React" number="0" />
        <LibraryCard name="Vue" number="0" />
        <LibraryCard name="Angular" number="0" />
        <LibraryCard name="Ember" number="0" />
      </div>
    );
  }
}

export default App;
