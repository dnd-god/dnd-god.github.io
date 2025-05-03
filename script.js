const spellsData = [
    //{ id: , name: "", description: `<p></p>`, image: "img/spells/.png", level: "", school: "", components: "", higherLevels: "", castingTime: "", range: "", duration: "", classes: "", concentration: false, ritual: false},
{ id: 1, name: "Брызги кислоты", description: `<p>Вы кидаете кислотный шарик. Выберите одно существо, которое вы видите в пределах дистанции, или два существа, которых вы видите в пределах дистанции, находящихся в пределах 5 футов друг от друга. Цель должна преуспеть в спасброске Ловкости, иначе получит 1к6 урона кислотой.</p>
<p>Урон этого заклинания увеличивается на 1к6, когда вы достигаете 5-го уровня (2к6), 11-го уровня (3к6) и 17-го уровня (4к6).</p>`, image: "img/spells/Acid_Splash.png", level: "0", school: "Вызов", components: "В, С", castingTime: "1 действие", range: "60 футов", duration: "Мгновенная", classes: "волшебник, изобретатель, чародей", concentration: false, ritual: false},
{ id: 2, name: "Власть над огнём", description: `<p>Вы выбираете немагическое пламя, которое вы можете видеть в пределах дистанции и которое помещается в куб с длиной ребра 5 футов. Вы можете управлять им одним из нижеперечисленных способов:</p>
<p>• Вы можете мгновенно распространить огонь на 5 футов в одном направлении, если там присутствует дерево или другое топливо.</p>
<p>• Вы можете мгновенно потушить огонь в кубе.</p>
<p>• Вы можете увеличить или уменьшить вдвое область яркого и тусклого света, излучаемого пламенем, а также поменять его цвет. Эффект действует 1 час.</p>
<p>• Вы можете сотворить в огне изображение, которое будет отдалённо напоминать существо, предмет или место, и двигаться согласно вашим указаниям. Эффект действует 1 час.</p>
<p>Если вы накладываете это заклинание несколько раз, то вы не можете поддерживать более 3 длительных эффектов одновременно. Вы можете действием отменить один из действующих эффектов.</p>`, image: "img/spells/Control_flames.png", level: "0", school: "Преобразование", components: "С", castingTime: "1 действие", range: "60 футов", duration: "Мгновенная или 1 час", classes: "волшебник, друид, чародей", concentration: false, ritual: false},
{ id: 3, name: "Волшебная рука", description: `
<p>В точке, выбранной вами в пределах дистанции, появляется призрачная парящая рука. Рука существует, пока заклинание активно или пока вы не отпустите её действием. Рука исчезает, если окажется более чем в 30 футах от вас или если вы повторно наложите это заклинание.</p>
<p>Вы можете действием контролировать руку. С её помощью вы можете манипулировать предметами, открывать незапертые двери и контейнеры, убирать предметы в открытые контейнеры и доставать их оттуда или выливать содержимое флаконов. При каждом использовании руки вы можете переместить её на 30 футов.</p>
<p>Рука не может совершать атаки, активировать магические предметы и переносить более 10 фунтов (4,5 кг).</p>`, image: "img/spells/Mage_hand.png", level: "0", school: "Вызов", components: "В, С", castingTime: "1 действие", range: "30 футов", duration: "1 минута", classes: "бард, волшебник, изобретатель, колдун, чародей, <span title=`мистический ловкач`><i>плут</i></span>", concentration: false, ritual: false}
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
    const descriptionContainer = document.querySelector(".description");
    descriptionContainer.style.height = "250px";
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");

    const indicatorsContainer = document.createElement("div");
    indicatorsContainer.classList.add("indicators-container");

    const levelSpan = document.createElement("span");
    levelSpan.textContent = `Уровень: ${item.level}`;
    levelSpan.classList.add("level-span");
    indicatorsContainer.appendChild(levelSpan);

    if (item.concentration) {
        const concSpan = document.createElement("span");
        concSpan.textContent = "●";
        concSpan.classList.add("concentration-indicator");
        concSpan.setAttribute("data-tooltip", "Концентрация"); // Добавляем текст подсказки
        indicatorsContainer.appendChild(concSpan);
    }

    // Индикатор ритуала (если есть)
    if (item.ritual) {
        const ritualSpan = document.createElement("span");
        ritualSpan.textContent = "⛧";
        ritualSpan.classList.add("ritual-indicator");
        ritualSpan.setAttribute("data-tooltip", "Ритуал"); // Добавляем текст подсказки
        indicatorsContainer.appendChild(ritualSpan);
    }
    titleContainer.appendChild(indicatorsContainer);

    descriptionTitle.textContent = item.name;
    descriptionTitle.classList.add("centered-title");
    titleContainer.appendChild(descriptionTitle);
    

    // Добавляем контейнер для иконок и компонентов
    const spellInfoContainer = document.createElement("div");
    spellInfoContainer.classList.add("spell-info-icons");

    // Символ школы (изображение)
    const schoolImage = document.createElement("img");
    schoolImage.classList.add("school-symbol");
    schoolImage.src = getSchoolImage(item.school);
    schoolImage.alt = item.school;
    schoolImage.title = item.school;
    spellInfoContainer.appendChild(schoolImage);

    // Компоненты
    const components = item.components.toUpperCase();
    const componentsSpan = document.createElement("span");
    componentsSpan.classList.add("components");
    componentsSpan.innerHTML = formatComponents(components);
    spellInfoContainer.appendChild(componentsSpan);

    titleContainer.appendChild(spellInfoContainer);

    const aside = document.querySelector(".description");
    aside.innerHTML = "";
    aside.appendChild(titleContainer);

    descriptionText.innerHTML = item.description;
    descriptionContainer.scrollTop = 0;
    aside.appendChild(descriptionText);

    // Добавляем подпись внизу описания
    const hint = document.createElement("div");
    hint.classList.add("hint-text");
    hint.innerHTML = "Нажмите на заклинание чтобы увидеть подробное описание";
    aside.appendChild(hint);
}

