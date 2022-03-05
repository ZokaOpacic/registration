describe('register case', () => {

    it('register with spaces', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id = "first-name"]').type('     ');
        cy.get('input[id = "last-name"]').type('     ');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })

    it('email without ".com"', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })

    it('email without "@"', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })

    it('Already registrated email', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('marabuba@gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })

    it('Password with 8 letters', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opaciczo');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })

    it('password with 7 characters', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opacic1');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })

    it('passwors and confirmed password does not match', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic14zo');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })

    it('registration with valid credentials', () => {
        cy.visit('/');
        cy.get('a[href="/register"]').click();
        cy.get('input[id = "first-name"]').type('Zorica');
        cy.get('input[id = "last-name"]').type('Opacic');
        cy.get('input[id = "email"]').type('83opacic83@gmail.com');
        cy.get('input[id = "password"]').type('opacic1412');
        cy.get('input[id = "password-confirmation"]').type('opacic1412');
        cy.get(':checkbox').check();
        cy.get('button').click();
    })
})