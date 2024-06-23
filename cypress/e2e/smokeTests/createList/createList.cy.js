/// <reference types="cypress" />
import {  Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createAssertions from "../../../pageObjects/createBoard/assertions.cy";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";

const createBoardAction=new createBoardActions()
const createBoardAssertion = new createAssertions()
const boardName="My First Board"

const createListAction=new createListActions()
const createListAssertion =new createListAssertions()
const listName="My First List"

before(()=>{
    cy.loginToTrello()
    createBoardAction.clickOnCreateButton()  
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeInBoradTitleInputField(boardName)
    createBoardAction.clickOnCreateBoardButton()
    createBoardAssertion.checkBoardNameContainValue(boardName).checkBoardNameIsVisible()   
})
When("Type in list title input field",()=>{
    createListAction.typeInListTitleInputField(listName)
})
When("Clicks on Add List button",()=>{
    createListAction.clickOnAddListButton()
})
Then("The list will be created successfully",()=>{
    
    createListAssertion.checkListNameContainValue(listName)
})