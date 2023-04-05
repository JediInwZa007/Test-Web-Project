const url = 'http://carrantee.com/buyorder-register2.php'


describe('page2', () => {
  it('passes', () => {
    cy.visit(url)

    cy.get('[value="นางสาว"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > [type="text"]').type('บูรพา เลิศสกุลทิพย์')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('บ้านกุดจับ โนนสูง มุกดาหาน')
    cy.get('[name="contact"]').type('ASDSA5678')
    cy.get('[name="idcard"]').type('14199000000002')
    cy.get('#inputField').click()
    cy.get('.boxMainInner').click()
    cy.get(':nth-child(7) > :nth-child(2) > input').type('Toyota')
    cy.get(':nth-child(8) > :nth-child(2) > input').type('Toyota Yaris')
    cy.get('[name="carid"]').type('กด 3090')
    cy.get('[style="color: #000"] > input').type('อุดรธานี')
    cy.get(':nth-child(10) > :nth-child(2) > input').type('123456789999')
    cy.get('[width="99"] > span > input').click()
    
  })
})