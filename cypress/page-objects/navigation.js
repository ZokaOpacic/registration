class Navigation {
    get registerButton() {
        return cy.get('a[href="/register"]')
    }

    get loginButton() {
        return cy.get('a[href="/login"]')
    }

    get logoutButton() {
        return cy.get(".nav-link").eq()
    }

    clickRegisterButton() {
        this.registerButton.click()
    }

    clickLoginButton() {
        this.loginButton.click()
    }

    clickLogoutButton() {
        this.logoutButton.click()
    }
}

export const navigation = new Navigation()