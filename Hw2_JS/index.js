document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dataForm');
    const fullNameInput = document.getElementById('fullName');
    const groupInput = document.getElementById('group');
    const dataTableBody = document.querySelector('#dataTable tbody');
    const deleteAllButton = document.getElementById('deleteAll');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Проверка обязательных полей
        let isValid = true;
        const nameError = document.getElementById('nameError');
        const groupError = document.getElementById('groupError');

        nameError.textContent = '';
        groupError.textContent = '';

        if (!fullNameInput.value.trim()) {
            nameError.textContent = 'Поле ФИО обязательно для заполнения.';
            isValid = false;
        }

        if (!groupInput.value.trim()) {
            groupError.textContent = 'Поле Группа обязательно для заполнения.';
            isValid = false;
        }

        if (isValid) {
            addRow(fullNameInput.value, groupInput.value);
            form.reset(); // Сброс формы
        }
    });

    function addRow(fullName, group) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${fullName}</td>
            <td>${group}</td>
            <td><button class="deleteRow">X</button></td>
        `;

        dataTableBody.appendChild(row);

        // Обработчик для удаления строки
        row.querySelector('.deleteRow').addEventListener('click', () => {
            row.remove();
        });
    }

    // Обработчик для удаления всех записей
    deleteAllButton.addEventListener('click', () => {
        dataTableBody.innerHTML = ''; // Очистка таблицы
    });
});
