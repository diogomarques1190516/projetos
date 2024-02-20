/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare namespace Cypress {
    interface Chainable {
        googleLogin(): Chainable<void>
        //userLoginWithGmail():Chainable<void>
        shouldRedirect(): Chainable<void>
        loginWarehouseManager(): Chainable<void>
        loginFleetManager(): Chainable<void>
        loginLogisticsManager(): Chainable<void>
        loginByGoogleApi(): Chainable<void>
    }
}


Cypress.Commands.add('loginByGoogleApi', () => {
    cy.log('Logging in to Google')
    cy.request({
      method: 'POST',
      url: 'https://www.googleapis.com/oauth2/v4/token',
      body: {
        grant_type: 'refresh_token',
        client_id: '331782593215-fp5ugi0t8ucsuhp2dv9h5v6gg0cotsb7.apps.googleusercontent.com',//Cypress.env('googleClientId'),
        client_secret: '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',//Cypress.env('googleClientSecret'),
        refresh_token: '1//04S_h3fMuFRRECgYIARAAGAQSNwF-L9IrxWe6o7JYEozzE5fhIVDHv9GgmjvPskdVh8XYph2az7ZyG6AvCmPuZLdqePvkKi1Ziqo'
        //'1//04GaHy3srh6SQCgYIARAAGAQSNwF-L9Irb9ip9mCB2ZmU1011300TDRy3HeKS_3gJAEeh63bTomv-lXduRnG9c6HN6DdyhLEAqFs'
        
        //this is for joao - admin
        //'1//04fP7-cNxHjWGCgYIARAAGAQSNwF-L9IrqaGWDPjU9tqXgjkGPeFlpytege-gLJpmE-p_kglsSvXg2ioeLCDggF2onual5L_bDBA',
        //'eyJhbGciOiJSUzI1NiIsImtpZCI6ImEyOWFiYzE5YmUyN2ZiNDE1MWFhNDMxZTk0ZmEzNjgwYWU0NThkYTUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NzMwNTY5ODksImF1ZCI6IjMzMTc4MjU5MzIxNS1mcDV1Z2kwdDh1Y3N1aHAyZHY5aDV2NmdnMGNvdHNiNy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMjU2ODY2NjM3MzI3ODY2ODAxNyIsImVtYWlsIjoiam9hb3NpbHZhc3BhbGFwcjVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjMzMTc4MjU5MzIxNS1mcDV1Z2kwdDh1Y3N1aHAyZHY5aDV2NmdnMGNvdHNiNy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJKb2FvIFNpbHZhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FFZEZUcDVYMExfbndSOXM4MGR6c0pOYlhad0pIVF9oUzZYLUF5N2ppdWhYPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkpvYW8iLCJmYW1pbHlfbmFtZSI6IlNpbHZhIiwiaWF0IjoxNjczMDU3Mjg5LCJleHAiOjE2NzMwNjA4ODksImp0aSI6ImM0MDE5NWNiNWEwOTI4ZTk2MmIwYWEzYjMxYTQ3MjA4NDIyMzNjZjgifQ.G9GsKUYrSA3UevP7eXLXMkM5yFpWNdMZM9SflVbc99o1kiTXTJOGnulfTVDWd6xcNVonHFS7DRCO5G7Cp8PATrhch8zBSGnNU2Ky7kUkJ6153oYUtbnobSt_UCtT_7IUSj2-TOTAUZR9UK6zwQU2iikEs3H56yikwFIrSqJkWL6DsHpXU0I5uZydyQdcT3uBjuzwN1jH6GPBpHZWT9kvlpwFC7tzyjnBKcpdiEmGlpWOGOsRS3k3stX7e7Ig_7RXL6Kz3t1dYP-xQsz3L__HAhvnEAqKnLOSke395DlOOtTSEyDpePD2vqan4BNZ5Bsjp8_La1kL5vt9VeoOgvYJVg',//Cypress.env('googleRefreshToken'),
      },
    }).then(({ body }) => {
      const { access_token, id_token } = body
  
      cy.request({
        method: 'GET',
        url: 'https://www.googleapis.com/oauth2/v3/userinfo',
        headers: { Authorization: `Bearer ${access_token}` },
      }).then(({ body }) => {
        cy.log(body)
        const userItem = {
          token: id_token,
          user: {
            googleId: body.sub,
            email: body.email,
            givenName: body.given_name,
            familyName: body.family_name,
            imageUrl: body.picture,
          },
        }
        const options = {
            url: 'https://spalapr5.azurewebsites.net/frontpage',
            headers: { 'Authorization' : `Bearer ${id_token}`}
          }
          cy.visit(options)
        //window.localStorage.setItem('idToken', JSON.stringify(userItem))
        //cy.visit('https://spalapr5.azurewebsites.net/frontpage')
      })

      
    })
  })
  /*
Cypress.Commands.add('userLoginWithGmail', () => {
    const socialLoginOptions = {
    username: 'pedromarquesspalapr5@gmail.com',
    password: 'Lapr5good',
    loginUrl: 'https://spalapr5.azurewebsites.net/frontpage',
    headless: false,
    logs: true,
    loginSelector: 'asl-google-signin-button[id="asl-google-signin-button"]',
    postLoginSelector: '.account-panel',
    popupDelay: 3000,
    cookieDelay: 2000,
    args: [' — disable-web-security', ' — user-data-dir', ' — allow-running-insecure-content'],
    isPopup: true,
    getAllBrowserCookies: true
    }
    cy.task('GoogleSocialLogin', socialLoginOptions).then(({ cookies, lsd, ssd }) => {
    cookies.map((cookie) => {
    cy.setCookie(cookie.name, cookie.value, {
    domain: cookie.domain,
    expiry: cookie.expires,
    httpOnly: cookie.httpOnly,
    path: cookie.path,
    secure: cookie.secure
    })
    Cypress.Cookies.defaults({
    preserve: cookie.name
    })
    })
    cy.window().then(window => {
    Object.keys(ssd).forEach(key => window.sessionStorage.setItem(key, ssd[key]))
    Object.keys(lsd).forEach(key => window.localStorage.setItem(key, lsd[key]))
    })
    cy.log('login successful.')
    cy.visit('/');
    })
    })
    
*/
Cypress.Commands.add('googleLogin', () => {
    cy.visit('https://spalapr5.azurewebsites.net/frontpage');
    cy.get('#asl-google-signin-button').should('be.visible');
    cy.get('#asl-google-signin-button').click();
})

Cypress.Commands.add('shouldRedirect', () => {
    cy.contains('EletricGO')
    cy.get('#asl-google-signin-button').should('exist');
    cy.url().should('include', 'https://spalapr5.azurewebsites.net/frontpage');
})
 
Cypress.Commands.add('loginWarehouseManager', () => {
    //cy.googleLogin();
    //cy.userLoginWithGmail();
    cy.loginByGoogleApi();
})

Cypress.Commands.add('loginFleetManager', () => {
    cy.googleLogin();
})

Cypress.Commands.add('loginLogisticsManager', () => {
    cy.googleLogin();
})
