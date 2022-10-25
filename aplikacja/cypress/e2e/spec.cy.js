const BaseUrl = 'http://localhost:3000'


describe('login', () => {
  beforeEach(()=> { //afterEach
    cy.visit(BaseUrl)
  })

  it('wita uzytkownika', () => {
  
    cy.contains("Witaj świecie")
  })

  it('logowanie', () => {

    cy.login('wiki', 'FjR2qUBU0MXlkYY')
  
    // cy.get("#username").type("wiki");
    // cy.get("#password").type("FjR2qUBU0MXlkYY");
    // cy.get("button").click();
    cy.contains("Wyloguj")
  })

  it('logowanie mock', () => {
    cy.intercept({
      method: 'POST', 
      url: 'http://localhost:3001/user'
    }, 
    {"imie": "Wiktoria", 
      "nazwisko": "Leska", 
      "subskrypcja": true
    }
    )
    cy.get('#username').type('wiki')
    cy.get("#password").type("FjR2qUBU0MXlkYY");
    cy.get("button").click();
    cy.contains("Wyloguj")
  })
})