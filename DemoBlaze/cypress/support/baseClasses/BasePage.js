


export class BasePage{

    clickOnFirstItem(){
        cy.get('[class="card-title"]').contains('Samsung galaxy s6').click()
        //
    }

}

export const basePage = new BasePage()