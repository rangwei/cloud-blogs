/**
 * Feedbacks.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fb_owner: {
      model: 'Questionnaires',
    },

    answers: {
      collection: 'answers',
      via: 'feedback'
    }

  },

};
