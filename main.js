const btnDownloadCV = document.querySelector('#btn-download-cv');
const btnSend = document.querySelector('#btn-send');
const filePDF = "cv.pdf"

const downloadCV = () => {
    const link = document.createElement("a");
    link.href = filePDF;
    link.download = 'CV_Sandra_Pompido_Gonzalez.pdf';
    link.click();
}

const send = () => {
    const link = document.createElement("a");
    link.href = "mailto:pogonsa@gmail.com";
    link.click();
}

btnDownloadCV.addEventListener('click', downloadCV);
btnSend.addEventListener('click', send);



// FILTER SKILLS

function filterSkills() {
    let input = document.getElementById('filter')
    let inputValue = input.value.toUpperCase()
    let filterUl = document.getElementsByClassName('skill-ul')

    for (let i = 0; i < filterUl.length; i++) {
        const element = filterUl[i];
        const textFilterSkill = element.innerText.toUpperCase()
        const div = document.getElementsByClassName(element.parentElement.id)
        if (textFilterSkill.indexOf(inputValue) > -1) {

            for (let i = 0; i < div.length; i++) {
                const element = div[i];
                element.style.display = 'block'

            }

        } else {
            for (let i = 0; i < div.length; i++) {
                const element = div[i];
                element.style.display = 'none'

            }

        }

    };


}