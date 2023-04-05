const url = 'https://mydroplink.firebaseapp.com/index.html'



describe('Check login', () => {
  it('TC1', () => {

    cy.visit(url)

    cy.get('#username').type('Thanitkarn')
    cy.get('#password').type('Jate1234')

    cy.get('[type="submit"]').click()

  })
  it('TC2', () => {

    cy.visit(url)

    cy.get('#username').type('Thanitk1212')
    cy.get('#password').type('Jate1111')

    cy.get('[type="submit"]').click()

  })
})
