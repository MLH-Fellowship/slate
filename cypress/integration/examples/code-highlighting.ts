describe('code highlighting', () => {
  beforeEach(() => {
    cy.visit('examples/code-highlighting')
  })

  it('highlights HTML tags', () => {
    cy.findByRole('textbox')
      .contains('<h1>')
      .should('have.css', 'color', 'rgb(153, 0, 85)')
  })

  it('highlights javascript syntax', () => {
    const JSCode = 'const slateVar = 30;{enter}'
    cy.get('select').select('JavaScript') // Select the 'JavaScript' option

    cy.findByRole('textbox')
      .type('{movetostart}')
      .type(JSCode) // Type JavaScript code
      .contains('const')
      .should('have.css', 'color', 'rgb(0, 119, 170)')
  })
})