function getSchoolImage(school) {
    return `img/schools/${school.toLowerCase()}.png`; // Путь к изображению
}

function formatComponents(components) {
    let formatted = "";
    // Проверяем каждый компонент и добавляем его, если он есть в строке компонентов
    formatted += components.includes("В") ? "<strong>В</strong>" : "<span class='inactive-component'>В</span>";
    formatted += components.includes("С") ? "<strong>С</strong>" : "<span class='inactive-component'>С</span>";
    formatted += components.includes("М") ? "<strong>М</strong>" : "<span class='inactive-component'>М</span>";
    return formatted;
}
// Функция для открытия модального окна
function openModal(item) {
    const levelBadge = `<span class="level-span">Уровень ${item.level}</span>`;
    
    modalTitle.innerHTML = `
        <div class="modal-header">
            <img src="${item.image}" alt="${item.name}" class="modal-spell-icon">
            <div>
                <h2>${item.name}</h2>
                ${levelBadge}
            </div>
        </div>
    `;

    let modalText = `
    <div class="spell-details">
        <div class="spell-stats">
            <p><strong>Время накладывания:</strong> ${item.castingTime}</p>
            <p><strong>Дистанция:</strong> ${item.range}</p>
            <p><strong>Длительность:</strong> ${item.duration} ${item.concentration ? ' (Концентрация)' : ''}</p>
            <p><strong>Компоненты:</strong> <span class="spell-components">${item.components}</span></p>
        </div>

        <div class="spell-description">
            ${item.description}
        </div>

        <div class="spell-divider"></div>

        <div class="spell-meta">
            <p><strong>Школа:</strong> <span class="spell-school">${item.school}</span></p>
            <p><strong>Классы:</strong> ${item.classes}</p>
        </div>`;
    // Добавляем блок "На больших уровнях", если он есть
    if (item.higherLevels) {
        modalText += `
        <div class="higher-levels">
            <div class="higher-levels-header">На больших уровнях ▼</div>
            <div class="higher-levels-content">${item.higherLevels}</div>
        </div>`;
    }

    modalText += `</div>`;
    modalDescription.innerHTML = modalText;
    modal.style.display = "block";

    // Добавляем обработчик клика для разворачивания блока
    if (item.higherLevels) {
        const header = document.querySelector('.higher-levels-header');
        const content = document.querySelector('.higher-levels-content');
        
        content.style.display = 'none'; // Сначала скрываем содержимое
        
        header.addEventListener('click', () => {
            if (content.style.display === 'none') {
                content.style.display = 'block';
                header.innerHTML = 'На больших уровнях ▲';
            } else {
                content.style.display = 'none';
                header.innerHTML = 'На больших уровнях ▼';
            }
        });
    }
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
