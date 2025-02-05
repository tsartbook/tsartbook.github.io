let startup_log1 = [
    [10, " COPYRIGHT IDM COMPUTER SYSTEMS INC. 1990-1997<br>"],
    [40, "           ---IDM BIOS ver. 1.5---<br>"],
    [40, "<br>"],
    [40, "          === C.I.O. 'OBSERVERS' ===<br>"],
    [40, "    - ZASCHITIT'. OBEZOPASIT'. SOHRANIT'. -<br>"],
    [40, "<br>"],
    [6500, "Initializing...<br>"],
    [2000, "Checking internet connection status..."],
    [600, " OK<br>"],
    [100, "Verification passed<br>"],
    [300, "Connecting to C.I.O. 'OBSERVERS' repo...<br>"],
    [800, "Connecting established<br>"],
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
    [200, ".::::^^^^  ~~~~~!!!: !7777??J~ ~JJJYYYYY .5555555P: Y5555555J ~5YY5YYYY. JJJJJJJJ7 :?7777777:"],
    [30, "!??JJJJYY.^5555PPPG~ GBBGGBB#5 5########:^&&&&&&#&~ #&&BB###B 7#BB5PBGB: PGP5JYYY?.~JJYJJ?~!:"],
    [30, "  :JJY?...!555Y~^^:.:GGGP?7!^: 5##BYJYY5:^&&#YYYYY: B&&7 Y##B !#BG .GGB^ PGG?.... .::J5JJJ"],
    [30, "  ^JJY7   755P5.    :BGBGJ     P##B?.... ~&&&:      #&&7 ?&## !#BB  GBB! 5GGJ        J5YYJ."],
    [30, "  ~YJ5!   ?PPP5:... ^BBBGJ     G&&#Y     ~&&&7^^^~. B&&5^5&##.~##B~:GBB7 5GGY        ?5YYY:"],
    [30, "  7YY5~   JPPPPGGGB:.J5GBBP5J: !5G###G57 ~&&&&&&&@7 B&&&&&###.^##B##BBB? YBG5        755YY^"],
    [30, "  ?YY5^   YPP57^~~~^   ..?###G.   ..G&&&.~&&&!^^^^. B&&B#&#B^ ~###~~GBBY ?BGP        !P5Y5~"],
    [30, "  JYY5:. .5PPPY7.        ~#B#G?     P&&#.!&&&.      B&&J:B##G ^###: YBB5 7BGG.       ~55Y57"],
    [30, " .YYY5.. .PPPP5Y:        !#B#GJ     P&&#.!&&&.      B&&Y !&#&:.###^ JBBP !BGG:       ^5555?"],
    [30, " :YY5Y.. :GPGGGG55?.?5555G###5YGGGGG#&&#.!&&&#BBB#! B&&5 ~&#&^.###~ ?#BG ~BBBPPPPPY  :J555Y"],
    [30, " :????.. :YJYYYY55? J555P55PP^^PGGGGGGGP.~BGGGBBGB! YGG? ^PPP:.555^ !YYJ :YJJJJJ??7  .:7!!!"],
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
    [30, "« Quad        »"],
    [30, "« ThatRomus   »"],
    [30, "« Jaroslav    »"],
    [30, "« MisterGenri »"],
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
    ["║    <a href='eng'>ENG</a>        <a href='rus'>RUS</a>      ║"],
    ["╚════════════════════════════╝"],
]

let startup_sound = document.getElementById("startup_sound");
let working_loop_sound = document.getElementById("working_loop_sound");

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