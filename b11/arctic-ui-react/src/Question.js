import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
            <label>{this.props.question}</label><br />
                <input type="radio" id="r1" name={this.props.name} value="0" onChange={this.props.handleChange} />
                <label for="g1_r1">非常满意</label>
                <input type="radio" id="r2" name={this.props.name} value="1" onChange={this.props.handleChange} />
                <label for="g1_r2">比较满意</label>
                <input type="radio" id="r3" name={this.props.name} value="2" onChange={this.props.handleChange} />
                <label for="g1_r3">满意</label>
                <input type="radio" id="r4" name={this.props.name} value="3" onChange={this.props.handleChange} />
                <label for="g1_r4">不满意</label>
                <input type="radio" id="r5" name={this.props.name} value="4" onChange={this.props.handleChange} />
                <label for="g1_r5">非常不满意</label>

                <br /><br />

            </div>
        );
    }
}

export default Question;
