class createListAssertions{
    checkListNameContainValue(listName){
        cy.findByTestId("list-name").should('contain',listName)
        return this;
    }
}
export default createListAssertions;