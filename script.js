const spellsData = [
    { id: 1, name: "Огненный шар", description: "Яркий луч вылетает из вашего указательного пальца в точку, выбранную вами в пределах дистанции, где и происходит взрыв пламени с гулким ревом. Все существа в пределах сферы с радиусом 20 футов с центром в этой точке должны совершить спасбросок Ловкости. Цель получает 8к6 урона огнём при провале или половину этого урона при успехе. Этот огонь огибает углы. Он воспламеняет горючие предметы, которые никто не несет и не носит.", image: "img/spells/Fireball.png", level: "3" },
    { id: 2, name: "Ледяная стрела", description: "Описание ледяной стрелы", image: "img/spells/Arrow_of_Ice_Faded.png", level: "1" },
    { id: 3, name: "Кислотная стрела", description: "Описание кислотной стрелы", image: "img/spells/Arrow_of_Ice_Faded.png", level: "2" },
    { id: 4, name: "Щит", description: "Описание щита", image: "img/spells/Arrow_of_Ice_Faded.png", level: "1" },
    { id: 5, name: "Луч холода", description: "Описание луча холода", image: "img/spells/Arrow_of_Ice_Faded.png", level: "0" },
    { id: 6, name: "Магическая рука", description: "Описание магической руки", image: "img/spells/Arrow_of_Ice_Faded.png", level: "0" },
    { id: 7, name: "Невидимость", description: "Описание невидимости", image: "img/spells/Arrow_of_Ice_Faded.png", level: "2" },
    { id: 8, name: "Иллюзорный двойник", description: "Описание иллюзорного двойника", image: "img/spells/Arrow_of_Ice_Faded.png", level: "3" },
    { id: 9, name: "Гроза", description: "Описание грозы", image: "img/spells/Arrow_of_Ice_Faded.png", level: "4" },
    { id: 10, name: "Стена огня", description: "Описание стены огня", image: "img/spells/Arrow_of_Ice_Faded.png", level: "4" },
    { id: 11, name: "Изгнание", description: "Описание изгнания", image: "img/spells/Arrow_of_Ice_Faded.png", level: "5" },
    { id: 12, name: "Замедление", description: "Описание замедления", image: "img/spells/Arrow_of_Ice_Faded.png", level: "3" },
    { id: 13, name: "Превращение", description: "Описание превращения", image: "img/spells/Arrow_of_Ice_Faded.png", level: "4" },
    { id: 14, name: "Остановка времени", description: "Описание остановки времени", image: "img/spells/Arrow_of_Ice_Faded.png", level: "9" }
];

const bestiaryData = [
    { id: 1, name: "Гоблин", description: "Описание гоблина", image: "img/bestiary/goblin.png", danger: "0" },
    // ... добавьте остальных монстров
];

let currentData = spellsData; // По умолчанию отображаем заклинания

// Получаем элементы DOM
const spellsLink = document.getElementById("spells-link");
const bestiaryLink = document.getElementById("bestiary-link");
const itemList = document.getElementById("item-list");
const descriptionTitle = document.getElementById("description-title");
const descriptionText = document.getElementById("description-text");
const searchInput = document.getElementById("search-input");
const levelDangerLabel = document.getElementById("level-danger-label");
const levelDangerValue = document.getElementById("level-danger-value");
const filterButton = document.getElementById("filter-button");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");

// Функция для отображения элементов (заклинаний или бестиария)
function displayItems(data) {
    itemList.innerHTML = ""; // Очищаем список

    if (currentData === spellsData) {
        // Отображаем заголовок "Заклинания"
        const spellsTitle = document.createElement("h2");
        spellsTitle.textContent = "Заклинания";
        spellsTitle.classList.add("spells-title"); // Добавляем класс для стилизации
        itemList.appendChild(spellsTitle);

        // Сортируем заклинания: сначала заговоры, потом по уровню
        const cantrips = data.filter(item => item.level === "0");
        const leveledSpells = data.filter(item => item.level !== "0").sort((a, b) => parseInt(a.level) - parseInt(b.level));

        // Отображаем заговоры
        if (cantrips.length > 0) {
            displaySpellLevel("Заговоры", cantrips);
        }

        // Отображаем заклинания по уровням
        for (let i = 1; i <= 9; i++) {
            const spellsOfLevel = leveledSpells.filter(item => item.level === i.toString());
            if (spellsOfLevel.length > 0) {
                displaySpellLevel(`Уровень ${i}`, spellsOfLevel);
            }
        }
    } else {
        // Отображение бестиария (без изменений)
        data.forEach(item => {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;
            img.addEventListener("mouseover", () => showDescription(item));
            img.addEventListener("click", () => openModal(item));

            img.style.width = '57px';
            img.style.height = '57px';
            itemList.appendChild(img);
        });
    }

    // Отображаем первый элемент сразу после загрузки данных
    if (data.length > 0) {
        showDescription(data[0]);
    }
    else {
        descriptionTitle.textContent = "";
        descriptionText.textContent = "";
        levelDangerLabel.textContent = "";
        levelDangerValue.textContent = "";

    }
}

function displaySpellLevel(level, spells) {
    // Создаем разделитель
    const divider = document.createElement("hr");
    divider.classList.add("spell-divider");
    itemList.appendChild(divider);

    // Создаем заголовок уровня
    const levelTitle = document.createElement("h3");
    levelTitle.textContent = level;
    levelTitle.classList.add("level-title");
    itemList.appendChild(levelTitle);

    // Отображаем заклинания уровня
    spells.forEach(item => {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.addEventListener("mouseover", () => showDescription(item));
        img.addEventListener("click", () => openModal(item));

        img.style.width = '57px';
        img.style.height = '57px';
        itemList.appendChild(img);
    });
}

// Функция для отображения описания при наведении
function showDescription(item) {
    descriptionTitle.textContent = item.name;
    descriptionTitle.classList.add("centered-title");
    descriptionText.textContent = item.description;

    if (currentData === spellsData) {
        levelDangerLabel.textContent = "Уровень:";
        levelDangerValue.textContent = item.level;
        const levelSpan = document.createElement("span");
        levelSpan.textContent = "Уровень: " + item.level;
        levelSpan.classList.add("level-span");
        descriptionTitle.insertBefore(levelSpan, descriptionTitle.firstChild);
    } else if (currentData === bestiaryData) {
        levelDangerLabel.textContent = "Опасность:";
        levelDangerValue.textContent = item.danger;
    } else {
        levelDangerLabel.textContent = "";
        levelDangerValue.textContent = "";
    }
    descriptionText.textContent = item.description;
}

// Функция для открытия модального окна
function openModal(item) {
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = "none";
}

// Обработчики событий для переключения между заклинаниями и бестиарием
spellsLink.addEventListener("click", (e) => {
    e.preventDefault();
    currentData = spellsData;
    displayItems(currentData);
});

bestiaryLink.addEventListener("click", (e) => {
    e.preventDefault();
    currentData = bestiaryData;
    displayItems(currentData);
});

// Обработчик события для закрытия модального окна
closeButton.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {  // Закрытие по клику вне модального окна
    if (event.target === modal) {
        closeModal();
    }
});

// Инициализация: отображаем заклинания при загрузке страницы
displayItems(currentData);

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = currentData.filter(item => {
        return item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
    });
    displayItems(filteredData);
});
