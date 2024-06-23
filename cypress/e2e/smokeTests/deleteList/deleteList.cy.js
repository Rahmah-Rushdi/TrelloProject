/// <reference types="cypress" />
import {  Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createAssertions from "../../../pageObjects/createBoard/assertions.cy";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import deleteListActions from "../../../pageObjects/deleteList/actions.cy";
import deleteListAssertions from "../../../pageObjects/deleteList/assertions.cy";


const createBoardAction=new createBoardActions()
const createBoardAssertion=new createAssertions()
const boardName="My First Board"

const createListAction=new createListActions()
const createListAssertion=new createListAssertions()
const listName="My First List"

const deleteListAction=new deleteListActions()
const deleteListAssertion=new deleteListAssertions()

before(()=>{
    //create board
    cy.loginToTrello()
    createBoardAction.clickOnCreateButton()  
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeInBoradTitleInputField(boardName)
    createBoardAction.clickOnCreateBoardButton()

    createBoardAssertion.checkBoardNameContainValue(boardName).checkBoardNameIsVisible()
    // create list
    createListAction.typeInListTitleInputField(listName)
    createListAction.clickOnAddListButton()
    createListAssertion.checkListNameContainValue(listName)
   
})
When("Clicks on menu list button",()=>{
    deleteListAction.deleteList()
})
Then("The list will be delete successfully",()=>{
    
    deleteListAssertion.checkListDeleted()
})