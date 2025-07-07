import {expect, test} from '@playwright/test'
import {PageManager} from '../page-objects/pageManager'
import {NavigationPage} from '../page-objects/navigationPage'
import { FormLayoutPage } from '../page-objects/formLayoutsPage'
import { DatepickerPage } from '../page-objects/datepickerPage'
import { on } from 'cluster'
import {faker} from '@faker-js/faker'


test.beforeEach(async({page})=>{
    await page.goto('/')
})

test('Navigate to form page', async ({page}) =>{
    const pm = new PageManager(page)
    await pm.navigateTo().fromLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()

})

test('parametrized methods', async ({page}) =>{
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName()
    //const randomFirstName = faker.person.firstName()
    //const randomLastName = faker.person.lastName()
    //const randomEmailProvider = faker.internet.email({ firstName: randomFirstName, lastName: randomLastName, allowSpecialCharacters: true})
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`
    //const randomEmail = `${randomEmailProvider}`
    

    await pm.navigateTo().fromLayoutsPage()
    await pm.onFormLayoutsPage().submitUsingTheGridFormWithCreadentionalsAndSelectorOption('test@test.com','wellcome','Option 2')
    await page.screenshot({path: 'screenshots/formsLayoutsPage.png'})
    const buffer = await page.screenshot ()
    console.log (buffer.toString('base64'))
    await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName,randomEmail,false)
    await page.locator ('nb-card', {hasText: "Inline form"}).screenshot({path: 'screenshots/Inlineform.png'})
    //await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFirstName, randomLastName,randomEmail,false)

    //await pm.navigateTo().datepickerPage()
    //await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(10)
    //await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15)



})