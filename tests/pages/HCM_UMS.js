import { expect } from "@playwright/test"
import Hcm_Ums_Locator from "../Locator.js/Hcm_Ums_Locator";
const XLSX = require('xlsx');
import path from 'path';
import xlsx from 'xlsx';
import fs from 'fs-extra'




exports.HCM_UMS =



    class HCM_UMS {
        constructor(page) {
            this.page = page;
            this.locator = new Hcm_Ums_Locator(page); // nwe instance

        }


        async open() {
            await this.page.goto('https://hcm-consumer-ui-qa.teamlease.com/');
            await expect(this.page).toHaveURL(/.*hcm/);
            console.log('The page is successfully launched');
        }
        async login() {
            await this.page.locator('#username').fill('T10533');
            await this.page.locator('#continueButton').click();
            await this.page.locator('#password').fill('12345');
            await this.page.locator('#loginButton').click();
            console.log('Successfully logged in');

        }
        // This function is to select the client
        async selectClient() {
            await this.locator.clientSelect.click();
            await this.locator.clientSearch.click();
            await this.locator.clientSubmit.click();
            console.log('You have successfully selected the client');
        }

        // This function is to click on the hiring and HCM UMS
        async clickHiring() {
            await this.locator.clickHiring.click();
            await this.locator.clickOnsite.click();
            await this.locator.clickHcmUms.click();
            await expect(this.page.getByText('AAM AADMI PARTY / A2FDL', { exact: true })).toBeVisible();

        }

        // This function is to select the checkbox of the first candidate in the table
        async checkbox() {
            const firstRow = this.page.locator('table tbody tr').first();
            await firstRow.locator('//input[@type = "checkbox"]').click();

            const namee = await firstRow.locator('td').nth(3).innerText();
            console.log('Select candidate is ', namee);

        }

        // This function is to select the adoption date
        async hcmAdoption() {
            const Ecode = await this.locator.extractE_CodeDate;            //this line is to extract the contractFrom date so that the adoption date will be greater
            console.log('The E-Code generated date is :', Ecode, 'so the adoption date should be greater');
            // Randomly pick a month offset: 0 = current, 1 = next, -1 = previous
            await this.locator.clickAdoptionDate.click(); 
            // const offset = Math.floor(Math.random() * 3) - 1;

            // const date = new Date();
            // date.setMonth(date.getMonth() + offset);
            // const randomDay = Math.floor(Math.random() * 28) + 1;
            // date.setDate(randomDay);

            // const label = `${randomDay} ${date.toLocaleString('default', { month: 'long', year: 'numeric' })}`;

            const date = new Date();        //A constructor is created
            date.setDate(date.getDate() + (new Date().getTime() % 2 === 0 ? 1 : 2));
            await this.locator.clickAdoptionDate.click();     //clicks on the datepicker
            await this.page.getByRole('button', { name: `${date.getDate()} ${date.toLocaleString('default', { month: 'long', year: 'numeric' })}`, exact: true }).click();
            console.log('Selected adoption date:', `${date.getDate()} ${date.toLocaleString('default', { month: 'long', year: 'numeric' })}`);
        }

        // This function is to select the course [Certificate_Program_in_Soft_Skill]
        async courses_Certificate_Program_in_Soft_Skill() {
            await this.locator.clickCourse.click();
            const course = await this.locator.selectCourse.textContent();
            await this.locator.selectCourse.click();
            console.log('Selected course is :', course.trim());

        }

        // This function is to select the course [Diploma_In_CRM_WIL]
        async courses_Diploma_In_CRM_WIL() {
            await this.locator.clickCourse.click();
            const course = await this.locator.selectCourse2.textContent();
            await this.locator.selectCourse2.click();
            console.log('Selected course is :', course.trim());

        }

        // This function is to select the UMS status as Verified .
        async umsStatus_verified() {
            await this.locator.clickUms.click();
            await this.locator.selectUmsVerified.click();
            console.log('UMS status is verified');
            // The following lines are to check the status of 10th and 12th documents
            const indices = [9, 10, 11, 12, 13];
            const [status_tenth, status_twelveth, status_KYC, status_photo, status_ABCID] = await Promise.all(
                indices.map(i => this.page.locator('td').nth(i).innerText()));
            console.log('10th,12th,KYC,Photo,ABD Doc status is:', status_tenth, status_twelveth, status_KYC, status_photo, status_ABCID);
        }

        // This function is to select the UMS status as Not Verified
        async umsStatus_NotVerified() {
            await this.locator.clickUms.click();
            await this.locator.selectUmsNotVerified.click();
            console.log('UMS status is Not Verified');
            // The following lines are to check the status of 10th and 12th documents
            const tenth_doc = await this.page.locator('td').nth(9).innerText();
            const twelvethDoc = await this.page.locator('td').nth(10).innerText();
            console.log('10th and 12th Doc status is :', tenth_doc, twelvethDoc);
        }
        // This function is to select the 10th Document status as Verified
        async tenthDocStatus_Verified() {
            await this.locator.clickTenthDoc.click();
            await this.locator.selectTenthDocVerified.click();
            console.log('10th Document status is verified');

        }

        // This function is to select the 10th Document status as Not Uploaded
        async tenthDocStatus_NotUploaded() {
            await this.locator.clickTenthDoc.click();
            await this.locator.selectTenthDocNotUploaded.click();
            console.log('10th Document status is Not Uploaded');
        }

        // This function is to select the 10th Document status as Rejected
        async tenthDocStatus_Rejected() {
            await this.locator.clickTenthDoc.click();
            await this.locator.selectTenthDocRejected.click();
            console.log('10th Document status is Rejected');
        }

        // This function is to select the 12th Document status as Verified
        async twelvethDocStatus_Verified() {
            await this.locator.clickTwelvethDoc.click();
            await this.locator.selectTwelvethDocVerified.click();
            console.log('12th Document status is verified');

        }

        // This function is to select the 12th Document status as Not Uploaded
        async twelvethDocStatus_NotUploaded() {
            await this.locator.clickTwelvethDoc.click();
            await this.locator.selectTwelvethDocNotUploaded.click();
            console.log('12th Document status is Not Uploaded');
        }

        // This function is to select the 12th Document status as Rejected
        async twelvethDocStatus_Rejected() {
            await this.locator.clickTwelvethDoc.click();
            await this.locator.selectTwelvethDocRejected.click();
            console.log('12th Document status is Rejected');
        }

        //  This function is to select the KYC Document status as Verified
        async kycDocStatus_Verified() {
            await this.locator.clickKycDoc.click();
            await this.locator.selectKycDocVerified.click();
            console.log('KYC Document status is verified');

        }

        // This function is to select the KYC Document status as Not Uploaded
        async kycDocStatus_NotUploaded() {
            await this.locator.clickKycDoc.click();
            await this.locator.selectKycDocNotUploaded.click();
            console.log('KYC Document status is Not Verified');
        }
        // This function is to select the KYC Document status as Rejected
        async kycDocStatus_Rejected() {
            await this.locator.clickKycDoc.click();
            await this.locator.selectKycDocRejected.click();
            console.log('KYC Document status is Rejected');
        }

        // This function is to select the Photo status as Verified  
        async photoStatus_Verified() {
            await this.locator.clickPhoto.click();
            await this.locator.selectPhotoVerified.click();
            console.log('Photo status is verified');

        }

        // This function is to select the Photo status as Not Uploaded   
        async photoStatus_NotUploaded() {
            await this.locator.clickPhoto.click();
            await this.locator.selectPhotoNotUploaded.click();
            console.log('Photo status is Not Verified');
        }

        // This function is to select the Photo status as Rejected
        async photoStatus_Rejected() {
            await this.locator.clickPhoto.click();
            await this.locator.selectPhotoRejected.click();
            console.log('Photo status is Rejected');
        }

        // This function is to select the ABC ID status as Verified
        async abcIDStatus_Verified() {
            await this.locator.clickAbcID.click();
            await this.locator.selectAbcIDVerified.click();
            console.log('ABC ID status is verified');

        }

        // This function is to select the ABC ID status as Not Uploaded
        async abcIDStatus_NotUploaded() {
            await this.locator.clickAbcID.click();
            await this.locator.selectAbcIDNotUploaded.click();
            console.log('ABC ID status is Not Verified');
        }

        // This function is to select the ABC ID status as Rejected
        async abcIDStatus_Rejected() {
            await this.locator.clickAbcID.click();
            await this.locator.selectAbcIDRejected.click();
            console.log('ABC ID status is Rejected');
        }

        // This function is to submit the Candiarte details.
        async submit() {
            await this.locator.FinalSubmitButton.click();
            await this.locator.confirmSubmitButton.click();
            console.log('Candidate details submitted successfully');
        }

        // This function is to search the candidate by Ecode or Name
        async searchBar() {
            await this.locator.search_Ecode_Name.fill('d');

        }

        // This function is to select all the candidates in the table
        async checkboxAll() {
            await this.locator.clickCheckboxAll.click();

        }

        async updateCandidateExcelRow(filePath, candidateName) {
            const workbook = XLSX.readFile(filePath);
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            const rowIndex = rows.findIndex((row, i) =>
                i > 0 && row[1]?.toString().trim() === candidateName.trim()
            );

            if (rowIndex === -1) {
                throw new Error(`❌ "${candidateName}" not found in Excel`);
            }

            const updates = {
                [`E${rowIndex + 1}`]: '30-Jun-2025',
                [`F${rowIndex + 1}`]: 'Diploma In CRM WIL',
                [`G${rowIndex + 1}`]: 'Verified'
            };

            for (const [cell, value] of Object.entries(updates)) {
                sheet[cell] = { t: 's', v: value };
                console.log(`✅ ${cell} = ${value}`);
            }

            XLSX.writeFile(workbook, filePath);
            console.log(`📄 Excel updated for: ${candidateName}`);
        }
    }




























