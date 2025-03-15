let startup_log1 = [
    [10, " COPYRIGHT IDM COMPUTER SYSTEMS INC. 1990-1997<br>"],
    [40, "           ---IDM BIOS ver. 1.5---<br>"],
    [40, "<br>"],
    [40, "          === C.I.O. «OBSERVERS» ===<br>"],
    [40, "    - ZASCHITIT'. OBEZOPASIT'. SOHRANIT'. -<br>"],
    [40, "<br>"],
    [6500, "Initializing...<br>"],
    [2000, "Checking internet connection status..."],
    [600, " OK<br>"],
    [100, "Verification passed<br>"],
    [300, "Connecting to C.I.O. «OBSERVERS» repo...<br>"],
    [800, "Connection established<br>"],
    [100, "Scaning src/cio_obs...<br>"],
    [600, "19840 new packages found<br>"],
    [200, "Requesting 19840 packages<br>"],
    [900, "Allocating storage space<br>"],
];
let startup_log2 = [
    [100, "All data downloaded"],
    [200, "Loading libraries"],
    [1000, "Executing..."],
];
let startup_log3 = [
    [200, "    _______________________________"],
    [30, "   /\\                              \\"],
    [30, "  /  \\                              \\"],
    [30, " /    \\                              \\"],
    [30, " \\     \\                              \\"],
    [30, "  \\     \\                              \\"],
    [30, "   \\     \\______________________________\\_______    ___________    ___________    ___________    ___________    ___________    ___________"],
    [30, "    \\    /                              /       \\  /\\          \\  /\\          \\  /\\          \\  /\\          \\  /\\          \\  /\\          \\"],
    [30, "     \\  /                              /         \\/  \\          \\/  \\          \\/  \\          \\/  \\          \\/  \\          \\ \\ \\          \\"],
    [30, "      \\/___________        ___________/\\          \\   \\          \\   \\          \\   \\          \\   \\          \\   \\          \\ \\ \\          \\"],
    [30, "      /           /       /         \\   \\          \\   \\          \\   \\          \\   \\          \\   \\          \\   \\          \\ \\ \\          \\"],
    [30, "     /           /       /\\          \\   \\          \\   \\          \\   \\          \\   \\          \\   \\          \\   \\          \\/\\ \\          \\"],
    [30, "     \\          /       /  \\__________\\   \\__________\\   \\__________\\   \\__________\\   \\__________\\   \\__________\\   \\__________\\ \\ \\__________\\"],
    [30, "      \\        /       /   /   _______/   /   _______/   /   _______/   /   _______/   /   ___    /   /   ___    /   /   _______/  \\/___    ___/"],
    [30, "       \\      /       /   /   /_____\\ \\  /   /_____\\ \\  /   /_____\\    /   /_____\\    /   /_\\/   /   /   /_\\/   /   /   / \\     \\      /   /"],
    [30, "        \\    /       /   /   _______/\\ \\/______    /\\ \\/______    /   /   _______/   /       ___/   /   ___    /   /   /   \\     \\    /   /"],
    [30, "         \\  /       /\\  /   /_____\\ \\ \\_______/   /\\ \\_______/   /\\  /   /_____\\ \\  /   /\\   \\  \\  /   /  /   /\\  /   /_____\\     \\  /   /"],
    [30, "          \\/_______/  \\/__________/  \\/__________/  \\/__________/  \\/__________/  \\/___/  \\___\\  \\/___/ \\/___/  \\/__________/      \\/___/"],
    [30, ""],
    [30, "┌─────────────────────────────────────────────────┐"],
    [30, "│                                                 │"],
    [30, "│ ░░░ ░ ░ ░░░     ▒▒▒ ▒▒▒ ▒▒▒     ▒▒▒ ▒▒▒ ▒▒▒ ▒ ▒ │"],
    [30, "│  ░  ░ ░ ░       ▓ ▓ ▓ ▓  ▓      ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓ │"],
    [30, "│  ░  ░░░ ░░░     ▓▓▓ ▓▓   ▓      ▓▓  ▓ ▓ ▓ ▓ ▓▓  │"],
    [30, "│  ▒  ▒ ▒ ▒       █ █ █ █  █      █ █ █ █ █ █ █ █ │"],
    [30, "│  ▒  ▒ ▒ ▒▒▒     █ █ █ █  █      ███ ███ ███ █ █ │"],
    [30, "│  ─  ─ ─ ───     ─ ─ ─ ─  ─      ─── ─── ─── ─ ─ │"],
    [30, "└─────────────────────────────────────────────────┘"],
    [100, ""],
    [30, "BY"],
    [400, ""],
    [30, "« ThatRomus   »"],
    [30, "« Quad        »"],
    [30, "« Jaroslav    »"],
    [30, "« MisterGenri »"],
    [30, "« Andrew Kim  »"],
    [30, ""],
    [700, "Entering graphic shell..."],
];

