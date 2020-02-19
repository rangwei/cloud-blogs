import React from 'react';
import Question from './Question';          
import $ from 'jquery';

class Survey extends React.Component {
    constructor(props) {
        super(props);
        this.state = { q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 };


        this.change = this.change.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {


        const url = 'https://arctic-backend-silly-cassowary.cfapps.eu10.hana.ondemand.com/api/v1/feedback/create';

        let result = { id: 1 };

        const q1 = { question: 1, answer: this.state.q1 };
        const q2 = { question: 2, answer: this.state.q1 };
        const q3 = { question: 3, answer: this.state.q1 };
        const q4 = { question: 4, answer: this.state.q1 };
        const q5 = { question: 5, answer: this.state.q1 };

        result.answers = [q1, q2, q3, q4, q5];

        var jsonData = JSON.stringify(result);

        console.log(jsonData);

        $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json",
            dataType: "json",

            data: jsonData,
            success: function (data) {

                console.log("success" + data);
                alert("Successfully submited!");
            },
            error: function (e) {
                console.log("error: " + e);
            }
        });

        event.preventDefault();
    }

    change(event) {

        console.log(event.target.name); //g1
        console.log(event.target.value); //0

        switch(event.target.name) {
            case 'g1':
                this.setState({q1: event.target.value});
            case 'g2':
                this.setState({q2: event.target.value});
            case 'g3':
                this.setState({q3: event.target.value});
            case 'g4':
                this.setState({q4: event.target.value});
            case 'g5':
                this.setState({q5: event.target.value});
            default:
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>


                <Question question="1.对此次活动的总体感觉" name="g1" handleChange={this.change}/>
                <Question question="2.对分会场课程的评价" name="g2" handleChange={this.change}/>
                <Question question="3.对饮食的评价" name="g3" handleChange={this.change}/>
                <Question question="4.对环境的评价" name="g4" handleChange={this.change}/>
                <Question question="5.对行程安排的评价" name="g5" handleChange={this.change}/>
               
                <input type="submit" value="Submit" />


            </form>
        );
    }
}

export default Survey;
