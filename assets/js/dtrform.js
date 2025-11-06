        function printGoogleSheet() {
            const sheetId = "1-0dkRp2875m4-SncLkDYC_KuGy-I_Mw8SDgYPr0D-No";
            const printURL = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=pdf`;

            alert("The FORM will be saved. Kindly ensure to full copy the contents of the form into the salary spreadsheet. Then rename or open and print the pdf file.");
            const printWindow = window.open(printURL, '_blank');
           
            printWindow.onload = () => {
                printWindow.focus();
                printWindow.print();
            };
        }