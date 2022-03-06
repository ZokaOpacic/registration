class RegisterPage {
    get firstNameInput() {
        return cy.get('input[id = "first-name"]')
    }

    get lastNameInput() {
        return cy.get('input[id = "last-name"]')
    }

    get emailInput() {
        return cy.get('input[id = "email"]')
    }

    get passwordInput() {
        return cy.get('input[id = "password"]')
    }

    get passwordConfirmInput() {
        return cy.get('input[id = "password-confirmation"]')
    }

    get checkBox() {
        return cy.get(':checkbox')
    }

    get submitButton() {
        return cy.get('button')
    }

    register(firstName, lastName, email, password, passwordConfirm) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.passwordConfirmInput.type(passwordConfirm)
        this.checkBox.check()
        this.submitButton.click()
    }
}

export const registerObjects = new RegisterPage()