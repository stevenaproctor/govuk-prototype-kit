/* eslint-env jest */
var request = require('supertest')
var app = require('../../server.js')
/**
 * Check that basic auth
 */
describe('The Prototype Kit', () => {
  describe('basic auth', () => {
    it('should request user name ', async () => {
      const response = await request(app)
        .get('/')
        .auth('the-username', 'the-password')

      expect(response.statusCode).toBe(302)
    })
  })
})
