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
<p>Рука не может совершать атаки, активировать магические предметы и переносить более 10 фунтов (4,5 кг).</p>`, image: "img/spells/Mage_hand.png", level: "0", school: "Вызов", components: "В, С", castingTime: "1 действие", range: "30 футов", duration: "1 минута", classes: "бард, волшебник, изобретатель, колдун, чародей, <span title=`мистический ловкач`><i>плут</i></span>, <span title=`хранитель роя`><i>следопыт</i></span>", concentration: false, ritual: false},
{ id: 4, name: "Волшебный камень", description: `
<p>Вы касаетесь от 1 до 3 камней и наделяете их магической силой. Вы или кто-либо ещё можете совершить дальнобойную атаку заклинанием, кинув один из этих камней или запустив его при помощи пращи. Дальность броска рукой составляет 60 футов. Если кто-либо другой атакует этим камнем, он использует для броска атаки ваш модификатор базовой характеристики вместо своего. При попадании цель получает дробящий урон в размере 1к6 + ваш модификатор базовой характеристики. Вне зависимости от того, попал камень или нет, это заклинание перестаёт на него действовать.</p>
<p>Если вы накладываете это заклинание ещё раз, его эффект преждевременно заканчивается на тех камнях, что были зачарованы прежде.</p>`, image: "img/spells/Magic_stone.png", level: "0", school: "Преобразование", components: "В, С", castingTime: "1 бонусное действие", range: "Касание", duration: "1 минута", classes: "друид, изобретатель, колдун", concentration: false, ritual: false},
{ id: 5, name: "Вспышка мечей", description: `
<p>Вы на мгновение создаёте круг из вращающихся вокруг вас призрачных лезвий. Все остальные существа в пределах 5 футов от вас должны преуспеть в спасброске Ловкости, иначе получат 1к6 урона силовым полем.</p>
<p>Урон этого заклинания увеличивается на 1к6, когда вы достигаете 5-го уровня (2к6), 11-го уровня (3к6) и 17-го уровня (4к6).</p>`, image: "img/spells/Sword_burst.png", level: "0", school: "Вызов", components: "В", castingTime: "1 действие", range: "На себя (5-футовый радиус)", duration: "Мгновенная", classes: "волшебник, изобретатель, колдун, чародей", concentration: false, ritual: false},
{ id: 6, name: "Громовой клинок", description: `
<p>Вы взмахиваете оружием, выбранным в качестве материального компонента, и совершаете им рукопашную атаку оружием против одного существа в пределах 5 футов от вас. При попадании цель подвергается обычному эффекту от атаки этим оружием и покрывается бушующей энергией до начала вашего следующего хода. Если цель добровольно перемещается на 5 футов или более до окончания действия заклинания, она получает 1к8 урона звуком, и действие заклинания заканчивается.</p>
<p>Урон этого заклинания увеличивается, когда вы достигаете определённых уровней. На 5-м уровне рукопашная атака наносит дополнительно 1к8 урона звуком при попадании, а урон, получаемый при перемещении, увеличивается до 2к8. Оба броска урона снова увеличиваются на 1к8 на 11-м уровне (2к8 и 3к8) и на 17-м уровне (3к8 и 4к8).</p>`, image: "img/spells/Booming_blade.png", level: "0", school: "Воплощение", components: "С, М (рукопашное оружие стоимостью не менее 1 см)", castingTime: "1 действие", range: "На себя (5-футовый радиус)", duration: "1 раунд", classes: "волшебник, изобретатель, колдун, чародей", concentration: false, ritual: false},
{ id: 7, name: "Дружба", description: `<p>Пока заклинание активно, вы совершаете с преимуществом все проверки Харизмы, направленные на одно выбранное вами существо, не враждебное по отношению к вам. Когда заклинание оканчивается, существо понимает, что вы влияли на её отношение с помощью магии, и становится враждебным по отношению к вам. Существо, склонное к насилию, может напасть на вас. Другие могут требовать другого возмездия (решает Мастер), в зависимости от отношений, сложившихся между вами.</p>`, image: "img/spells/Friends.png", level: "0", school: "Очарование", components: "С, М (небольшое количество грима, наносимое на лицо при накладывании этого заклинания)", castingTime: "1 действие", range: "На себя", duration: "Концентрация, вплоть до 1 минуты", classes: "бард, волшебник, колдун, чародей", concentration: true, ritual: false},
{ id: 8, name: "Дубинка", description: `<p>Дерево дубинки или боевого посоха, который вы держите, наполняется силой природы. Пока заклинание активно, вы можете использовать свою базовую заклинательную характеристику вместо Силы для бросков рукопашной атаки и урона при использовании этого оружия, и кость урона становится равной к8. Если оружие не было магическим, оно становится им. Заклинание оканчивается, если вы наложите его ещё раз или выпустите оружие из рук.</p>`, image: "img/spells/Shillelagh.png", level: "0", school: "Преобразование", components: "В, С, М (омела, лист клевера и дубинка или боевой посох)", castingTime: "1 бонусное действие", range: "Касание", duration: "1 минута", classes: "друид", concentration: false, ritual: false},
{ id: 9, name: "Защита от оружия", description: `<p>Вы протягиваете руку и рисуете в воздухе ограждающий знак. Вы получаете до конца своего следующего хода сопротивление дробящему, колющему и рубящему урону, причиненному атаками оружием.</p>`, image: "img/spells/Blade_ward.png", level: "0", school: "Ограждение", components: "В, С", castingTime: "1 действие", range: "На себя", duration: "1 раунд", classes: "бард, волшебник, колдун, чародей", concentration: false, ritual: false},
{ id: 10, name: "Злая насмешка", description: `
<p>Вы испускаете на существо, видимое в пределах дистанции, поток оскорблений вперемешку с тонкой магией. Если цель слышит вас (при этом она не обязана вас понимать), она должна преуспеть в спасброске Мудрости, иначе получит урон психической энергией 1к4, и следующий бросок атаки до конца своего следующего хода совершит с помехой.</p>
<p>Урон этого заклинания увеличивается на 1к4, когда вы достигаете 5-го уровня (2к4), 11-го уровня (3к4) и 17-го уровня (4к4).</p>`, image: "img/spells/Vicious_mockery.png", level: "0", school: "Очарование", components: "В", castingTime: "1 действие", range: "60 футов", duration: "Мгновенная", classes: "бард", concentration: false, ritual: false},
{ id: 11, name: "Искусство друидов", description: `
<p>Пошептавшись с духами природы, вы создаёте один из следующих эффектов в пределах дистанции:</p>
<p>• Вы создаёте крохотный безвредный ощутимый эффект, предсказывающий погоду в текущем месте в течение следующих 24 часов. Это может быть золотистый шарик, означающий ясную погоду, облачко, означающее дождь, снежинка, и так далее. Эффект длится 1 раунд.</p>
<p>• Вы мгновенно заставляете цветок распуститься, семечко прорасти, или почку раскрыться.</p>
<p>• Вы создаёте мгновенный безвредный ощутимый эффект, такой как падающие листья, порыв ветра, звук маленького животного, или слабый запах скунса. Эффект должен находиться в кубе с длиной ребра 5 футов.</p>
<p>• Вы мгновенно зажигаете или тушите свечу, факел или небольшой костёр.</p>`, image: "img/spells/Druidcraft.png", level: "0", school: "Преобразование", components: "В, С", castingTime: "1 действие", range: "30 футов", duration: "Мгновенная", classes: "друид, <span title=`мистический лучник`><i>воин</i></span>, <span title=`путь великана`><i>варвар</i></span>", concentration: false, ritual: false},
{ id: 12, name: "Иссушающий укол", description: `
<p>Вы вытягиваете жизненные силы одного видимого существа в пределах дистанции. Цель должна преуспеть в спасброске Телосложения, иначе получит 1к4 урона некротической энергией и упадёт ничком.</p>
<p>Урон этого заклинания увеличивается на 1к4, когда вы достигаете 5-го уровня (2к4), 11-го уровня (3к4) и 17-го уровня (4к4).</p>`, image: "img/spells/Sapping_sting.png", level: "0", school: "Некромантия", components: "В, С", castingTime: "1 действие", range: "30 футов", duration: "Мгновенная", classes: "<span title=`магия гравитургии, магия хронургии`><i>волшебник</i></span>", concentration: false, ritual: false},
{ id: 13, name: "Клинок зелёного пламени", description: `
<p>Вы взмахиваете оружием, выбранным в качестве материального компонента, и совершаете им рукопашную атаку оружием против одного существа в пределах 5 футов от вас. При попадании цель подвергается обычному эффекту атаки этим оружием, и вы можете заставить зелёный огонь перекинуться от цели к другому существу по вашему выбору, которое вы можете видеть в пределах 5 футов от цели. Второе существо получает урон огнём, равный вашему модификатору базовой характеристики.</p>
<p>Урон этого заклинания увеличивается, когда вы достигаете определенных уровней. На 5-м уровне рукопашная атака наносит дополнительно 1к8 урона огнём, а урон, получаемый вторым существом, увеличивается до 1к8 + ваш модификатор базовой характеристики. Оба этих урона увеличиваются на 1к8 на 11-м уровне (2к8 и 2к8) и 17-м уровне (3к8 и 3к8).</p>`, image: "img/spells/Green-flame_blade.png", level: "0", school: "Воплощение", components: "С, М (рукопашное оружие стоимостью не менее 1 см)", castingTime: "1 действие", range: "На себя (5-футовый радиус)", duration: "Мгновенная", classes: "волшебник, изобретатель, колдун, чародей", concentration: false, ritual: false},
{ id: 14, name: "Кодировка мыслей", description: `
<p>Прикладывая палец к своей голове, вы извлекаете воспоминание, идею или сообщение из своего разума и трансформируете её в осязаемую ленту светящейся энергии — ленту мысли. Она существует в течение всей длительности заклинания или пока вы не наложите это заклинание снова. Лента мысли появляется в свободном пространстве в пределах 5 футов от вас как Крошечный невесомый полутвёрдый предмет, который можно держать и нести как ленту. В остальном она неподвижна.</p>
<p>Если вы накладываете это заклинание, пока концентрируетесь на заклинании или умении, позволяющем читать мысли других существ или манипулировать ими (например, обнаружение мыслей [detect thoughts] или изменение памяти [modify memory]), вы можете трансформировать в ленту мысли читаемые вами мысли или воспоминания.</p>
<p>Если вы накладываете это заклинание, пока держите ленту мысли, вы мгновенно получаете ту информацию, что содержит лента (накладывание заклинания обнаружение мыслей [detect thoughts] на ленту имеет тот же эффект).</p>`, image: "img/spells/Encode_thoughts.png", level: "0", school: "Очарование", components: "С", castingTime: "1 действие", range: "На себя", duration: "Вплоть до 8 часов", classes: "Предыстория Оперативник Димиров", concentration: false, ritual: false},
{ id: 15 , name: "Лассо молнии", description: `
<p>Вы создаёте хлыст из молний, поражающий одно существо по вашему выбору, которое вы можете видеть в пределах 15 футов от вас. Цель должна преуспеть в спасброске Силы, иначе будет притянута на 10 футов по прямой к вам, после чего получит 1к8 урона электричеством, если окажется в пределах 5 футов от вас.</p>
<p>Урон этого заклинания увеличивается на 1к8, когда вы достигаете 5-го уровня (2к8), 11-го уровня (3к8) и 17-го уровня (4к8).</p>`, image: "img/spells/Lightning_lure.png", level: "0", school: "Воплощение", components: "В", castingTime: "1 действие", range: "На себя (15-футовый радиус)", duration: "Мгновенная", classes: "волшебник, изобретатель, колдун, чародей", concentration: false, ritual: false},
{ id: 16, name: "Леденящее прикосновение", description: `
<p>Вы создаете призрачную руку скелета в пространстве существа, находящегося в пределах дистанции. Совершите дальнобойную атаку заклинанием по существу, чтобы окутать его могильным холодом. При попадании цель получает 1к8 урона некротической энергией и не может восстанавливать хиты до начала вашего следующего хода. Все это время рука держится за цель.</p>
<p>Если вы попадаете по Нежити, то она также совершает по вам броски атаки с помехой до конца вашего следующего хода.</p>
<p>Урон этого заклинания увеличивается на 1к8, когда вы достигаете 5-го уровня (2к8), 11-го уровня (3к8) и 17-го уровня (4к8).</p>`, image: "img/spells/Chill_touch.png", level: "0", school: "Некромантия", components: "В, С", castingTime: "1 действие", range: "120 футов", duration: "1 раунд", classes: "волшебник, колдун, чародей, <span title=`круг спор`><i>друид</i></span>", concentration: false, ritual: false},
{ id: 17, name: "Лепка земли", description: `
<p>Выберите область земли или камня, видимую в пределах дистанции и помещающуюся в куб с длиной ребра 5 футов. Вы можете управлять ей одним из нижеперечисленных способов:</p>
<p>• Если вы нацелились на область рыхлой земли, вы можете мгновенно извлечь её и переместить на расстояние до 5 футов по земле. Это перемещение не обладает достаточной силой, чтобы причинить урон.</p>
<p>• Вы можете создавать узоры или цвета на поверхности земли или камня, для передачи слов, изображений или форм. Эффект действует 1 час.</p>
<p>• Если выбранная область находится на поверхности земли, вы можете сделать её труднопроходимой. В качестве альтернативы вы можете сделать труднопроходимую местность нормальной. Эффект действует 1 час.</p>
<p>Если вы накладываете это заклинание несколько раз, вы не можете поддерживать более 2 длительных эффектов одновременно. Вы можете действием отменить один из действующих эффектов.</p>`, image: "img/spells/Mold_earth.png", level: "0", school: "Преобразование", components: "С", castingTime: "1 действие", range: "30 футов", duration: "Мгновенная или 1 час", classes: "волшебник, друид, чародей", concentration: false, ritual: false}
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
    const descriptionEl = document.getElementById("description-text");
    descriptionEl.style.fontSize = "14px";
    while (descriptionEl.scrollHeight > descriptionEl.clientHeight && 
           parseInt(descriptionEl.style.fontSize) > 10) {
        const newSize = parseInt(descriptionEl.style.fontSize) - 1;
        descriptionEl.style.fontSize = `${newSize}px`;
    }
}

function getSchoolImage(school) {
    return `img/schools/${school.toLowerCase()}.png`; // Путь к изображению
}

function formatComponents(components) {
    // Извлекаем только первые буквы компонентов (В, С, М), игнорируя описания в скобках
    const componentLetters = components.split(',')
        .map(c => c.trim().toUpperCase().charAt(0))
        .filter(c => ['В', 'С', 'М'].includes(c));
    
    // Проверяем каждый компонент
    const v = componentLetters.includes('В') ? '<strong>В</strong>' : '<span class="inactive-component">В</span>';
    const s = componentLetters.includes('С') ? '<strong>С</strong>' : '<span class="inactive-component">С</span>';
    const m = componentLetters.includes('М') ? '<strong>М</strong>' : '<span class="inactive-component">М</span>';
    
    return `${v}${s}${m}`;
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
