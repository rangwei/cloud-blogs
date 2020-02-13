module.exports = {


  friendlyName: 'Create',


  description: 'Create feedback.',


  inputs: {
    id: {type: 'number', required: true},
    answers:{type: 'ref'}
  },

  exits: {
    success: {
      statusCode: 201,
     description: 'Feedback created successful!' 
    }
  },


  fn: async function (inputs) {

    // const q = {"name": "questionnaire 4"};
    // const create = await Questionnaires.create(q);
    
    const feedback = {
      "fb_owner": inputs.id
    };

    const createdFeedback = await Feedbacks.create(feedback).fetch();

    let answers = inputs.answers.map(
      (input) => {
        input.feedback = createdFeedback.id;
        return input;
        }
    );

    const createdAnswers = await Answers.createEach(answers).fetch();
    

    return createdFeedback;

  }


};