let lang_dialog_text = [
    ["╔════════════════════════════╗"],
    ["║ Tesseract Art Book         ║"],
    ["║────────────────────────────║"],
    ["║                            ║"],
    ["║ Select the language to use ║"],
    ["║ in the shell:              ║"],
    ["║                            ║"],
    ["║────────────────────────────║"],
    ["║    <button onclick='open_eng_page()'>ENG</button>         <button onclick='open_rus_page()'>RUS</button>      ║"],
    ["╚════════════════════════════╝"],
]

let startup_sound;
let working_loop_sound;

if (window.location.hash == "#page")
{
    setTimeout(function() {
        document.getElementById("begin_button").remove();
        
        let current_time = 0
        const step_delay = 10;
        document.body.style.overflowY = "scroll";
        setTimeout(function() {
            document.getElementById("lang_dialog_wrapper").style.display = "none";
        }, current_time);
        current_time += startup_log3.length * step_delay;
        setTimeout(function() {
            document.getElementById("page").style.display = "block";
            write_page(pages_rus[0], page_block_delay, page_character_delay);
        }, current_time);
    }, 10);
}

function begin_startup_sequence() {
    var console = document.createElement("pre");
    console.id = "main_console";
    document.body.appendChild(console);

    begin_button = document.getElementById("begin_button");
    begin_button.children[0].src = "images/power_button_pressed.webp";
    begin_button.disabled = true;

    startup_sound = document.getElementById("startup_sound");
    startup_sound.volume = 0.5;
    startup_sound.play();
    working_loop_sound = document.getElementById("working_loop_sound");
    working_loop_sound.volume = 0.1;
    working_loop_sound.play();

    const step_delay = 10;

    display_strokes_delayed_noline(console, startup_log1);
    let current_time = calc_time(startup_log1);
    current_time += 1000;
    setTimeout(function() {
        receiveng_packages_sequence(console, 19840);
    }, current_time);
    current_time += 19838 / 7;
    setTimeout(function() {
        display_strokes_delayed(console, startup_log2);
    }, current_time);
    current_time += calc_time(startup_log2) + 1000;
    setTimeout(function() {
        clear_strokes_delayed(console, step_delay);
    }, current_time);
    current_time += (startup_log2.length + startup_log3.length) * step_delay;
    setTimeout(function() {
        console.innerHTML = "";
        display_strokes_delayed(console, startup_log3);
    }, current_time);
    current_time += calc_time(startup_log3) + 400;
    var lang_dialog_window = document.getElementById("lang_dialog_window");
    setTimeout(function() {
        document.getElementById("lang_dialog_wrapper").style.display = "block";
        display_strokes_delayed_global(lang_dialog_window, lang_dialog_text, step_delay);
    }, current_time);
}

function calc_time(strokes)
{
    let current_time = 0;
    for (let i = 0; i < strokes.length; i++) {
        current_time += strokes[i][0];
    }
    return current_time;
}

function display_strokes_delayed(element, strokes)
{
    let current_time = 0;
    for (let i = 0; i < strokes.length; i++) {
        current_time += strokes[i][0];
        setTimeout(function() {
            element.innerHTML += strokes[i][1] + "<br>";
        }, current_time);
    }
}

function display_strokes_delayed_global(element, strokes, delay)
{
    let current_time = 0;
    for (let i = 0; i < strokes.length; i++) {
        current_time += delay;
        setTimeout(function() {
            element.innerHTML += strokes[i] + "<br>";
        }, current_time);
    }
}

