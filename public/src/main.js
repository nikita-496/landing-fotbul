let payload_1 = ''
let payload_2 = ''
let nome_1 = ''
let nome_2 = ''
let phone = ''
let phone_2 = ''
let date = ''
let date_2 = ''
let amountPeopleTeam = ''
let teamName = ''
let city = ''
let city_2 = ''
let messanger = ''
let messanger_2 = ''


const promptError = document.getElementById('promptError')
const promptError_2 = document.getElementById('promptError_2')

const inputNomeComplete = document.getElementById('inputNomeComplete')
const inputPhone = document.getElementById('inputPhone')
const inputDate = document.getElementById('inputDate')
const inputCity = document.getElementById('inputCity')
const inputMessanger = document.getElementById('inputMessanger')

inputNomeComplete.addEventListener('input', (e) => {
    nome_1 = e.target.value
})

inputPhone.addEventListener('input', (e) => {
    phone = e.target.value
})

inputDate.addEventListener('input', (e) => {
    date = e.target.value
})

inputCity.addEventListener('input', (e) => {
    city = e.target.value
})

inputMessanger.addEventListener('input', (e) => {
    messanger = e.target.value
})

const form_1 = document.getElementById('form-1')

form_1.addEventListener('submit', () => {
    payload_1 =
        "Nome completo: " +
        nome_1 +
        ", Numero de telefone: " + 
        phone + 
        ", Ano de nascimento: " + 
        date + 
        ", Cidade: " + 
        city + 
        ", Mensageiro de contato: " + 
        messanger
    sendFormTg(payload_1, {nome_1, phone, date, city}, 1)
})


const inputNomeComplete_2 = document.getElementById('inputNomeComplete_2')
const inputPhone_2 = document.getElementById('inputPhone_2')
const inputDate_2 = document.getElementById('inputDate_2')
const inputAmountPeopleTeam = document.getElementById('inputAmountPeopleTeam')
const inputTeamName = document.getElementById('inputTeamName')
const inputCity_2 = document.getElementById('inputCity_2')
const inputMessanger_2 = document.getElementById('inputMessanger_2')

inputNomeComplete_2.addEventListener('input', (e) => {
    nome_2 = e.target.value
})

inputPhone_2.addEventListener('input', (e) => {
    phone_2 = e.target.value
})

inputDate_2.addEventListener('input', (e) => {
    date_2 = e.target.value
})

inputAmountPeopleTeam.addEventListener('input', (e) => {
    amountPeopleTeam = e.target.value
})

inputTeamName.addEventListener('input', (e) => {
    teamName = e.target.value
})

inputCity_2.addEventListener('input', (e) => {
    city_2 = e.target.value
})

inputMessanger_2.addEventListener('input', (e) => {
    messanger_2 = e.target.value
})


const form_2 = document.getElementById('form-2')
form_2.addEventListener('submit', () => {
    payload_2 =    
    "Nome Completo do capitao: " +
    nome_2 +
    ", Numero de telefone: " + 
    phone_2 + 
    ", Ano de nascimento: " + 
    date_2 + 
    ", Numero de pessoas na equipe: " +
    amountPeopleTeam + 
    ", Nome de equipe: " +
    teamName +
    ", Cidade: " + 
    city_2 + 
    ", Mensageiro de contato: " + 
    messanger_2
    sendFormTg(payload_2, {nome_2, phone_2, date_2, amountPeopleTeam, teamName, city_2} , 2)
})


async function sendFormTg(payload, required , typeForm) {
    event.preventDefault();
    const token = "6628761032:AAHF88h4rp7Sr-omd5vHm2p68azfrOt6vcI"
    const chat_id = '-1002135830957'


    $('#exampleModalToggle').modal('hide');
    $('#exampleModalToggle2').modal('hide');

    if(typeForm === 1 && (required.nome_1 === '' || required.phone === '' 
        || required.date === '' || required.city === '')) {
        promptError_2.style.display = 'none'
        promptError.style.display = 'block'
        return
    }
    else if(typeForm === 2 && (required.nome_2 === '' || required.phone_2 === ''
                || required.date_2 === '' || required.city_2 === ''
                || required.amountPeopleTeam === '' || required.teamName === '')
         ) {
        promptError.style.display = 'none'
        promptError_2.style.display = 'block'
        return
    }
    promptError.style.display = 'none'
    promptError_2.style.display = 'none'
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chat_id, text: payload }),
        }
      );

    
      const success = new bootstrap.Modal(document.getElementById('success'))
      success.show()
      const successButton = document.getElementById('success__button')
  
      successButton.addEventListener('click', (e) => {
        success.hide()  
    })
  
      console.log('response', response)
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  }