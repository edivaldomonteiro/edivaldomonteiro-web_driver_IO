

describe('Launch Google Chrome Browser',()=>{
    it('Launching Google Chrome Browser',()=>{
        
        const paraBankUrl = 'http://parabank.parasoft.com' 
        browser.url(paraBankUrl)
        
        //browser.pause(5000)

        //Example for component visibility and text assertions
        const subTitle = $('h2')
        expect(subTitle).toBeVisible()
        expect(subTitle).toHaveText('Customer Login')

        //Example for id attribute
        const mainPanel = $('#mainPanel')
        mainPanel.waitForExist()

        //Example for name attribute
        const userNameTextBox = $('[name="username"]')
        userNameTextBox.waitForExist()
        userNameTextBox.setValue('john')

        //Example for name attribute
        const passwordTextBox = $('[name=password]')
        passwordTextBox.waitForExist()
        passwordTextBox.setValue('demo')

        //Example for xpath attribute
        const loginButton = $('//*[@id="loginPanel"]/form/div[3]/input')
        loginButton.click()

        //Example for class attribute
        const fullName = $('.smallText')
        fullName.waitForExist()
        
        //Example for link text attribute
        const openAccountLink = $('=Open New Account')
        openAccountLink.waitForExist()
        openAccountLink.click()


        //Example selecting an option from a Combo Box
        $('select[ng-model="types.selectedOption"]').selectByAttribute('value','1')
        $('select[ng-model="types.selectedOption"]').selectByAttribute('value','0')

        browser.pause(1000)

        $('select[ng-model="types.selectedOption"]').selectByAttribute('value','1')
        $('select[ng-model="types.selectedOption"]').selectByAttribute('value','0')

        $('select[ng-model="accounts.selectedOption"]').selectByAttribute('value','13344')
        
        $('select[ng-model="types.selectedOption"]').selectByAttribute('value','1')
        $('select[ng-model="types.selectedOption"]').selectByAttribute('value','0')


        //Example for partial link text attribute
        const logOutLink = $('*=Out')
        logOutLink.waitForExist()
        logOutLink.click()


        const subTitle2 = $('#loginPanel > form > p:nth-child(1) > b').getText()
        console.log(subTitle2)

        browser.saveScreenshot('./screenshot/Login_Page.png')







   
    })
})




