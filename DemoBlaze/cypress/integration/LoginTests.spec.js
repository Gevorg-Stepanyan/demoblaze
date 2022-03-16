import { login } from "..\\support\\baseClasses\\LoginPage.js"

describe('Login Positive Tests', () =>{
    beforeEach('Start', () =>{
        cy.visit('/')

    })

    it('Login Positive', () =>{
        var username = 'gevorg';
        var password = 'Test1234';

        login.loginPositive(username, password)
        cy.get('[onclick="logOut()"]').should('contain', 'Log out')
    })
})