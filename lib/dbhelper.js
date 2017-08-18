'use strict'

module.exports = (knex) => {
  return{

    newList: (uri) => {
      return knex.table('lists')
        .insert({
          uri
        }).returning('id')
    },

    newSearch: (input,uri) => {
      return knex.table('searches')
        .insert({
          MaximumPrice:input.MaximumPrice,
          MinimumPrice:input.MinimumPrice,
          Keywords:input.Keywords,
          Sort:input.Sort,
          SearchIndex:input.SearchIndex,
          list_uri:uri
        }).returning('id')
    },

    getQueryParams: (uri) => {
      return knex.table('searches')
        .select('Keywords','MinimumPrice','MaximumPrice','Sort','SearchIndex')
        .whereIn('list_uri',uri)
        .orderBy('created_at','desc')
        .limit(1)
    }

  }
};