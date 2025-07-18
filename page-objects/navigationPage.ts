import { Locator, Page } from "@playwright/test"
import { HelperBase } from "./helperBase"


export class NavigationPage extends HelperBase {

   
    readonly fromLayoutsMenuItem: Locator
    readonly datePickerMenuItem: Locator
    readonly smartTableMenuItem: Locator
    readonly toastrMenuItem: Locator
    readonly tooltipMenuItem: Locator

    constructor(page: Page){
        super(page)
    }

    async fromLayoutsPage(){
        //await this.page.getByText('Forms').click()
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click()
        await this.waitForNumberOfSeconds(2)
    }
    async datepickerPage(){
       // await this.page.getByText('Forms').click()
        await this.selectGroupMenuItem('Forms')
        await this.page.waitForTimeout(1000)
        await this.page.getByText('Datepicker').click()
    }
    async smartTablePage(){
        //await this.page.getByText('Tables & Data').click()
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }
    async toastrPage(){
        //await this.page.getByText('Modal & Overlays').click()
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }
    async tooltipPage(){
       // await this.page.getByText('Modal & Overlays').click()
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText('Tooltip').click()
    }
    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if (expandedState == "false")
            await groupMenuItem.click()

    }

}