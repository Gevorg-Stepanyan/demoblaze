import { signUp } from "..\\support\\baseClasses\\SignUpPage.js"
import { login } from "..\\support\\baseClasses\\LoginPage.js"




 

describe('Sign up positive Tests', () => {

 
    beforeEach('Start', () =>{
        cy.visit('/')

    })

    it('Sign up Positive', ()=>{
        var username = 'gevorg';
        var password = 'Test1234';

        signUp.signUpPositive(username,password )
        cy.reload()
        
        login.loginPositive(username, password)
        cy.get('[onclick="logOut()"]').should('contain', 'Log out')

        

 
 

    })

})