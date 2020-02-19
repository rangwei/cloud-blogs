import React from 'react';
import $ from 'jquery';

class Survey extends React.Component {
    constructor(props) {
        super(props);
        this.state = { p1: 0, p2: 0, p3: 0, p4: 0, p5: 0 };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({ p1: event.target.value });
    }
    handleChange2(event) {
        this.setState({ p2: event.target.value });
    }
    handleChange3(event) {
        this.setState({ p3: event.target.value });
    }
    handleChange4(event) {
        this.setState({ p4: event.target.value });
    }
    handleChange5(event) {
        this.setState({ p5: event.target.value });
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.p1 + this.state.p2);

        const url = 'https://arctic-backend-silly-cassowary.cfapps.eu10.hana.ondemand.com/api/v1/feedback/create';

        let result = { id: 1 };

        const q1 = { question: 1, answer: this.state.p1 };
        const q2 = { question: 2, answer: this.state.p1 };
        const q3 = { question: 3, answer: this.state.p1 };
        const q4 = { question: 4, answer: this.state.p1 };
        const q5 = { question: 5, answer: this.state.p1 };

        result.answers = [q1, q2, q3, q4, q5];

        var jsonData = JSON.stringify(result);


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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>



                <label>1.对此次活动的总体感觉:</label><br />
                <input type="radio" id="g1_r1" name="g1" value="0" onChange={this.handleChange1} />
                <label for="g1_r1">非常满意</label>
                <input type="radio" id="g1_r2" name="g1" value="1" onChange={this.handleChange1} />
                <label for="g1_r2">比较满意</label>
                <input type="radio" id="g1_r3" name="g1" value="2" onChange={this.handleChange1} />
                <label for="g1_r3">满意</label>
                <input type="radio" id="g1_r4" name="g1" value="3" onChange={this.handleChange1} />
                <label for="g1_r4">不满意</label>
                <input type="radio" id="g1_r5" name="g1" value="4" onChange={this.handleChange1} />
                <label for="g1_r5">非常不满意</label>

                <br /><br />
                <label for="">2.对分会场课程的评价:</label><br />
                <input type="radio" id="g2_r1" name="g2" value="0" onChange={this.handleChange2} />
                <label for="g2_r1">非常满意</label>
                <input type="radio" id="g2_r2" name="g2" value="1" onChange={this.handleChange2} />
                <label for="g2_r2">比较满意</label>
                <input type="radio" id="g2_r3" name="g2" value="2" onChange={this.handleChange2} />
                <label for="g2_r3">满意</label>
                <input type="radio" id="g2_r4" name="g2" value="3" onChange={this.handleChange2} />
                <label for="g2_r4">不满意</label>
                <input type="radio" id="g2_r5" name="g2" value="4" onChange={this.handleChange2} />
                <label for="g2_r5">非常不满意</label>
                <br /><br />
                <label for="">3.对饮食的评价:</label><br />
                <input type="radio" id="g3_r1" name="g3" value="0" onChange={this.handleChange3} />
                <label for="g3_r1">非常满意</label>
                <input type="radio" id="g3_r2" name="g3" value="1" onChange={this.handleChange3} />
                <label for="g3_r2">比较满意</label>
                <input type="radio" id="g3_r3" name="g3" value="2" onChange={this.handleChange3} />
                <label for="g3_r3">满意</label>
                <input type="radio" id="g3_r4" name="g3" value="3" onChange={this.handleChange3} />
                <label for="g3_r4">不满意</label>
                <input type="radio" id="g3_r5" name="g3" value="4" onChange={this.handleChange3} />
                <label for="g3_r5">非常不满意</label>
                <br /><br />
                <label for="">4.对环境的评价:</label><br />
                <input type="radio" id="g4_r1" name="g4" value="0" onChange={this.handleChange4} />
                <label for="g4_r1">非常满意</label>
                <input type="radio" id="g4_r2" name="g4" value="1" onChange={this.handleChange4} />
                <label for="g4_r2">比较满意</label>
                <input type="radio" id="g4_r3" name="g4" value="2" onChange={this.handleChange4} />
                <label for="g4_r3">满意</label>
                <input type="radio" id="g4_r4" name="g4" value="3" onChange={this.handleChange4} />
                <label for="g4_r4">不满意</label>
                <input type="radio" id="g4_r5" name="g4" value="4" onChange={this.handleChange4} />
                <label for="g4_r5">非常不满意</label>
                <br /><br />
                <label for="">5.对行程安排的评价:</label><br />
                <input type="radio" id="g5_r1" name="g5" value="0" onChange={this.handleChange5} />
                <label for="g5_r1">非常满意</label>
                <input type="radio" id="g5_r2" name="g5" value="1" onChange={this.handleChange5} />
                <label for="g5_r2">比较满意</label>
                <input type="radio" id="g5_r3" name="g5" value="2" onChange={this.handleChange5} />
                <label for="g5_r3">满意</label>
                <input type="radio" id="g5_r4" name="g5" value="3" onChange={this.handleChange5} />
                <label for="g5_r4">不满意</label>
                <input type="radio" id="g5_r5" name="g5" value="4" onChange={this.handleChange5} />
                <label for="g5_r5">非常不满意</label>
                <br /><br />
                <input type="submit" value="Submit" />


            </form>
        );
    }
}

export default Survey;
