class updateListActions{
    updateOnInputField(){
       cy.get("[data-testid='list-name']").eq(0).click();

       cy.get("[data-testid='list-name-textarea']")
        .eq(0).wait(1000).type("new name",{force:true});
        return this;
    }

}
export default updateListActions;