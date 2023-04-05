const url = 'https://mydroplink.firebaseapp.com/html/register.html'

describe('Check Sign up', () => {
  it('TC1', () => {
    cy.visit(url)
    cy.get('#username').type('Thanitkarn')
    cy.get('#password').type('Jate1234')
    cy.get('#repassword').type('Jate1234')
    cy.get('#signin > input').click()


  })
  it('TC2', () => {
    cy.visit(url)
    cy.get('#username').type('Thanitk121')
    cy.get('#password').type('Jate1111')
    cy.get('#repassword').type('Jate11')
    cy.get('#signin > input').click()


  })
})