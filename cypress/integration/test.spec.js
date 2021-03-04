import data from '../fixtures/data.json'

describe('Search for products and add to cart', () => {
    before(() => {
        cy.visit('/')
        cy.viewport('macbook-15')
    })

    it('Search by keyword and verify results', function () {
        cy.get('#txt-searchBox-input').type(data.keyword)
        cy.get('#btn-searchBox-input').click()
        cy.get('#lnk-viewBreadcrumb-undefined > h1').should('be.visible').should('contain', 'TV')
    })

    it('Click product link, add to cart and verify', function () {
        cy.get('#lnk-viewProduct-' + data.product1.id + '-name').click()
        cy.get('#lbl-productName-productDetail').should('contain', data.product1.name)
        cy.get('#btn-addCart-' + data.product1.id).click()
        cy.get('div.Alert-jglfde-0.Notification__CustomAlert-lcdOEy.fmgHJA')
            .should('have.attr', 'type').and('include', 'success')
        cy.get('#btn-openMiniCart').click()
        cy.get('#lnk-viewProduct-' + data.product1.id).should('be.visible')
    })

    it('Search by keyword again and verify results', function () {
        cy.get('#txt-searchBox-input').type(data.keyword)
        cy.get('#btn-searchBox-input').click()
        cy.get('#lnk-viewBreadcrumb-undefined > h1').should('be.visible').should('contain', 'TV')
    })

    it('Click product link, add to cart and verify', function () {
        cy.get('#lnk-viewProduct-' + data.product2.id + '-name').click()
        cy.get('#lbl-productName-productDetail').should('contain', data.product2.name)
        cy.get('#btn-addCart-' + data.product2.id).click()
        cy.get('div.Alert-jglfde-0.Notification__CustomAlert-lcdOEy.fmgHJA')
            .should('have.attr', 'type').and('include', 'success')
        cy.get('#btn-openMiniCart').click()
        cy.get('#lnk-viewProduct-' + data.product1.id).should('be.visible')
        cy.get('#lnk-viewProduct-' + data.product2.id).should('be.visible')
    })
})