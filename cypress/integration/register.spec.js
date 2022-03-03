describe('register case', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('register with spaces', () => {
        cy.get('input[id = "first-name"]').type('     ');
        cy.get('input[id = "last-name"]').type('     ');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('email without ".com"', () => {
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('email without "@"', () => {
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('Already registrated email', () => {
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('marabuba@gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('Password with 8 letters', () => {
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opaciczo');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('password with 7 characters', () => {
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opacic1');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('passwors and confirmed password does not match', () => {
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic14zo');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it('click register button', () => {
        cy.get('a[href="/register"]').click()
    })
    it('registration with valid credentials', () => {
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })
})