function display_strokes_delayed_noline(element, strokes)
{
    let current_time = 0;
    for (let i = 0; i < strokes.length; i++) {
        current_time += strokes[i][0];
        setTimeout(function() {
            element.innerHTML += strokes[i][1];
        }, current_time);
    }
}

function receiveng_packages_sequence(element, packages_count) {
    let current_time = 0;
    let source_text = element.innerHTML;
    for (let i = 0; i < packages_count; i += 7) {
        current_time += 1;
        setTimeout(function() {
            element.innerHTML = source_text + 'Downloading packages ' + (i + 2) + "/" + packages_count + "<br>";
        }, current_time);
    }
}

function clear_strokes_delayed(element, step_delay)
{
    let strokes = element.innerHTML.split("<br>");
    let current_time = 0;
    for (let x = 0; x < strokes.length; x++)
    {
        current_time += step_delay;
        setTimeout(function() {
            element.innerHTML = "";
            for (let y = 0; y < strokes.length; y++)
            {
                element.innerHTML += strokes[y] + "<br>";
            }
            strokes[x] = "";
        }, current_time);
    }
}

function open_eng_page()
{
    open_page();
}

function open_rus_page()
{
    open_page();
}

let page_block_delay = 300;
let page_character_delay = 2;

function open_page()
{
    let current_time = 0
    const step_delay = 10;
    clear_strokes_delayed(document.getElementById("lang_dialog_window"), step_delay);
    current_time += lang_dialog_text.length * step_delay;
    document.body.style.overflowY = "scroll";
    setTimeout(function() {
        document.getElementById("lang_dialog_wrapper").style.display = "none";
        clear_strokes_delayed(document.getElementById("main_console"), step_delay);
    }, current_time);
    current_time += startup_log3.length * step_delay;
    setTimeout(function() {
        document.getElementById("main_console").style.display = "none";
        document.getElementById("page").style.display = "block";
        write_page(pages_rus[0], page_block_delay, page_character_delay);
    }, current_time);
}

function write_page(layout, block_delay, character_delay) {
    disable_footer();

    let element = document.getElementById("page_main");
    let current_time = 0;
    for (let x = 0; x < layout.length; x++) {
        current_time += block_delay;
        if (layout[x][0] == false)
        {
            setTimeout(function() {
                element.insertAdjacentHTML("beforeend", layout[x][1]);
                if (layout[x][1].includes("full_width_img"))
                {
                    new Audio("sounds/ts_print.mp3").play();
                    setTimeout(function() {
                        scrollToEnd();
                    }, 1500);
                }
                else
                {
                    scrollToEnd();
                }
            }, current_time);
            if (layout[x][1].includes("full_width_img"))
            {
                current_time += 3000;
            }
        }
        else
        {
            setTimeout(function() {
                let p = document.createElement("p");
                element.appendChild(p);
                let char_time = 0;
                for (let y = 0; y < layout[x][1].length; y++) {
                    char_time += character_delay;
                    setTimeout(function() {
                        p.innerHTML += layout[x][1].substring(y, y + 1);
                        if (y % 20 == 0)
                        {
                            new Audio("sounds/beep.mp3").play();
                        }
                        scrollToEnd();
                    }, char_time);
                }
            }, current_time);
            current_time += layout[x][1].length * character_delay + block_delay;
        }
    }
    
    setTimeout(function ()
    {
        enable_footer();
        update_footer();
    }, current_time + 1000);
}

let auto_scroll = true;
let auto_scroll_reset = true;
let auto_scroll_reset_time = 3000;
function scrollToEnd()
{
    if (auto_scroll)
    {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    }
}

auto_scroll_reseting = false;
function interrupt_auto_scroll(e) {
    auto_scroll = false;
    if (auto_scroll_reset && auto_scroll_reseting == false)
    {
        auto_scroll_reseting = true;
        setTimeout(function() {
            auto_scroll = true;
            auto_scroll_reseting = false;
        }, auto_scroll_reset_time);
    }
}

if(window.addEventListener) {
    document.addEventListener('DOMMouseScroll', interrupt_auto_scroll, false); 
}
document.onmousewheel = interrupt_auto_scroll;
document.onmousedown = interrupt_auto_scroll;

