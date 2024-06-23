class deleteListAssertions{
    checkListDeleted(){
        cy.get("span").should('contain',"List archived")
    }
}
export default deleteListAssertions;