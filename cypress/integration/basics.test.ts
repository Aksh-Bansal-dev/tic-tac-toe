describe("tic-tac-toe", () => {
  it("should successfully load", () => {
    cy.visit("https://aksh-bansal-dev.github.io/tic-tac-toe/");
  });

  it("should have title TIC TAC TOE", () => {
    cy.customVisit();
    cy.get("h2").should("have.text", "TIC TAC TOE");
  });

  it("should lose the game", () => {
    cy.customVisit();
    cy.get("div[class=box1]").click();
    cy.get("div[class=box4]").click();
    cy.get("div[class=box2]").click();
    cy.get("h4").should("have.text", "O is the winner!");
    cy.get("button[class=reset-btn]").click();
    cy.get("h4").should("not.be.visible");
  });

  it("should draw the game", () => {
    cy.customVisit();
    cy.get("div[class=box1]").click();
    cy.get("div[class=box9]").click();
    cy.get("div[class=box8]").click();
    cy.get("div[class=box3]").click();
    cy.get("div[class=box4]").click();
    cy.get("h4").should("have.text", "Draw");
    cy.get("button[class=reset-btn]").click();
    cy.get("h4").should("not.be.visible");
  });
});