function reset_auto_scroll()
{
    auto_scroll = true;
    auto_scroll_reseting = false;
}

function update_footer()
{
    let page_button_prev = document.getElementById("page_button_prev");
    let page_button_next = document.getElementById("page_button_next");

    page_button_prev.style.display = current_page == 0 ? "none" : "inline-block";
    page_button_next.style.display = current_page == pages_rus.length - 1 ? "none" : "inline-block";

    // FUCK JS, this didn't worked
    //
    // let page_number_buttons = document.getElementsByClassName("page_button page_number_button");
    // for (let i = 0; i < page_number_buttons.length; i++)
    // {
    //     page_number_buttons[i].remove();
    // }
    //
    // let footer = document.getElementsByTagName("footer")[0];
    // for (let i = 0; i < pages_rus.length; i++)
    // {
    //     footer.insertAdjacentHTML("beforeend", `<button class="page_button page_number_button" onclick="change_page(${i})">[${i + 1}]</button>\n`);
    // }
    //
    // footer.appendChild(page_button_next);
}

function disable_footer()
{
    document.getElementsByTagName('footer')[0].style.display = "none";
}

function enable_footer()
{
    document.getElementsByTagName('footer')[0].style.display = "block";
    scrollToEnd();
}

let current_page = 0;

function change_page(page_index)
{
    let element = document.getElementById("page_main");
    let step_delay = 10;
    let current_time = 0;
    disable_footer();
    reset_auto_scroll();
    for (let child of element.children)
    {
        current_time += step_delay;
        setTimeout(function ()
        {
            child.remove();
        }, current_time);
    }
    current_time += 500;
    if (page_index == 1)
    {
        let title_delay = 100;
        setTimeout(function ()
        {
            element.insertAdjacentHTML("beforeend", "<span class='page_red_title'>1</span>");
            new Audio("sounds/beep.mp3").play();
        }, current_time);
        current_time += title_delay;
        setTimeout(function ()
        {
            element.insertAdjacentHTML("beforeend", "<span class='page_red_title'>9</span>");
            new Audio("sounds/beep.mp3").play();
        }, current_time);
        current_time += title_delay;
        setTimeout(function ()
        {
            element.insertAdjacentHTML("beforeend", "<span class='page_red_title'>7</span>");
            new Audio("sounds/beep.mp3").play();
        }, current_time);
        current_time += title_delay;
        setTimeout(function ()
        {
            element.insertAdjacentHTML("beforeend", "<span class='page_red_title'>2</span>");
            new Audio("sounds/beep.mp3").play();
        }, current_time);
        current_time += title_delay;
    }
    if (page_index == 2)
    {
        let title_delay = 100;
        setTimeout(function ()
        {
            element.insertAdjacentHTML("beforeend", "<span class='page_red_title'>1</span>");
            new Audio("sounds/beep.mp3").play();
        }, current_time);
        current_time += title_delay;
        setTimeout(function ()
        {
            element.insertAdjacentHTML("beforeend", "<span class='page_red_title'>9</span>");
            new Audio("sounds/beep.mp3").play();
        }, current_time);
        current_time += title_delay;
        setTimeout(function ()
        {
            element.insertAdjacentHTML("beforeend", "<span class='page_red_title'>8</span>");
            new Audio("sounds/beep.mp3").play();
        }, current_time);
        current_time += title_delay;
        setTimeout(function ()
        {
            element.insertAdjacentHTML("beforeend", "<span class='page_red_title'>4</span>");
            new Audio("sounds/beep.mp3").play();
        }, current_time);
        current_time += title_delay;
    }
    setTimeout(function ()
    {
        write_page(pages_rus[page_index], page_block_delay, page_character_delay);
    }, current_time);

    current_page = page_index;
}

function go_prev_page()
{
    change_page(current_page - 1);
}

function go_next_page()
{
    change_page(current_page + 1);
}

