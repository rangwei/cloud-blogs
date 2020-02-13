/**
 * Questionnaires.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {type: 'string', required: true},
    
    questions:  {
      collection: 'questions',
      via: 'qu_owner'
    },

    feedbacks: {
      collection: 'feedbacks',
      via: 'fb_owner'
    }

  },

};

