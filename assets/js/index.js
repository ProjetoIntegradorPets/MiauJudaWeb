// ADD button
function toggleAddButton() {
    var addButton = document.getElementById("addButton-content");
    if (addButton.classList.contains('show')) {
      addButton.classList.remove('show');
    } else {
      addButton.classList.add('show');
    }
    document.addEventListener('click', closeOnClickOutside);
}

function closeOnClickOutside(event) {
    var addButton = document.getElementById("addButton-content");
    
    if (!addButton.contains(event.target) && !event.target.matches('.addButton-btn')) {
      addButton.classList.remove('show');
      
      document.removeEventListener('click', closeOnClickOutside);
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    // JSON.parse(localStorage.getItem('pets')) || 
    let pets = [{"nome":"Rex","raca":"Labrador","descricao":"Cachorro amigável","categoria":"Cachorro"},{"nome":"Max","raca":"Pastor Alemão","descricao":"Cachorro enérgico","categoria":"Cachorro"},{"nome":"Buddy","raca":"Golden Retriever","descricao":"Cachorro fiel","categoria":"Cachorro"},{"nome":"Rocky","raca":"Bulldog","descricao":"Cachorro protetor","categoria":"Cachorro"},{"nome":"Charlie","raca":"Beagle","descricao":"Cachorro brincalhão","categoria":"Cachorro"},{"nome":"Bucky","raca":"Ragdoll","descricao":"Cachorro esperto","categoria":"Cachorro"},{"nome":"Bella","raca":"Golden Retriever","descricao":"Cachorro alegre","categoria":"Cachorro"},{"nome":"Duke","raca":"Bulldog","descricao":"Cachorro fiel","categoria":"Cachorro"},{"nome":"Bentley","raca":"Beagle","descricao":"Cachorro brincalhão","categoria":"Cachorro"},{"nome":"Ranger","raca":"Labrador","descricao":"Cachorro protetor","categoria":"Cachorro"},{"nome":"Diesel","raca":"Pastor Alemão","descricao":"Cachorro enérgico","categoria":"Cachorro"},{"nome":"Toby","raca":"Golden Retriever","descricao":"Cachorro amigável","categoria":"Cachorro"},{"nome":"Luna","raca":"Siamês","descricao":"Gato brincalhão","categoria":"Gato"},{"nome":"Mia","raca":"Persa","descricao":"Gato tranquilo","categoria":"Gato"},{"nome":"Lola","raca":"Maine Coon","descricao":"Gato carinhoso","categoria":"Gato"},{"nome":"Nala","raca":"Bengal","descricao":"Gato curioso","categoria":"Gato"},{"nome":"Simba","raca":"Maine Coon","descricao":"Gato brincalhão","categoria":"Gato"},{"nome":"Zoe","raca":"Bengal","descricao":"Gato curioso","categoria":"Gato"},{"nome":"Shadow","raca":"Ragdoll","descricao":"Gato carinhoso","categoria":"Gato"},{"nome":"Chloe","raca":"Siamês","descricao":"Gato tranquilo","categoria":"Gato"},{"nome":"Gracie","raca":"Persa","descricao":"Gato esperto","categoria":"Gato"},{"nome":"Tiger","raca":"Maine Coon","descricao":"Gato medroso","categoria":"Gato"}];
    
    try {
        // Faça a requisição AJAX
        fetch('request.php')
        .then(response => response.json())
        .then(data => {
            pets = data;
            renderPets();
        });
    } catch (error) {
        console.log(error);
    }

    // ================ Page variables
    const petsPerPage = 8;
    let currentPage = 1;
    let currentFilter = 'todos';

    // ================ Config variables
    const petList = document.getElementById('petList');
    const tabButtons = document.querySelectorAll('.tab-button');

    const closeButtons = document.querySelectorAll('.close-button')

    const cadButtons = document.querySelectorAll('.add_btns');
    const addPetModal = document.querySelectorAll('.modal');
    const addPetForm = document.querySelectorAll('#addPetForm');

    const helpButton = document.querySelector('.help-button');
    const helpModal = document.getElementById('helpModal');

    const petDetailsModal = document.getElementById('petDetailsModal');
    const petDetailsName = document.getElementById('petDetailsName');
    const petDetailsImage = document.getElementById('petDetailsImage');
    const petDetailsDesc = document.getElementById('petDetailsDesc');
    const petDetailsType = document.getElementById('petDetailsType');
    const deletePetButton = document.querySelector('.delete-button');

    // ================ Event Listeners
    // TabButtons switch
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.tab;
            currentPage = 1;
            renderPets();
        });
    });

    // Display Block
    cadButtons.forEach((e) => {
        e.addEventListener('click', () => {
            if (login_status === 'true'){ // login_status from logged.js
                const mod = document.getElementById(`addPetModal_${e.id}`);
                mod.style.display = 'block';
            }else{
                window.location.href = "validar.html";
            }
        });
    })

    if(helpButton) helpButton.addEventListener('click', () => {
        helpModal.style.display = 'block';
    });

    // Close Buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (addPetModal) addPetModal.forEach((e) => {
                e.style.display = 'none';
                if (e.id.substring(0, 12) === 'addPetModal')
                e.reset();
            });
            
            petDetailsModal.style.display = 'none';
            if(helpModal) helpModal.style.display = 'none'; 
        });
    });

    // Create pet - SUBMIT FORM
    addPetForm.forEach(e => e.addEventListener('submit', (j) => addNewPet(j)));
    

    // ================ Functions
    function renderPets(){
        petList.innerHTML = '';

        // Slice petList for Render
        const startIndex = (currentPage - 1) * petsPerPage;
        const endIndex = startIndex + petsPerPage;
        const filteredPets = pets.filter(pet => currentFilter === 'todos' || 
                                                (currentFilter === 'caes' && pet.categoria === 'Cachorro') || 
                                                (currentFilter === 'gatos' && pet.categoria === 'Gato'));
        const petsToShow = filteredPets.slice(startIndex, endIndex);
        // Create petsToShow list
        petsToShow.forEach(pet => {
            const petCard = document.createElement('div');

            petCard.className = 'pet-card';
            petCard.innerHTML = `
                <img src="https://v0.dev/placeholder.svg" alt="${pet.nome}">
                <div class="pet-info">
                    <h3>${pet.nome}</h3>
                    <p>${pet.descricao}</p>
                </div>
            `;

            petCard.addEventListener('click', () => showPetDetails(pet));
            petList.appendChild(petCard);
        });

        // Update the number of pages
        updatePagination(filteredPets.length);
    }

    function updatePagination(totalPets) {
        // Get elements
        const totalPages = Math.ceil(totalPets / petsPerPage);
        const paginationContainer = document.querySelector('.pagination');
        paginationContainer.innerHTML = '';

        // Create pageButons (1  2  3 >)
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');

            pageButton.className = `page-button ${i === currentPage ? 'active' : ''}`;
            pageButton.textContent = i;

            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderPets();
            });

            paginationContainer.appendChild(pageButton);
        }

        // ADD Arrow ( > )
        if (totalPages > 1) {
            const nextButton = document.createElement('button');

            nextButton.className = 'page-button';
            nextButton.textContent = '>';

            nextButton.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderPets();
                }
            });

            paginationContainer.appendChild(nextButton);
        }
    }

    function showPetDetails(pet) {
        // display informations
        petDetailsName.textContent = pet.nome;
        // petDetailsImage.src = pet.image;
        petDetailsImage.src = 'https://v0.dev/placeholder.svg';
        petDetailsImage.alt = pet.nome;
        petDetailsDesc.textContent = `Descricao: ${pet.descricao}`;
        petDetailsType.textContent = `Tipo: ${pet.categoria === 'Cachorro' ? 'Cão' : 'Gato'}`;
        petDetailsModal.style.display = 'block';

        // Delete pet
        deletePetButton.onclick = () => {
            if (confirm('Tem certeza que deseja excluir este pet?')) {
                pets = pets.filter(p => p.id !== pet.id);
                savePetsToLocalStorage();
                renderPets();
                petDetailsModal.style.display = 'none';
            }
        };
    }

    function savePetsToLocalStorage() {
        localStorage.setItem('pets', JSON.stringify(pets));
    }
 
    function addNewPet(e) {
        e.preventDefault();
        const newPet = {
            id: Date.now(),
            name: document.getElementById('petName').value,
            type: document.getElementById('petType').value,
            description: document.getElementById('petDescription').value,
            location: document.getElementById('petLocation').value,
            image: document.getElementById('petImage').value
        };
        
        pets.unshift(newPet);
        savePetsToLocalStorage();
        // MUDAR O CÓDIGO ABAIXO
        if (addPetModal) addPetModal.forEach((e) => {
            e.style.display = 'none';
        });
        currentPage = 1;
        currentFilter = 'todos';
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabButtons[0].classList.add('active');
        renderPets();
        addPetForm.forEach(e => e.reset());
    }

    // ================ Call functions
    renderPets();
});
