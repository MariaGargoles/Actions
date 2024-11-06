describe("Verificar que la página carga correctamente", () => {
  it("Debería cargar la página principal sin errores", () => {
    cy.visit("/");
    cy.url().should(
      "eq",
      "http://appreact.s3-website.eu-west-3.amazonaws.com/"
    );
    cy.get("body").should("be.visible");
  });
});
