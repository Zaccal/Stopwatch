const resultsContaienr = document.querySelector('.results');
let idNumber = 0;
let renderId;
const getResult = (result) => {
    idNumber++;
    if (idNumber < 10) {
        renderId = `0${idNumber}`;
    }
    else {
        renderId = idNumber;
    }
    const newResult = `
    <div class="results__card animate__animated animate__fadeInRight">
        <p class="id">${renderId}</p>
        <p class="results__content-result">${result}</p>
    </div>
    `;
    resultsContaienr.insertAdjacentHTML('beforeend', newResult);
};
export default getResult;
