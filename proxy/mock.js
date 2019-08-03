'use strict'

const { Mock } = require('../models')

module.exports = class MockProxy {
  static newAndSave (docs) {
    return Mock.insertMany(docs)
  }

  static getById (mockId) {
    return Mock.findById(mockId).populate('project')
  }

  static find (query, opt) {
    return Mock.find(query, {}, opt).populate('project')
  }

  static findOne (query, opt) {
    return Mock.findOne(query, {}, opt).populate('project')
  }

  static updateById (mock) {
    return Mock.findByIdAndUpdate(mock.id, {
      $set: {
        url: mock.url,
        mode: mock.mode,
        method: mock.method,
        parameters: mock.parameters,
        description: mock.description,
        response_model: mock.response_model,
        dd_notity: mock.dd_notity
      }
    }).populate('project')
  }

  static updateMany (docs) {
    return Promise.all(docs.map(item => this.updateById(item)))
  }

  static delByIds (mockIds) {
    return Mock.remove({
      _id: {
        $in: mockIds
      }
    })
  }

  static del (query) {
    return Mock.remove(query)
  }
}
