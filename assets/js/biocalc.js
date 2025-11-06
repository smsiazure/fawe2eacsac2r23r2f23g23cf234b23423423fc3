function toggleDays(day) {
    const calculator = document.getElementById(`${day}days`);
    if (calculator) {
        calculator.style.display = (calculator.style.display === 'none' || calculator.style.display === '') ? 'block' : 'none';
    }
}

function printDays(day, sheetId) {
    const printURL = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=xlsx`;

    alert(`The Biometric (${day}DAYS) will be saved. Kindly ensure to fully copy the contents of the form into the BIOMETRIC spreadsheet. Then rename or open and print the Excel file.`);
    
    const printWindow = window.open(printURL, '_blank');
    if (printWindow) {
        printWindow.focus();
        setTimeout(() => printWindow.print(), 1000);
    }
}

document.querySelectorAll('.exitBtn').forEach(button => {
    button.addEventListener('click', (event) => {
        const parent = event.target.closest('.calculator');
        if (parent) parent.style.display = 'none';
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelectorAll('.calculator').forEach(calculator => {
            calculator.style.display = 'none';
        });
    }
});

const sheetIds = {
    13: "1-0dkRp2875m4-SncLkDYC_KuGy-I_Mw8SDgYPr0D-No", /* 13 days raw biometric */
    14: "13CsaUyQA-wmoeU39eWoKFbUW2Lk-lxHY2CtvGEQmM78", /* 14 days raw biometric */
    15: "1rNu39ARGzYojteXb-9kotf1NnwVWUzLvwyWWV81WrCQ", /* 15 days raw biometric */
    16: "1quz1hhXMbX4O9HMhqWpKLyiLI2U8oX9qM6mgUuiNZD8", /* 16 days raw biometric */
    17: "1dSaj7gjmr4Al0uUKuTyxtfaoEWrkjSd282x8u5FTc1g", /* final biometric */
    18: "1jJnEWcpO04utdcWd-K6XbzTHHfCvMsXawe3FuPjt-54", /* dtr summary record*/
    19: "1ZnR4bBC0Z-o2EZ-3EaEIO-fS4jnHuKKCJ01Tu_AbfTs", /* dcif */
    20: "1kP2qVUshxyLhFWggEefNkeAdan7vCuy7TuFjiEHQQ-8" /* schedule RECORD */
    21: "1uBnev01hqaMyBfIy7DNw_5kSZ3NbE_molFjPgIkgClk" /* google sheet */
};

document.querySelectorAll('.printBtn').forEach(button => {
    button.addEventListener('click', (event) => {
        const day = event.target.getAttribute('data-day');
        if (day && sheetIds[day]) {
            printDays(day, sheetIds[day]);
        }
    });
});
