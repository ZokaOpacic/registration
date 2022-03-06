const { faker } = require('@faker-js/faker');
import { navigation } from '../page-objects/navigation.js'
import { registerObjects } from '../page-objects/registerObjects.js'

describe('register case', () => {
    beforeEach("visit app", () => {
        cy.visit('/')
        navigation.clickRegisterButton()
    })

    let userData = {
        randomName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email()
    }

    it('register with spaces', () => {
        registerObjects.register('     ', '     ', '83opacic83@gmail.com', 'opacic1412', 'opacic1412')
    })

    it('email without ".com"', () => {
        registerObjects.register('Zorica', 'Opacic', '83opacic83@gmail', 'opacic1412', 'opacic1412')
    })

    it('email without "@"', () => {
        registerObjects.register('Zorica', 'Opacic', '83opacic83gmail.com', 'opacic1412', 'opacic1412')
    })

    it('Already registrated email', () => {
        registerObjects.register('Zorica', 'Opacic', 'marabuba@gmail.com', 'opacic1412', 'opacic1412')
    })

    it('Password with 8 letters', () => {
        registerObjects.register('Zorica', 'Opacic', '83opacic83@gmail.com', 'opaciczo', 'opacic1412')
    })

    it('password with 7 characters', () => {
        registerObjects.register('Zorica', 'Opacic', '83opacic83@gmail.com', 'opacic1', 'opacic1412')
    })

    it('passwors and confirmed password does not match', () => {
        registerObjects.register('Zorica', 'Opacic', '83opacic83@gmail.com', 'opacic1412', 'opacic14zo')
    })

    it('registration with valid credentials', () => {
        registerObjects.register(userData.randomName, userData.randomLastName, userData.randomEmail, 'opacic1412', 'opacic1412')
    })
})