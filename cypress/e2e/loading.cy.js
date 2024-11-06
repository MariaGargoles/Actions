describe("Verificar que la página carga correctamente", () => {
  it("Debería cargar la página principal sin errores", () => {
    cy.visit("/");

    cy.get("body").should("be.visible");
  });
});
