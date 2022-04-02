const originalContainer = document.querySelectorAll('.original-container div');
const copyContainer = document.querySelector('.copy-container');

originalContainer.forEach(
    divClickEvt => divClickEvt.addEventListener('click', (evt) =>
    {const itemCopied = evt.target.parentElement.outerHTML
    copyContainer.insertAdjacentHTML("beforeend",itemCopied)
    })
)