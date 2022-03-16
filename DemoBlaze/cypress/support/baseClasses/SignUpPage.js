export class SignUpPage{

    signUpPositive(useername, password){
         cy.get('[id="signin2"]').should('be.visible')
        cy.get('[id="signin2"]').click()
        cy.get('[id="sign-username"]').type(useername)
        cy.get('[id="sign-password"]').type(password)
        cy.wait(500)
        cy.get('[onclick="register()"]').click()
        
        

    }
}

export const signUp = new SignUpPage()