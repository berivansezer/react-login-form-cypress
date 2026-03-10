describe("Login Page", () => {

  it("visits login page", () => {
    cy.visit("http://localhost:5176")
    cy.contains("Login")
  })

  it("button disabled when form empty", () => {
    cy.visit("http://localhost:5176")
    cy.get('[data-cy="submit"]').should("be.disabled")
  })

  it("fills form and submits", () => {
    cy.visit("http://localhost:5176")

    cy.get('input[name="email"]').type("test@test.com")
    cy.get('input[name="password"]').type("12345678")
    cy.get('input[name="terms"]').check()

    cy.get('[data-cy="submit"]').click()

    cy.contains("Success")
  })

})