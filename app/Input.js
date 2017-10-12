import React from 'react'
import ReactDOM from 'react-dom'
//
//var Input = React.createClass({
//  getInitialState: function() {
//    return {typed: ''};
//  },
//  onChange: function(event) {
//    this.setState({typed: event.target.value});
//  },
//  render: function() {
//    return <div>
//        <input id="name" name="name" placeholder="John Malcovich" ></input>
//      </div>
//  }
//});
//ReactDOM.render(<Input/>, document.getElementById( 'app' ));

export default class Input extends React.Component {
    
    constructor (props) {
        super(props);
    }

    onFieldChange(event) {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    onDateChange(dateValue) {
        // for a date field, the value is passed into the change handler
        this.props.onChange('dateCommenced', dateValue);
    }
    
    render() {
        return <input id="name" name="name" placeholder="John Malkovich" onChange={this.onFieldChange.bind(this)} />
    }
}
