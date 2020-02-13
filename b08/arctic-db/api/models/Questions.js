/**
 * Questions.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    qu_owner: {
      model: 'Questionnaires'
    },

    name: {type: 'string', required: true}
  },

};

