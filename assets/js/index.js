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
    let pets = JSON.parse(localStorage.getItem('pets')) || [
        { id: 1, name: 'Luna', location: 'São Paulo, SP', image: 'https://v0.dev/placeholder.svg', type: 'cat' },
        { id: 2, name: 'Max', location: 'Rio de Janeiro, RJ', image: 'https://v0.dev/placeholder.svg', type: 'dog' },
        { id: 3, name: 'Bella', location: 'Belo Horizonte, MG', image: 'https://v0.dev/placeholder.svg', type: 'dog' },
        { id: 4, name: 'Oliver', location: 'Porto Alegre, RS', image: 'https://v0.dev/placeholder.svg', type: 'cat' },
        { id: 5, name: 'Charlie',  location: 'Curitiba, PR', image: 'https://v0.dev/placeholder.svg', type: 'dog' },
        { id: 6, name: 'Lucy', location: 'Salvador, BA', image: 'https://v0.dev/placeholder.svg', type: 'cat' },
        { id: 7, name: 'Milo', location: 'Brasília, DF', image: 'https://v0.dev/placeholder.svg', type: 'dog' },
        { id: 8, name: 'Nala', location: 'Fortaleza, CE', image: 'https://v0.dev/placeholder.svg', type: 'cat' },
        { id: 9, name: 'Rocky', location: 'Manaus, AM', image: 'https://v0.dev/placeholder.svg', type: 'dog' },
        { id: 10, name: 'Simba', location: 'Recife, PE', image: 'https://v0.dev/placeholder.svg', type: 'cat' },
        { id: 11, name: 'Daisy', location: 'Goiânia, GO', image: 'https://v0.dev/placeholder.svg', type: 'dog' },
        { id: 12, name: 'Loki', location: 'Belém, PA', image: 'https://v0.dev/placeholder.svg', type: 'cat' },
    ];

    // ================ Global variables
    const petsPerPage = 8;
    let currentPage = 1;
    let currentFilter = 'todos';

    // ================ Init variables
    const petList = document.getElementById('petList');
    const tabButtons = document.querySelectorAll('.tab-button');

    const closeButtons = document.querySelectorAll('.close-button')

    const addPetButton = document.getElementById('addButton-btn');
    const addPetModal = document.getElementById('addPetModal');

    const helpButton = document.querySelector('.help-button');
    const helpModal = document.getElementById('helpModal');

    const petDetailsModal = document.getElementById('petDetailsModal');
    const petDetailsName = document.getElementById('petDetailsName');
    const petDetailsImage = document.getElementById('petDetailsImage');
    const petDetailsLocation = document.getElementById('petDetailsLocation');
    const petDetailsType = document.getElementById('petDetailsType');
    const deletePetButton = document.getElementById('deletePetButton');

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
    addPetButton.addEventListener('click', () => {
        // addPetModal.style.display = 'block';
    });
    if(helpButton) helpButton.addEventListener('click', () => {
        helpModal.style.display = 'block';
    });
    // Close Buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            addPetModal.style.display = 'none';
            document.getElementById('petName').value = '';
            document.getElementById('petType').selectedIndex = 0;
            document.getElementById('petLocation').value = '';
            document.getElementById('petImage').value = '';
            
            petDetailsModal.style.display = 'none';
            helpModal.style.display = 'none'; 
        });
    });

    // ================ Functions
    function renderPets(){
        petList.innerHTML = '';

        // Slice petList for Render
        const startIndex = (currentPage - 1) * petsPerPage;
        const endIndex = startIndex + petsPerPage;
        const filteredPets = pets.filter(pet => currentFilter === 'todos' || 
                                                (currentFilter === 'caes' && pet.type === 'dog') || 
                                                (currentFilter === 'gatos' && pet.type === 'cat'));
        const petsToShow = filteredPets.slice(startIndex, endIndex);

        // Create petsToShow list
        petsToShow.forEach(pet => {
            const petCard = document.createElement('div');

            petCard.className = 'pet-card';
            petCard.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}">
                <div class="pet-info">
                    <h3>${pet.name}</h3>
                    <p>${pet.location}</p>
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
        petDetailsName.textContent = pet.name;
        petDetailsImage.src = pet.image;
        petDetailsImage.alt = pet.name;
        petDetailsLocation.textContent = `Localização: ${pet.location}`;
        petDetailsType.textContent = `Tipo: ${pet.type === 'dog' ? 'Cão' : 'Gato'}`;
        petDetailsModal.style.display = 'block';

        // Delete pet
        deletePetButton.onclick = () => {
            if (confirm('Tem certeza que deseja excluir este pet?')) {
                pets = pets.filter(p => p.id !== pet.id);
                // savePetsToLocalStorage();
                renderPets();
                petDetailsModal.style.display = 'none';
            }
        };
    }

    // ================ Call functions
    renderPets();
});
