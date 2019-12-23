import React from 'react';
import Button from './Button';

class LibraryCard extends React.Component {
    render() {
        return (
            <div className="col-4" style={{marginTop:'2%'}}>
                <p 
                    style={{display:'inline-block'}} 
                    className="float-left">{this.props.number}
                </p>
                <p 
                    style={{display:'inline-block'}}>{this.props.name}
                </p>
                <Button alert={this.props.name}/>
            </div>
        );
    }
}

export default LibraryCard;