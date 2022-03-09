let icons =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let container = document.querySelector('.icons-container')
let types = document.querySelector('#types')
let arrType = []

function insertIcons (iconsArray, iconsContainer){
    container.innerHTML = ''
    iconsArray.forEach(element =>{
        let card = document.createElement('div')
        card.classList.add('card');
        card.innerHTML = `<i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i><div>${element.name.toLocaleUpperCase()}</div>`;
        iconsContainer.append(card);
    });
}
insertIcons(icons, container)

icons.forEach((ele) => {
    if(!arrType.includes(ele.type)){
        arrType.push(ele.type)
    }
})
arrType.forEach((ele)=>{
    types.innerHTML += `<option value="${ele}">${ele}</option>`
})

types.addEventListener('change', function(){
    let typeSelected = this.value
    let filteredIcons = []
    if (typeSelected == 'all'){
        insertIcons(icons, container)
    } else{
        filteredIcons = icons.filter(iconArgument=>{
            if(iconArgument.type == typeSelected){
                return true;
            }
        })
    }
    insertIcons(filteredIcons, container)

    
    console.log(filteredIcons)
});