import { Text } from 'pdf2json';
import PDFParser from 'pdf2json';
import { test, expect } from './fixtures';
import { siteConfig } from '../src/config/site'



test.describe('validate PDF contents using Playwright', () => {
    let pdfContents: any
    test.beforeAll(async () => {
        pdfContents = await getPDFContents(`./public/${siteConfig.resume}`)
    })

    test('file should be 1 page', async () => {
        expect(pdfContents.Pages.length, 'the pdf should be one page').toEqual(1);
    });

    test('keywords should be correct', async () => {
        expect(pdfContents.Meta.Keywords.split(', '), 'PDF keyword was incorrect').toContain('software engineer');
    });

    test('author should be correct', async () => {
        expect(pdfContents.Meta.Author, 'PDF author was incorrect').toEqual('Ava Hajratwala');
    });

   test('email should be correct', async () => {
       const email = siteConfig.profiles[2].handle
       expect(email, 'Email not found in siteConfig').toBeDefined();
       expect(
           pdfContents.Pages[0].Texts.some((text: Text) => {
                   return decodeURI(text.R[0].T).includes(email.replace("@", "%40"));
               }
           ),
           'The email was incorrect'
       ).toBeTruthy();
   });

    test('contains the correct heading text', async () => {
        const heading = pdfContents.Pages[0].Texts[0].R[0].T
        expect(decodeURI(heading), 'The heading text was incorrect').toEqual('AvaHajratwala');
    });
});

async function getPDFContents(pdfFilePath: string): Promise<any> {
    let pdfParser = new PDFParser();
    return new Promise((resolve, reject) => {
        pdfParser.on('pdfParser_dataError', (errData: { parserError: any }) =>
            reject(errData.parserError)
        );
        pdfParser.on('pdfParser_dataReady', (pdfData) => {
            resolve(pdfData);
        });

        pdfParser.loadPDF(pdfFilePath);
    });
}
