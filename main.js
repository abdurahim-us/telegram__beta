let loc = JSON.parse(localStorage.getItem('data'))

const Data = (loc)?loc: [
	{
		id: 1,
		username: 'abudiay',
		name: 'Abudi',
		phone: '+998909835839',
		photo: './img/book.jpg',
		bio: 'nmadr name',
		messages: [
			{
				body: 'salom qalaysan',
				isMine: true,
				time: '12:32'
			},
			{
				body: 'Yaxwi ozin opomisa',
				isMine: false,
				time: '12:32'
			}
		]
	},
	{
		id: 2,
		username: 'qotkan non',
		name: 'Kotta bola',
		phone: '+21320448905',
		photo: './img/book.jpg',
		bio: 'hayot nimadir nimadir',
		messages: [
			{
				body: 'Opomisa',
				isMine: true,
				time: '12:32'
			},
			{
				body: 'Solla yaxwimi',
				isMine: false,
				time: '12:32'
			}
		]
	},
	{
		id: 3,
		username: 'bratiw',
		name: 'Ukam',
		phone: '+6524458494',
		photo: './img/book.jpg',
		bio: 'bratmoyotmateridrugoy',
		messages: [
			{
				body: 'teli kotar',
				isMine: true,
				time: '12:32'
			},
			{
				body: 'san qattedin wunca payttan beri tapcka',
				isMine: false,
				time: '12:32'
			}
		]
	},
	{
		id: 4,
		username: 'babulya',
		name: 'buvim',
		phone: '+7777777',
		photo: './img/book.jpg',
		bio: 'lorem lorem lorem',
		messages: [
			{
				body: 'bomisane',
				isMine: true,
				time: '12:32'
			},
			{
				body: 'qatta yurudin',
				isMine: false,
				time: '12:32'
			}
		]
	},
]


// localStorage.setItem('data', JSON.stringify(Data))





//modal
let navDataCoverElement = document.querySelector('.nav__data__cover')
let modalElement = document.querySelector('.modaljon')
let closeButton = document.querySelector('.close__modal')
let modalPhoneNumber = document.querySelector('.phone_number')
let modalBio = document.querySelector('.profile_bio')
let modalUsername = document.querySelector('.username')
let modalName = document.querySelector('.modal__info__name')
let modalUnderCover = document.querySelector('.cover__for__modal')
//modal_end

let  asidebarElement = document.querySelector('.asidebar')	
let hamburgerButtonElement = document.querySelector('.hamburger')
let asidebarItemElement = document.querySelector('.asidebar__item')
let asidebarSettings = document.querySelector('.asidebar__settings')


let changeNameDiv = document.querySelector('.edit__my__name')
let changeNameIcon = document.querySelector('.edit__my__name__icon')
let changeNameCover = document.querySelector('.edit__my__name__cover')
let modalData = document.querySelector('.modal__data')
let modalInfoForm = document.querySelector('.modal__info__form')
let changeInput = document.querySelector('.field__input')




let myNameLocal = localStorage.getItem('myName') || prompt('ism')
localStorage.setItem('myName',myNameLocal)

let myNumberLocal = localStorage.getItem('myNumber') || prompt('nomer') - 0
localStorage.setItem('myNumber', myNumberLocal)

let hamburgerToggle = 1
hamburgerButtonElement.addEventListener('click', event => {
	if(hamburgerToggle == 1) {
		asidebarElement.style.transform = 'scaleY(1)'
		modalName.textContent = myNameLocal
		modalPhoneNumber.textContent = myNumberLocal
		modalBio.textContent = '*****'
		modalUsername.textContent = '*****'
		
		hamburgerToggle = 0
	}
	else if(hamburgerToggle == 0){
		
		asidebarElement.style.transform = 'scaleY(0)'
		hamburgerToggle = 1
	}
})

asidebarSettings.addEventListener('click', e => {
	modalUnderCover.style.display = 'block'
	modalElement.style.display = 'block'
	changeNameDiv.style.display = 'block'
	changeNameCover.addEventListener('click', e => {
		modalData.classList.toggle('modal__data')
		modalInfoForm.addEventListener('submit', ev => {
			ev.preventDefault()
			localStorage.clear()
			localStorage.setItem('myName',changeInput.value)
			modalName.textContent = changeInput.value
			modalInfoForm.reset()
		})
		modalData.classList.toggle('modal__data__back')
	})
	
})

modalUnderCover.addEventListener('click', ev => {
	modalElement.style.display = 'none'
	modalUnderCover.style.display = 'none'
	changeNameDiv.style.display = 'none'
})
closeButton.addEventListener('click', e =>{
	modalElement.style.display = 'none'
	modalUnderCover.style.display = 'none'
	changeNameDiv.style.display = 'none'
})



let chatFormElement = document.querySelector('.chat-form')
let profileImg = document.querySelector('.nav__data__img')
let profileName = document.querySelector('.nav__data__title')
let currentChat = 1
let inputElement = document.querySelector('.input-m')
let messagesList = document.querySelector('.messages-list')
let usersListElement = document.querySelector('.users__list')


chatFormElement.addEventListener('submit', e =>{
	e.preventDefault()
})


inputElement.addEventListener('keyup', event => {
	if(event.keyCode == 13){
		inputElement.value = inputElement.value.trim()
		let messageBody = event.target.value
		
		if(messageBody.length == 0){
			return false
		}
		
		let userData = Data.find(user => user.id == currentChat)
		userData.messages.push({
			body: messageBody,
			isMine: true
		})
		renderMessages(messagesList,userData.messages)		
		event.target.value = ''
		localStorage.setItem('data', JSON.stringify(Data))
		inputElement.focus()
	}
})



