/**
 * Answers.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    feedback: {
      model: 'Feedbacks', required: true
    },

    question: {
      model: 'Questions', required: true
    },

    answer: {
      type: 'number', required: true
    },

  },

};

