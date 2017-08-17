'use strict'

module.exports = (knex) => {
  return{

    newList: (uri) => {
      return knex.table('lists')
        .insert({
          uri
        }).returning('id')
    }


  }
};