let chatCover = document.querySelector('.chat-cover')

renderUsers(usersListElement, Data)
let liToggle = 1
function renderUsers(parentElement, data) {
	for(let user of data){
		let newLiElementInRender = document.createElement('li')
		let newImgDivElement = document.createElement('div')
		let newDivElementInRender = document.createElement('div')
		let newUserName = document.createElement('p')
		let newLastMessage = document.createElement('p')
		let userImg = new Image
		
		newUserName.textContent = user.name
		newUserName.classList.add('users__name')
		newLastMessage.classList.add('users__last_message')
		newLiElementInRender.classList.add('users__item')
		newLiElementInRender.classList.add('users__item_hover')
		
		newDivElementInRender.classList.add('users__info')
		
		for(let sms = 0; sms < user.messages.length; sms=sms + 2){
			let lastMessage = user.messages[user.messages.length - 1]
			newLastMessage.textContent = lastMessage.body
		}
		
		userImg.src = user.photo
		userImg.classList.add('users__img')
		
		newImgDivElement.appendChild(userImg)
		newDivElementInRender.appendChild(newUserName)
		newDivElementInRender.appendChild(newLastMessage)
		newLiElementInRender.appendChild(userImg)
		newLiElementInRender.appendChild(newDivElementInRender)
		
		
		
		newLiElementInRender.addEventListener('click', event => {
			inputElement.focus()
			
			profileImg.src = user.photo
			profileName.textContent = user.name
			chatCover.classList.remove('chat-cover')
			chatCover.classList.add('chat-cover-hidden')
			renderMessages(messagesList, user.messages)
			currentChat = user.id
			
			modalName.textContent = user.name
			modalPhoneNumber.textContent = user.phone
			modalBio.textContent = user.bio
			modalUsername.textContent = user.username
			
			navDataCoverElement.addEventListener('click', event =>{
				modalUnderCover.style.display = 'block'
				changeNameDiv.style.display = 'block'
				
				changeNameCover.addEventListener('click', e => {
					modalData.classList.toggle('modal__data')
					modalInfoForm.addEventListener('submit', ev => {
						ev.preventDefault()
						localStorage.clear()
						localStorage.setItem('myName',changeInput.value)
						newUserName.textContent = changeInput.value
						profileName.textContent = changeInput.value
						modalName.textContent = changeInput.value
						user.name = changeInput.value
						modalInfoForm.reset()
					})
					modalData.classList.toggle('modal__data__back')
				})
				
				modalElement.style.display = 'block'
				modalUnderCover.addEventListener('click', ev => {
					modalElement.style.display = 'none'
					modalUnderCover.style.display = 'none'
					changeNameDiv.style.display = 'none'
				})
				closeButton.addEventListener('click', e =>{
					modalElement.style.display = 'none'
					modalUnderCover.style.display = 'none'
					changeNameDiv.style.display = 'none'
				})
				
			})
			
		})
		
		let searchUsersInput = document.querySelector('.search__users')
		searchUsersInput.addEventListener('keyup', v => {
			let value = searchUsersInput.value
			for(let i = 0; i < Data.length; i++){
				if(!(newLiElementInRender.textContent.toLowerCase().includes(value.toLowerCase()))){
					newLiElementInRender.style.display = 'none'
				}
				else if(newLiElementInRender.textContent.toLowerCase().includes(value.toLowerCase())) {
					newLiElementInRender.style.display = 'flex'
				}
			}
		})
		parentElement.appendChild(newLiElementInRender)
	
	}
}


function renderMessages(parentElement, data) {
	
	parentElement.textContent = ''
	let datenow = new Date
	let hozr = datenow.getHours()
	let minute = datenow.getMinutes()
	
	for(let message of data) {
		if(message.isMine == true) {
			let newLiElementInRender = document.createElement('li')
			newLiElementInRender.classList.add('message')
			let newPiText = document.createElement('p')
			newPiText.classList.add('message__text')
			let p = document.createElement('p')
			if(minute < 10){
				message.time = hozr + ':' + '0' + minute
			}
			else {
				message.time = hozr + ':' + minute
			}
			p.textContent = message.time
			p.classList.add('message__time__sent')
			newPiText.textContent = message.body
			
			
			newLiElementInRender.appendChild(newPiText)
			newLiElementInRender.appendChild(p)
			parentElement.appendChild(newLiElementInRender)
		}
		
		else if(message.isMine == false){
			let newLiElementInRender = document.createElement('li')
			newLiElementInRender.classList.add('message__her')
			let newPiText = document.createElement('p')
			newPiText.classList.add('message__text')
			let p = document.createElement('p')
			if(minute < 10){
				message.time = hozr + ':' + '0' + minute
			}
			else {
				message.time = hozr + ':' + minute
			}
			p.textContent = message.time
			p.classList.add('message__time__sent')
			newPiText.textContent = message.body
			
			
			newLiElementInRender.appendChild(newPiText)
			newLiElementInRender.appendChild(p)
			parentElement.appendChild(newLiElementInRender)
		}
		// let currentTime = moment().format(' h:mm a');
	}
}

$(usersListElement).on('click','li', function() {
	$(this).removeClass('users__item_hover').siblings().addClass('users__item_hover')
	$(this).addClass('users__item__selected').siblings().removeClass('users__item__selected')
	
})
















