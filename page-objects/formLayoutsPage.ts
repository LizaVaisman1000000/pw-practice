import { Locator, Page } from "@playwright/test"
import { HelperBase } from "./helperBase"

export class FormLayoutPage extends HelperBase{

    
    constructor(page:Page){
        super(page)
    }
    async submitUsingTheGridFormWithCreadentionalsAndSelectorOption(email: string, password: string, optionText: string){
        const usingTheGridForm = this.page.locator ('nb-card', {hasText: "Using the Grid"})
        await usingTheGridForm.getByRole('textbox', {name: "Email"}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name: "Password"}).fill(password)
        await usingTheGridForm.getByRole('radio', {name:optionText}).check({force:true})
        await usingTheGridForm.getByRole('button').click()
    }


/**
 * This method will out the Inline form with user details
 * @param name - should be first and last
 * @param email - valid email for the test user
 * @param rememberMe - truw or false if user session to be safed
 */
    async submitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean){
        const inlineForm = this.page.locator ('nb-card', {hasText: "Inline form"})
        await inlineForm.getByRole('textbox', {name: "Jane Doe"}).fill(name)
        await inlineForm.getByRole('textbox', {name: "Email"}).fill(email)
        if(rememberMe)
            await inlineForm.getByRole('checkbox').check({force: true})
        await inlineForm.getByRole('button').click()

    }
} 


