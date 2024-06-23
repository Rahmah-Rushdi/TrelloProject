class updateListAssertions{
    checkListNameContainValue(){
        cy.findByTestId("list-name-textarea").should('contain',"new name")
        return this;
    }

}
export default updateListAssertions;