let pages_rus = [
    [
        [false, "<div class='full_width_img_wrapper'><img class='full_width_img' src='images/cover.png'></div>"],
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/title.svg'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "В своем диалоге с Сократом Платон говорил: «Трудные времена рождают сильных людей. Сильные люди создают хорошие времена. Хорошие времена рождают слабых людей. Слабые люди создают трудные времена»."],
        [true, "Бесконечный, незыблемый цикл, основанный на проявлениях человеческой натуры, повторяется с самого зарождения цивилизаций. Человечество прошло длинный путь от меча и арбалета до винтовок и пушек, научилось летать в воздухе подобно птицам, плавать в воде как рыбы, но, не сумев ужиться на земле, люди устроили громадную битву, которая поставила их перед чертой полного самоуничтожения."],
        [true, "Спустя сотни лет, племена, оставшиеся от былых цивилизаций, будут рассказывать легенды о далёких временах, называя тот период «Великой децимацией». Из уст в уста будет передаваться притча о грандиозном побоище тёмных и светлых армий, в конце которого, один из воинов тьмы убьёт своего предводителя и остановит кровопролитие, закрепив вечный мир."],
        [true, "Тогда, почти сразу же после, кто-то, чьё сердце было наполнено добрыми намерениями, а разум - думами о будущем, открыл для людей новый путь развития, неизвестный ранее. Будто Данко, он повёл людей за собой. Невзирая на холод новых конфликтов на планете, он зажёг немало людей на борьбу с неравенством, несправедливостью и множеством расколов. Его идеи и открытия извращали остатки тёмных, но тщетно. В конечном итоге после усилий миллионов, катастрофа была неизбежна."],
        [true, "«Самое обоюдоострое оружие в руках разумного вида – мысль» (неизвестный воин тёмной армии)"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page1.png'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "70-е годы 20 века. Научный прогресс продвигается семимильными шагами, привнося в жизнь людей сотни изобретений и новшеств, которые ещё совсем недавно казались лишь бесплодными мечтами из фантастических книг Замятина и Герберта Уэллса. Уже второй раз за век во всех уголках земли был слышен взрыв, но если в первый раз, 20 июля 1944-го, это был портфель графа Штауффенберга, то 28 мая 1968 – уже грохот аплодисментов, оваций и бьющих на перебой друг другу новостных сводок."],
        [true, "Благодаря усилиям советского физика Николая Кардашёва человечество узнало о существовании ранее неизвестных пси-частиц - нового вида материи и энергии одновременно. В знак преемственности и дани памяти общему делу и развитию науки, частицы были названы в честь Льва Ландау, заложившего своими трудами почву для столь грандиозного открытия."],
        [true, "Всего за одно десятилетие люди познают глубины космоса, роботизацию, приближаются к созданию цифрового бессмертия. Не до конца оправившись от потрясений трёх десятков минувших лет, многие справедливо, с опаской и недоверием, смотрят в будущее, ожидая от него новых ударов из тьмы времени. Ведь чем больше сила – тем больше ответственность..."],
        [false, "<div class='separator'></div>"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page2.png'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "Закрытая Международная Организация “Наблюдатели” была учреждена в 1974-ом году на очередном заседании Совета Безопасности ООН. Основной целью создания Организации, провозглашенной во время выступления авторами инициативы Юрием Гагариным и графом Штауффенбергом, стало противостояние нарастающей угрозе корпоративных гигантов в лице Matsushita Manufactorum, IDM и прочих, которые стали постепенно превосходить многие (и далеко не всегда отстающие) государства, обгоняя их по экономическим и научно-техническим параметрам. Иными словами — “Наблюдатели” должны саботировать деятельность новой формы власти для сохранения веками формировавшихся устоев старой. Получив финансирование и особую юрисдикцию на своих территориях от СССР и США, в последующие годы ЗМО успешно осуществляла свою миссию, инфильтрируясь в ряды корпоративных элит и незаметно вызывая значительные проблемы в их деятельности. Организация также не брезговала пачкать руки, осуществляя спецоперации с применением летальной силы и вступая в открытые конфронтации с наемниками."],
        [true, "Вместе с тем, “Наблюдатели” активно занимались разработками, связанными с Л-частицами, проводя исследования на базе Советских НИИ и собственных комплексов, расположенных на побережье Средиземного моря, параллельно устраняя любую деятельность в этой области за пределами Организации. Таким образом, ЗМО удалось стать лидером в теории и практическом использовании частиц Ландау и их энергии."],
        [false, "<div class='separator'></div>"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page3.png'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "Сокрушительное падение Японской Империи в ходе операции «Даунфол» имело колоссальные последствия для всего региона и мира в целом. На бескрайних полях ядерного пепла, на руинах городов и островах деревень - для Японии наступил мир."],
        [true, "Но для Китая окончание войны против внешнего врага лишь ознаменовало продолжение иного конфликта – междоусобного. За относительно короткий срок Гоминьдан под руководством Чана Кайши нанёс сокрушительное поражение коммунистам, которых, к всеобщему удивлению, отказался принимать Сталин в ранее оккупированной РККА Маньчжурии и Синьцзяне."],
        [true, "Возможно, если бы не августовский кризис 1947 года в Европе, советское руководство согласилось на полную передачу регионов Китаю, однако, в конечном итоге, финальная конференция между двумя странами, назначенная на 1 сентября 1947 года была сорвана. Вождь Народов оставил выгодный плацдарм при себе."],
        [true, "По Харбинскому договору 1949 года данные территории наряду с Монголией признавалась полноправными АССР."],
        [true, "Летом 1960 года в них будут также проведены учения сил Организации Московского Договора, за время которых демилитаризованная зона вдоль границы с Китаем прекратит своё существование и будет установлена новая линия демаркации."],
        [false, "<div class='separator'></div>"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page4.webp'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "«Прогресс 70» — первая международная выставка, посвящённая энергии Л-частиц и Сальраниуму, которая проходила в период с 1 марта по 15 апреля 1970 года во Владивостоке."],
        [true, "На мероприятие было приглашено беспрецедентное количество гостей со всех концов света: ученые, журналисты, видные политики и даже военные (последние, однако, только из дружественных СССР стран)"],
        [true, "Организатором столь масштабного действа выступил никто иной, как лично Николай Кардашев — тогда ещё только восходящая звезда для всего мирового научного сообщества."],
        [true, "Советская сторона продемонстрировала многие технологии и открытия, сделанные ею относительно недавно. Среди прочего, общественности представили бионические аугментации, Л-батареи и устройства беспроводной мобильной связи. "],
        [true, "На фотоснимке спиной к оператору запечатлены начальник генерального штаба германской армии генерал-полковник Г. Кребс (справа) и майор танковых войск германской армии [УДАЛЕНО] (слева)."],
        [false, "<div class='separator'></div>"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page5.webp'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "Сальраниум — (От лат. «Sol» - солнце) металл иноземного происхождения, внесенный на планету Земля в период поздней тяжёлой бомбардировки. "],
        [true, "Долгое он время был неизвестен человечеству ввиду расположения металла на больших глубинах вне районов добычи полезных ископаемых. В редких случаях обнаружения Сальраниума до 1971 года его признавали за другие, уже открытые металлы вроде Лития из-за качественного сходства."],
        [true, "Самое крупное месторождение было обнаружено группой геологов на дне озера Байкал в июле 1971 года при строительстве одного из сооружений проекта «Беллерофонт»."],
        [true, "При дальнейшем исследовании образцов поднятых из под толщи воды ученые установили принципиальные отличия от привычных металлов, центральным из которых стала повышенная сопротивляемость Л-частицам, превосходящая даже иридий и осмий."],
        [true, "Блестящий, легкий, обладающий эффектом накопления тепла и изменяющий свой цвет на лучах солнца он получил наименование – Сальраниум, и в последующем стал использоваться повсеместно в качестве защиты от излучения частиц Ландау."],
        [false, "<div class='separator'></div>"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page6.webp'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "Последствия воздействия частиц Ландау на человеческий организм были известны еще с самого момента их открытия — в частности ужасающие физиологические изменения, вызванные синдромом Арката. Но эти последствия всегда были связаны с обширным излучением, которое возникало вследствие нарушения техник безопасности в тех или иных обстоятельствах. Об эффектах долгосрочного дозированного облучения человечество не догадывалось вплодь до второй половины восьмидесятых годов. Накапливаясь в теле, Л-частицы незаметно меняли физиологию человека, при этом не вызывая фатальных разрушений, как в случае с Аркатом. Они влияли на структуру тканей, воздействовали на функции головного мозга, вторгаясь в нейронные связи и искажая передаваемые сигналы. Поведение человека изменялось — возникала паранойя, замкнутость, речевые дефекты. Индивид медленно терял рассудок, и в конечном итоге покидал социум, уходя от цивилизации. В отдаленных местностях, подверженные эффекту встречались с другими подобными себе. Они объединялись в небольшие группы, кланы, и даже многочисленные сообщества. Измененные обладали характерной чертой — они чувствовали сильную тягу к Л-частицам. Они подвергали себя облучению из всех доступных источников — аккумуляторов, промышленных генераторов, ячеек и прочих. При этом процесс физиологических изменений ускорялся. Вскоре, феномен стал общеизвестен, “поражение функций высшей нервной системы на фоне обильного Ландау-излучения” получило негласное название “Одержимость”."],
        [true, "На снимке — неудачная попытка прорыва периметра Зоны Ограниченного Доступа в Норвегии “Одержимыми”, 1997 год."],
        [false, "<div class='separator'></div>"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page7.webp'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "Говорят, что всего лишь один человек в нужном месте может перевернуть мир."],
        [true, "Граф Клаус Шенк Фон Штауффенберг — явственный тому пример. "],
        [true, "Вся его жизнь состояла из бесконечной борьбы и сопротивления, отстаивании доброго имени не только себя и своего рода, но и всего народа Германии."],
        [true, "В выходеце из богатой аристократический семьи, в нём, ещё болезненном и мечтательном юноше, никто не усматривал будущего офицера немецкой армии. Он мог часами созерцать окружающую природу, читал стихи, увлекался музыкой. Единственной чертой, противоречащей его мягкой натуре, была отчаянная, порой упрямая смелость, которая останется с ним на всю жизнь."],
        [true, "Он получит прекрасное гимназическое образование, обзаведется множеством друзей и в 1926 году отправится в армию. Вскоре он объяснит своё решение рвением к действию и желанием служить государству. В силу семейной традиции этот поступок был поддержан его отцом."],
        [true, "Ревущие 20-е сменились на мрачные 30-е годы. Молодой Штауффенберг, одурманенный идеями возрождения германского величия, нередко будет выступать за идеи Фюрера, но лишь в теории. С началом войны ему удастся увидеть Гитлеризм на практике. "],
        [true, "Когда за его плечами уже была Польша и Франция, огонь сражений зажегся на Востоке, где последние иллюзии насчет истинных намерений Гитлера окончательно улетучились из головы офицера."],
        [true, "На совещании в Виннице в октябре 1942 года Штауффенберг резко осудил германскую восточную политику и заявил, что Германия сеет в России такую ненависть, «которая когда-нибудь ещё найдёт своё отмщение на наших детях»."],
        [true, "Бесперспективность войны с СССР, чудовищные зверства его сослуживцев и провальное руководство военными операциями со стороны ОКВ и ОКХ сделали из графа Штауффенберга того человека, которым его запомнила история."],
        [true, "Как проблемный для командования, он отправится в Северную Африку, где 7 апреля 1943 года во время британского авианалета получит тяжелые ранения. "],
        [true, "Потеряв левый глаз, правую руку и два пальца на левой руке, с простреленной головой Штауффенберг провёл три месяца в больнице Мюнхена, где его лечил профессор Фердинанд Зауэрбрух. Во время дополнительных операций на коленном суставе и среднем ухе он отказался от болеутоляющих и научился писать левой рукой. "],
        [true, "Мало кто на его месте остался бы в армии после пережитого, но полковник решил для себя, что путь спасения немецкого народа и государства теперь лежит для него дальше по карьерной лестнице в штабе…"],
        [true, "Спустя полтора года подготовки заговора, организации собственного патриотического крыла, его портфель с бомбой взорвался так, как было надо. "],
        [true, "А пройдёт ещё четверть века, и сам полковник Штауффенберг вместе с первым человеком, побывавшим в космосе, Юрием Гагариным, объявит об основании Закрытой Международной Организации «Наблюдатели»"],
        [false, "<div class='separator'></div>"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page8.webp'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "«Дорогой Гюнтер Венадьевич, шлю вам подарок в виде передавшего вам это письмо индивида. "],
        [true, "Не сочтите за фамильярность, я понимаю, насколько непривычно вам слышать от меня подобные обороты, но ситуация с нашей последней встречи располагает к этому."],
        [true, "Всё должно оставаться в рамках этого сообщения!"],
        [true, "Тот, кто вручил вам это письмо, был признан бесперспективным «образцом» в проекте «Китеж», месяц тому назад, и ныне отправлен мною в надежное место, подальше от ненужных глаз – т.е к вам в Солнечногорск."],
        [true, "Вас данный товарищ не знает ни в лицо, ни по имени, едет на деревню к дедушке, но с ним будут сопровождающие. Господин А. в прекрасном здравии, Госпожа М. очень устала, не мучайте её расспросами, чтобы не было как в прошлый раз (!!!)."],
        [true, "В конверт прилагаю фотокарточку, лоскут изоленты удалите при получении в руки. "],
        [true, "Навсегда Ваш - Лев Ландау»"],
        [false, "<div class='separator'></div>"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page9.webp'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "10 апреля 1990 года в Токио состоялось 7 по счёту заседание Закрытой Международной Организации «Наблюдатели», на котором главной темой, без всяких сомнений, стал бесповоротный и решительный конец для «мегакорпоративной тройки» — IBM, Farben и Matsushita Manufactorum. "],
        [true, "За неделю до этого оперативники ЗМО успешно зачистили последние офисы конгломератов и заявили о прекращении их существования, посему начавшийся вскоре пленум постепенно превратился в празднование."],
        [true, "Некогда лишь восходящая звезда мировой науки, Николай Кардашев, всё больше казался общественности тускнеющей туманностью, хоть внешне он и не подавал виду."],
        [true, "Человек, открывший миру энергию Л-частиц, давший ему некогда казавшиеся фантастикой бионические аугментации, благодаря которому впоследствии люди получили цифровое бессмертие в итоге отказался от всех этих благ. "],
        [true, "Многих смутило подобное решение, но переубеждать Кардашова так никто и не стал, надеясь, что ученый занят поисками собственного преемника."],
        [true, "Впервые перед взором общественности академик предстал в парадной форме «Наблюдателей», объяснив это журналистам как «дань уважения всем присутствующим на праздничном событии»."],
        [true, "Ещё никто не мог подумать, что его появление в таком образе, как и сам тот съезд ЗМО станут последними..."],
        [false, "<div class='separator'></div>"],
    ],
    [
        [false, "<div class='separator'></div>"],
        [false, "<div id='title_img_wrapper'><img class='full_width_img' src='images/page10.webp'></div>"],
        [false, "<div class='separator'></div>"],
        [true, "Виктор Пельш — агент ЗМО, в данный момент приписан к аванпосту “Фокстрот” на территории Зоны Ограниченного Доступа в Норвегии."],
        [true, "Родился 27 сентября 1976 года в городе Электренай, Литовская ССР. Жил в полной семье. По достижении 18 лет проходил срочную службу в ВС СССР, после которой начал полноценную военную карьеру в составе ВДВ. С началом операции “Гроза” был отправлен в Израиль в составе Советского контингента интернациональных контр-террористических войск, участвовал во многих пехотных наступательных маневрах. В ходе диверсионной операции под командованием майора Леонида Лебедева стал свидетелем активации ВИН(Э) (Высокомощного Искривителя Надпространства (Экспериментального)), в результате которого он и его товарищи получили серьезные повреждения, вызванные огромным уровнем Л-радиации. Позднее был обнаружен разведывательной группой ЗМО и эвакуирован вместе со всеми оставшимися в живых сослуживцами. Был доставлен на аванпост “Виски-Фридом”, где, вопреки прогнозам, успешно восстановился. Был допрошен агентом █████, который оказался крайне впечатлен общением с юношей. В дальнейшем он же провел собеседование с Пельшем, после которого Виктор подписал контракт с Организацией и заступил на службу в качестве агента."],
        [false, "<div class='separator'></div>"],
    ],
]