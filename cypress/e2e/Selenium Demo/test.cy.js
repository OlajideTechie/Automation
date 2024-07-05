/// <reference types="cypress" />
import WebPage from "./Pages/seleniumPage"

describe('Selenium Demo Test', () => {
  beforeEach(() => {
    
    //Visit the Webpage
          WebPage.PageVisit()
  })

  it('single input field submission in lowercase', () => {
  
   WebPage.TestCase1()
   
  })

  it('single input field submission in uppercase', () => {
  
    WebPage.TestCase2()
    
   })

   it('single input field submission in alphanumeric', () => {
  
    WebPage.TestCase3()
    
   })

   it('single input field submission in numbers', () => {
  
    WebPage.TestCase4()
    
   })

   it('Multiple input field submission of two valid numbers', () => {
  
    WebPage.TestCase5()
    
   })

   it('Autocloseable Success Message', () => {
  
    WebPage.TestCase6()
    
   })

   it('Normal Success Message', () => {
  
    WebPage.TestCase7()
    
   })

   it('Autocloseable Warning Message', () => {
  
    WebPage.TestCase8()
    
   })

   it('Normal Warning Message', () => {
  
    WebPage.TestCase9()
    
   })

   it('Autocloseable Danger Message', () => {
  
    WebPage.TestCase10()
    
   })

   it('Normal Danger Message', () => {
  
    WebPage.TestCase11()
    
   })


   it('Autocloseable Info Message', () => {
  
    WebPage.TestCase12()
    
   })


   it('Normal Info Message', () => {
  
    WebPage.TestCase13()
    
   })
})
