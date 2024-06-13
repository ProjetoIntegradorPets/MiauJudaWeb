function change(v){
    if(v){
        document.getElementsByClassName('btn_tipo')[1].id = 'clicked'
        document.getElementsByClassName('btn_tipo')[0].id = ''
    }
    else{
        document.getElementsByClassName('btn_tipo')[0].id = 'clicked'
        document.getElementsByClassName('btn_tipo')[1].id = ''
    }
}

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');


selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]

	if(image.size > 5000000) {
        alert("Tamanho da imagem maior que 5MB");
        return;
    }
    
    const reader = new FileReader();
    reader.onload = ()=> {
        const allImg = imgArea.querySelectorAll('img');
        allImg.forEach(item=> item.remove());
        const imgUrl = reader.result;
        const img = document.createElement('img');
        img.src = imgUrl;
        imgArea.appendChild(img);
        imgArea.classList.add('active');
        imgArea.dataset.img = image.name;
    }
    reader.readAsDataURL(image);
})