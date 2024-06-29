function validateForm(){
    const name = document.getElementById('name').value;
    const bday = document.getElementById('bday').value;
    const phone = document.getElementById('phone').value;

    const errorMessage = document.getElementById('errorMessage');

    const regexName = "[а-яА-ЯёЁ]+";

    if (!name || !bday || !phone) {
        e.preventDefault();
        errorMessage.innerHTML ="Все поля должны быть заполнены";
        }

    if(regexName.test(name)){
        errorMessage.innerHTML = 'Поле может содержать только кириллицу и пробелы';
        return false;
    } 


    errorMessage.innerHTML = '';
    alert('Данные отправлены');
    return true;
}