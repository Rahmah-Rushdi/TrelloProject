class deleteListActions{
  deleteList(){
    cy.wait(2000) 
    cy.get("[data-testid='list-edit-menu-button']").first().click()
    cy.get("[data-testid='list-actions-archive-list-button']").click() 
  }
}
export default deleteListActions;