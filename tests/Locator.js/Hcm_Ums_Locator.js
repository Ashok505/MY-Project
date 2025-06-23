export default class Hcm_Ums_Locator {
    constructor(page) {
        //Select client
        this.clientSelect = page.locator('//button//span[text()="Select Client"]');
        this.clientSearch = page.locator('//input[@value = "A2FDL"]');
        this.clientSubmit = page.locator('//button//span[text()="Submit"]');

        // click Hiring 
        this.clickHiring = page.locator('//ul//li[2]');
        this.clickOnsite = page.locator('//button//div[text()="Onsite Productivity"]');
        this.clickHcmUms = page.locator('//button//div//div//div[text()="HCM/UMS"]');

        //click checkbox
        this.clickCheckbox = page.locator('');

        //click hcmAdoption date
        this.extractE_CodeDate = page.locator('td').nth(4).innerText();
        this.clickAdoptionDate = page.locator('//tbody//tr[1]//td[8]')

        //select course 
        this.clickCourse = page.locator('//tr[1]//td[9]//div//div//div//button'); //clicks on the course drop down
        this.selectCourse = page.locator('(//div[@value ="1"])[1]') // will select the certificare program of soft skill.
        this.selectCourse2 = page.locator('(//label[text()="Diploma In CRM WIL"])[1]') // Diploma in CRM WIL

        //select ums
        this.clickUms = page.locator('//tr[1]//td[10]//div//div//div//button');
        this.selectUmsVerified = page.locator('(//div//div//div//div//div//div//div[@id="Verified"])[1]');    //will click on verified in the ums drop down .
        this.selectUmsNotVerified = page.locator('(//div//div//div//div//div//div//div[@id="Not Verified"])[1]');

        // selects 10th Doc status
        this.clickTenthDoc = page.locator('//tr[1]//td[11]//div//div//div//button'); //clicks on the Tenth Document drop down
        this.selectTenthDocVerified = page.locator('(//div//div//div//div//div//div//div[@id="Verified"])[2]'); //will click on verified in the Tenth Document drop down
        this.selectTenthDocNotUploaded = page.locator('(//div//div//div//div//div//div//div[@id="Not Uploaded"])[1]');
        this.selectTenthDocRejected = page.locator('(//div//div//div//div//div//div//div[@id="Rejected"])[1]'); //will click on rejected in the Tenth Document drop down

        //selects on the Twelveth Document status
        this.clickTwelvethDoc = page.locator('//tr[1]//td[12]//div//div//div//button'); //clicks on the Twelveth Document drop down
        this.selectTwelvethDocVerified = page.locator('(//div//div//div//div//div//div//div[@id="Verified"])[3]'); //will click on verified in the Twelveth Document drop down
        this.selectTwelvethDocNotUploaded = page.locator('(//div//div//div//div//div//div//div[@id="Not Uploaded"])[2]');
        this.selectTwelvethDocRejected = page.locator('(//div//div//div//div//div//div//div[@id="Rejected"])[2]'); //will click on rejected in the Twelveth Document drop down

        //selects KYC Document status
        this.clickKycDoc = page.locator('//tr[1]//td[13]//div//div//div//button'); //clicks on the KYC Document drop down
        this.selectKycDocVerified = page.locator('(//div//div//div//div//div//div//div[@id="Verified"])[4]'); //will click on verified in the KYC Document drop down
        this.selectKycDocNotUploaded = page.locator('(//div//div//div//div//div//div//div[@id="Not Uploaded"])[3]');
        this.selectKycDocRejected = page.locator('(//div//div//div//div//div//div//div[@id="Rejected"])[3]'); //will click on rejected in the KYC Document drop down

        //selects Photo status
        this.clickPhoto = page.locator('//tr[1]//td[14]//div//div//div//button'); //clicks on the Photo drop down
        this.selectPhotoVerified = page.locator('(//div//div//div//div//div//div//div[@id="Verified"])[5]'); //will click on verified in the Photo drop down
        this.selectPhotoNotUploaded = page.locator('(//div//div//div//div//div//div//div[@id="Not Uploaded"])[4]');
        this.selectPhotoRejected = page.locator('(//div//div//div//div//div//div//div[@id="Rejected"])[4]'); //will click on rejected in the Photo drop down

        //selects ABC ID status
        this.clickAbcID = page.locator('//tr[1]//td[15]//div//div//div//button'); //clicks on the ABC ID drop down
        this.selectAbcIDVerified = page.locator('(//div//div//div//div//div//div//div[@id="Verified"])[6]'); //will click on verified in the ABC ID drop down
        this.selectAbcIDNotUploaded = page.locator('(//div//div//div//div//div//div//div[@id="Not Uploaded"])[5]');
        this.selectAbcIDRejected = page.locator('(//div//div//div//div//div//div//div[@id="Rejected"])[5]'); //will click on rejected in the ABC ID drop down


        //clicks on the submit button
        this.FinalSubmitButton = page.locator('//button//span[text()="Submit"]'); //clicks on the submit button
        this.confirmSubmitButton = page.locator('//button//span[text()="Yes"]'); //clicks on the Yes submit button

        // Clicks checkbox all
        this.clickCheckboxAll = page.locator('//thead//tr//th//div//div//div//input'); //clicks on the checkbox all

        //search by Ecode/Name
        this.search_Ecode_Name = page.locator('//input[@placeholder="Search (Name/E-code)"]'); //search by Ecode/Name

        this.DownloadButton = page.locator('//img[@alt="Download candidates"]');

    }
}