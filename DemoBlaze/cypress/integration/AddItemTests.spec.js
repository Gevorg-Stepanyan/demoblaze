import { basePage } from "..\\support\\baseClasses\\BasePage.js"




describe('Add item in cart Positive Tests', () =>{
    beforeEach('Start', () =>{
        cy.visit('/')
        cy.wait(500)
        basePage.clickOnFirstItem()
        cy.get('[onclick="addToCart(1)"]').contains('Add to cart').click()

    })



    //There are bug on POST request   POST (canceled) /addtocart
    it('Add item to cart Positive', () =>{
        
        cy.reload()
        cy.get('[id="cartur"]').click
        
        cy.get('[id="tbodyid"]').should('contain', 'Samsung galaxy s6')
        
    })
})