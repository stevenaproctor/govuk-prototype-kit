/* eslint-env jest */
const request = require('supertest')
const app = require('../../server.js')
const misconfiguredMarkup = '<h1>Error:</h1><p>Username or password not set. ' +
                          '<a href="https://govuk-prototype-kit.herokuapp.com/docs/publishing-on-heroku#6-set-a-username-and-password">' +
                          'See guidance for setting these</a>.</p>'
/**
 * Check that basic auth
 */
describe('The Prototype Kit - Basic Auth', () => {
  describe('basic auth', () => {
    describe('misconfigured server  - no user name or password set', () => {
      xit('should return 501', async () => {
        const response = await request(app)
          .get('/')
          .auth('the-username', 'the-password')
        expect(response.statusCode).toBe(302)
      })

      it('should return HTML', async () => {
        const response = await request(app)
          .get('/')
          .auth('the-username', 'the-password')
        expect(response.type).toBe('text/html')
      })

      it('should return an error message for the user', async () => {
        const response = await request(app)
          .get('/')
          .auth('the-username', 'the-password')
        expect(response.text).toBe(misconfiguredMarkup)
      })
    })

    xdescribe('user provides invalid creditials', () => {
      xdescribe('incorrect username', () => {
        it('should return 401', () => {})
        it('should return a header WWW-Authenticate set', () => {})
      })
      xdescribe('incorrect password', () => {
        it('should return 401', () => {})
        it('should return a header WWW-Authenticate set', () => {})
      })
    })

    xdescribe('user provides valid creditials', () => {
      it('should return 200', () => {})
      it('should return HTML', () => {})

      it('should not return an error message to the user', async () => {
        const response = await request(app)
          .get('/')
          .auth('the-username', 'the-password')
        expect(response.text).not.toBe(misconfiguredMarkup)
      })
    })
  })
})
