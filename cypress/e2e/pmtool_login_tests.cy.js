describe("PMtool Login Tests", () => {
  it("Title exist", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("h3.form-title").should("exist");
  });
});
