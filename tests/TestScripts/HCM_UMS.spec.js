import { test } from "@playwright/test"
import { HCM_UMS } from "../pages/HCM_UMS"
import path from "path";
import fs from "fs";

test.setTimeout(60000); // 60 seconds

let ums;
let screenShotIndex = 1;
// const screenshotFolder = 'TestData';
const screenshotFolder = path.join(process.cwd(), 'tests', 'TestData');

test.beforeAll(() => {
    if (fs.existsSync(screenshotFolder)) {
        fs.rmSync(screenshotFolder, { recursive: true, force: true });
    }
    fs.mkdirSync(screenshotFolder, { recursive: true });
});

test.afterEach(async ({ page }, testInfo) => {
    const sanitizedTitle = testInfo.title.replace(/[^a-zA-Z0-9]/g, '_'); // Remove special characters
    const fullPath = path.join(screenshotFolder, `${sanitizedTitle}.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
});



test.beforeEach(async ({ page }) => {
    ums = new HCM_UMS(page);
    await ums.open();
    await ums.login();
    await ums.selectClient();

});

test('Scenario 1:', async ({ page }) => {
//  Positive flow with selecting certificate program in soft skill and UMS status as verified.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.umsStatus_verified();
    // await ums.submit();

});

test('Scenario 2', async ({ page }) => {
    //  Positive flow with selecting certificate program in soft skill and UMS status as Not verified.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.umsStatus_NotVerified();
    // await ums.submit();
 

});

test('Scenario 3', async ({ page }) => {
//  Positive flow with selecting Diploma in CRM WIL and UMS status as verified.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Diploma_In_CRM_WIL();
    await ums.umsStatus_verified();
   
});

test('Scenario 4', async ({ page }) => {
  
   //  Positive flow with selecting Diploma in CRM WIL and UMS status as Not verified.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Diploma_In_CRM_WIL();
    await ums.umsStatus_NotVerified();

});

test('Scenario 5', async ({ page }) => {
   // Checks to search data 
    await ums.clickHiring();
    await ums.checkbox();   
    await ums.searchBar();
   
});

test('Scenario 6', async ({ page }) => {
   
    await ums.clickHiring();
    await ums.checkbox(); 
    await ums.checkboxAll();
  
});

test('Scenario 7', async ({ page }) => {
    // Verified Verified Verified
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_Verified();

});

test('Scenario 8', async ({ page }) => {
    //Verified Verified Rejected.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_Rejected();

});

test('Scenario 9', async ({ page }) => {
    // Verified Verified Not Uploaded.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_NotUploaded();

});

test('Scenario 10', async ({ page }) => {
    //Verified Rejected Verified.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_Rejected();
    await ums.abcIDStatus_Verified();

});

test('Scenario 11', async ({ page }) => {
    //Verified Rejected Rejected.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_Rejected();
    await ums.abcIDStatus_Rejected();

});

test('Scenario 12', async ({ page }) => {
    // verified Rejected Not Uploaded.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_Rejected();
    await ums.abcIDStatus_NotUploaded();

});

test('Scenario 13', async ({ page }) => {
    //vnv
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_NotUploaded();
    await ums.abcIDStatus_Verified();

});

test('Scenario 14', async ({ page }) => {
    // vnr
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_NotUploaded();
    await ums.abcIDStatus_Rejected();

});


test('Scenario 15', async ({ page }) => {
    // vnn 
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_NotUploaded();
    await ums.abcIDStatus_NotUploaded();

});

test('Scenario 16', async ({ page }) => {
    // rvv
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Rejected();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_Verified();

});

test('Scenario 17', async ({ page }) => {
    // rvr
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Rejected();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_Rejected();

});

test('Scenario 18', async ({ page }) => {
    // rvn 
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Rejected();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_NotUploaded();

});

test('Scenario 19', async ({ page }) => {
    // rrv
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Rejected();
    await ums.photoStatus_Rejected();
    await ums.abcIDStatus_Verified();

});

test('Scenario 20', async ({ page }) => {
    // rrr
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Rejected();
    await ums.photoStatus_Rejected();
    await ums.abcIDStatus_Rejected();

});

test('Scenario 21', async ({ page }) => {
    // rrn
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Rejected();
    await ums.photoStatus_Rejected();
    await ums.abcIDStatus_NotUploaded();

});

test('Scenario 22', async ({ page }) => {
    // rnv
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Rejected();
    await ums.photoStatus_NotUploaded();
    await ums.abcIDStatus_Verified();

});

test('Scenario 23', async ({ page }) => {
    // rnr
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Rejected();
    await ums.photoStatus_NotUploaded();
    await ums.abcIDStatus_Rejected();

});

test('Scenario 24', async ({ page }) => {
    // rnn
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_Rejected();
    await ums.photoStatus_NotUploaded();
    await ums.abcIDStatus_NotUploaded();

});

test('Scenario 25', async ({ page }) => {
    //  nvv 
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_NotUploaded();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_Verified();

});

test('Scenario 26', async ({ page }) => {
    // nvr
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_NotUploaded();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_Rejected();

});

test('Scenario 27', async ({ page }) => {
    // nvn  
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_NotUploaded();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_NotUploaded();

});

test('Scenario 28', async ({ page }) => {
    // nrv
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_NotUploaded();
    await ums.photoStatus_Rejected();
    await ums.abcIDStatus_Verified();

});

test('Scenario 29', async ({ page }) => {
    // nrr
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_NotUploaded();
    await ums.photoStatus_Rejected();
    await ums.abcIDStatus_Rejected();

});

test('Scenario 30', async ({ page }) => {
    // nrn
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_NotUploaded();
    await ums.photoStatus_Rejected();
    await ums.abcIDStatus_NotUploaded();

});

test('Scenario 31', async ({ page }) => {
    // nnv
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_NotUploaded();
    await ums.photoStatus_NotUploaded();
    await ums.abcIDStatus_Verified();

});

test('Scenario 32', async ({ page }) => {
    //  nnr 
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_NotUploaded();
    await ums.photoStatus_NotUploaded();
    await ums.abcIDStatus_Rejected();

});

test('Scenario 33', async ({ page }) => {
    //  nnn
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Certificate_Program_in_Soft_Skill();
    await ums.kycDocStatus_NotUploaded();
    await ums.photoStatus_NotUploaded();
    await ums.abcIDStatus_NotUploaded();

});


test('Scenario 34', async ({ page }) => {
// Complete flow with selecting Diploma in CRM WIL and UMS status as Not verified.
    await ums.clickHiring();
    await ums.checkbox();
    await ums.hcmAdoption();
    await ums.courses_Diploma_In_CRM_WIL();
    await ums.umsStatus_NotVerified();
    await ums.tenthDocStatus_Verified();
    await ums.twelvethDocStatus_Verified();
    await ums.kycDocStatus_Verified();
    await ums.photoStatus_Verified();
    await ums.abcIDStatus_Verified();
    await ums.submit();

});

test('Scenario 35', async ({ page }) => {
// Complete flow with selecting Diploma in CRM WIL and UMS status as verified.
    await ums.clickHiring();
    await page.waitForTimeout(2000);
    // await ums.download();
    await ums.updateCandidateExcelRow('tests/TestScripts/hcm_ums_A2FDL.xlsx' , candidateName);
    

});




