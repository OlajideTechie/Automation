const Url = "https://demo.seleniumeasy.com/basic-first-form-demo.html"
const Message1 = 'alexander junior'
const Message2 = 'ALEXANDER JUNIOR'
const Message3 = 'Alpha12345'
const Message4 = '78465748498'
const value_1 = 10
const value_2 = 10



class WebPage {

static PageVisit(){

    cy.visit(Url)
}

static TestCase1(){
    cy.get('.row > .col-md-6')
    cy.get(':nth-child(4) > .panel-body')
    cy.get('.form-group > #user-message').clear().type(Message1)
    cy.get('#get-input > .btn').click({force : true})
    cy.get('#display').contains(Message1)
    //cy.type('Alexander Junior')

}


static TestCase2(){
    cy.get('.row > .col-md-6')
    cy.get(':nth-child(4) > .panel-body')
    cy.get('.form-group > #user-message').clear().type(Message2)
    cy.get('#get-input > .btn').click({force : true})
    cy.get('#display').contains(Message2)
    //cy.type('Alexander Junior')

}

static TestCase3(){
    cy.get('.row > .col-md-6')
    cy.get(':nth-child(4) > .panel-body')
    cy.get('.form-group > #user-message').clear().type(Message3)
    cy.get('#get-input > .btn').click({force : true})
    cy.get('#display').contains(Message3)

}


static TestCase4(){
    cy.get('.row > .col-md-6')
    cy.get(':nth-child(4) > .panel-body')
    cy.get('.form-group > #user-message').clear().type(Message4)
    cy.get('#get-input > .btn').click({force : true})
    cy.get('#display').contains(Message4)

}

static TestCase5(){
    cy.get('.row > .col-md-6')
    cy.get(':nth-child(5) > .panel-body')
    cy.get('#value1').type(value_1)
    cy.get('#value2').type(value_2)
    cy.get('#gettotal > .btn').click()
    cy.get('[style="height: 50px; width: 100%;"]').contains('20')
   

}

static TestCase6(){
    cy.get('#treemenu > :nth-child(1)')
    cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)')
    cy.get(':nth-child(5) > [href="#"]').click()
    cy.get(':nth-child(5) > ul > :nth-child(1) > a').click()
    cy.get('.text-left > .row')
    cy.get('.text-left > .row > .col-md-4')
    cy.get('#autoclosable-btn-success').click()
    cy.get('.alert-autocloseable-success').contains("I'm an autocloseable success message. I will hide in 5 seconds.")

   

}

static TestCase7(){
    cy.get('#treemenu > :nth-child(1)')
    cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)')
    cy.get(':nth-child(5) > [href="#"]').click()
     cy.get(':nth-child(5) > ul > :nth-child(1) > a').click()
    cy.get('.text-left > .row')
    cy.get('.text-left > .row > .col-md-4')
    cy.get('#normal-btn-success').click()
    cy.get('.alert-normal-success').contains("I'm a normal success message. To close use the appropriate button.")
    //Cick to close the button 
    cy.get('.alert-normal-success > .close').click()

   

}



static TestCase8(){
    cy.get('#treemenu > :nth-child(1)')
    cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)')
    cy.get(':nth-child(5) > [href="#"]').click()
     cy.get(':nth-child(5) > ul > :nth-child(1) > a').click()
    cy.get('.text-left > .row')
    cy.get('.text-left > .row > .col-md-4')
    cy.get('#autoclosable-btn-warning').click()
    cy.get('.alert-autocloseable-warning').contains("I'm an autocloseable warning message. I will hide in 3 seconds.")

}


static TestCase9(){
    cy.get('#treemenu > :nth-child(1)')
    cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)')
    cy.get(':nth-child(5) > [href="#"]').click()
     cy.get(':nth-child(5) > ul > :nth-child(1) > a').click()
    cy.get('.text-left > .row')
    cy.get('.text-left > .row > .col-md-4')
    cy.get('#normal-btn-warning').click()
    cy.get('.alert-normal-warning').contains("I'm a normal warning message. To close use the appropriate button.")
     //Cick to close the button 
     cy.get('.alert-normal-warning > .close').click()



}


static TestCase10(){
    cy.get('#treemenu > :nth-child(1)')
    cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)')
    cy.get(':nth-child(5) > [href="#"]').click()
     cy.get(':nth-child(5) > ul > :nth-child(1) > a').click()
      cy.get('.text-left > .row')
     cy.get('.text-left > .row > .col-md-4')
     cy.get('#autoclosable-btn-danger').click()
     cy.get('.alert-autocloseable-danger').contains("I'm an autocloseable danger message. I will hide in 5 seconds.")

   

}


static TestCase11(){
    cy.get('#treemenu > :nth-child(1)')
    cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)')
    cy.get(':nth-child(5) > [href="#"]').click()
     cy.get(':nth-child(5) > ul > :nth-child(1) > a').click()
    cy.get('.text-left > .row')
    cy.get('.text-left > .row > .col-md-4')
    cy.get('#normal-btn-danger').click()
    cy.get('.alert-normal-danger').contains("I'm a normal danger message. To close use the appropriate button.")
    cy.get('.alert-normal-danger > .close').click()
   

}


static TestCase12(){
    cy.get('#treemenu > :nth-child(1)')
    cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)')
    cy.get(':nth-child(5) > [href="#"]').click()
     cy.get(':nth-child(5) > ul > :nth-child(1) > a').click()
    cy.get('.text-left > .row')
    cy.get('.text-left > .row > .col-md-4')
    cy.get('#autoclosable-btn-info').click()
    cy.get('.alert-autocloseable-info').contains("I'm an autocloseable info message. I will hide in 6 seconds.")
   

}


static TestCase13(){
    cy.get('#treemenu > :nth-child(1)')
    cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)')
    cy.get(':nth-child(5) > [href="#"]').click()
     cy.get(':nth-child(5) > ul > :nth-child(1) > a').click()
    cy.get('.text-left > .row')
    cy.get('.text-left > .row > .col-md-4')
    cy.get('#normal-btn-info').click()
    cy.get('.alert-normal-info').contains("I'm a normal info message. To close use the appropriate button.")
    cy.get('.alert-normal-info > .close').click()

   

}

}

export default WebPage