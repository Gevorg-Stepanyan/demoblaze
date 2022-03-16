
export class CartPage{

    chackOneItem(){
        cy.get('[id="tbodyid"]').contains('tr', 'Samsung galaxy s6')
    }

}

export const cartPage = new CartPage()