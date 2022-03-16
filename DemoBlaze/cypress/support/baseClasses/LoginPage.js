

export class LoginPage{
    

    loginPositive(username, password){

        cy.get('[id="login2"]').click()

        // cy.get('[class="nav-item"]').contains('Log in').click()
        
        cy.get('[id="loginusername"]').type(username)
        cy.wait(500)
        cy.get('[id="loginpassword"]').type(password)
        cy.wait(500)
        cy.get('[onclick="logIn()"]').click()
        cy.wait(500)

        

        

    }

}

export const login = new LoginPage()