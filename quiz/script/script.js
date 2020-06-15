document.addEventListener('DOMContentLoaded', function () {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');

    const questions = {
        question: 'Какого цвета бургер вы хотите?',
        answers: [{
                title: 'Стандарт',
                url: '/image/burger.png'
            },
            {
                title: 'Черый',
                url: '/image/burgerBlack.png'
            }
        ]
    };

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playtest();
    });

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    });

    const playtest = () => {

        let numberQuestion = 0;

        const renderAnswers = (index) => {
            questions[index].answers.forEach((answer) => {
                const answerItem = document.createElement('div');
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column')
                answerItem.innerHTML = `
                <div class="answers-item d-flex flex-column">
            <input type="radio" id="answerItem1" name="answer" class="d-none">
            <label for="answerItem1" class="d-flex flex-column justify-content-between">
              <img class="answerImg" src="${answer.url}" alt="burger">
              <span>${answer.title}</span>
            </label>
          </div>`;
                formAnswers.appendChild(answerItem);
            });
        };

        const renderQuestions = (indexQuestion) => {
            questionTitle.textContent = `${questions[indexQuestion].question}`;

            renderAnswers(indexQuestion);
        };

        renderQuestions(numberQuestion);
  
    };
});