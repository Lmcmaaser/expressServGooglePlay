const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Express Server Google Play App', () => {
    it('should return an array', () => {
        return supertest(app)
            .get('/apps')
            .query({ genre: 'Card' })
            .expect(200) // supertest expect
            .then(res => {
                expect(res.body).to.be.an('array');
                // here res is the full response data
                // you can use chai assertions to examine it fully
            })
    })
})