const url = 'http://carrantee.com/buyorder-register1.php'




describe('check shop', () => {
  it('TC1', () => {
    cy.visit(url)

    cy.get('[value="นาย"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > [type="text"]').type('บูรพา หล่อเหลา')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('มุกดาหาน')
    cy.get('[name="contact"]').type('099-999-999')
    cy.get('#inputField').click()
    cy.get('.boxMainInner').click()
    cy.get(':nth-child(7) > :nth-child(2) > input').type('Tokota')
    cy.get(':nth-child(8) > :nth-child(2) > input').type('P1')
    cy.get('[name="carid"]').type('ฟก 3050')
    cy.get('[style="color: #000"] > input').type('อุดรธานี')
    cy.get(':nth-child(10) > :nth-child(2) > input').type('236565552232')
    cy.get('[width="99"] > span > input').click()
  })
})