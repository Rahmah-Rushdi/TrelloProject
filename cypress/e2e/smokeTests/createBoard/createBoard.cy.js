/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createAssertions from "../../../pageObjects/createBoard/assertions.cy";


const createBoardAction =new createBoardActions()
const createBoardAssertion=new createAssertions()

const boardName="My First Board"


Given("The user login in trello website",()=>{
    cy.loginToTrello()
})
When("Clicks on create button in navbar",()=>{
    createBoardAction.clickOnCreateButton()  
})
When("Chooses Create Board option",()=>{
    createBoardAction.chooseCreateBoardOption()
})
When("Types in Board title input field the board name",()=>{
    createBoardAction.typeInBoradTitleInputField(boardName)
})
When("Clicks on create button",()=>{
    createBoardAction.clickOnCreateBoardButton()
})
Then("The Board will be created successfully",()=>{
    createBoardAssertion.checkBoardNameContainValue(boardName).checkBoardNameIsVisible
    
})