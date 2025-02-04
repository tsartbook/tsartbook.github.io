let startup_log1 = [
    [10, " COPYRIGHT IDM COMPUTER SYSTEMS INC. 1990-1997<br>"],
    [40, "           ---IDM BIOS ver. 1.5---<br>"],
    [40, "<br>"],
    [40, "          === C.I.O. 'OBSERVERS' ===<br>"],
    [40, "    - 'ZASCHITIT' 'OBEZOPASIT' SOHRANIT' -<br>"],
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
    [200, " ███ ███ ███ ███ ███ ███ ███ ███ ███"],
    [30, "  █  █   █   █   █   █ █ █ █ █    █"],
    [30, "  █  ███ ███ ███ ███ ██  ███ █    █"],
    [30, "  █  █     █   █ █   █ █ █ █ █    █"],
    [30, "  █  ███ ███ ███ ███ █ █ █ █ ███  █"],
    [30, "┌───────────────────────────────────┐"],
    [30, "│                                   │"],
    [30, "│ ░░░ ░ ░ ░░░     ░░░ ░░░ ░░░       │"],
    [30, "│  ░  ░ ░ ░       ░ ░ ░ ░  ░        │"],
    [30, "│  ░  ░░░ ░░░     ░░░ ░░   ░        │"],
    [30, "│  ▒  ▒ ▒ ▒       ▒ ▒ ▒ ▒  ▒        │"],
    [30, "│  ▒  ▒ ▒ ▒▒▒     ▒ ▒ ▒ ▒  ▒        │"],
    [30, "│  ─  ─ ─ ───     ─ ─ ─ ─  ─        │"],
    [30, "│  ▒▒▒ ▒▒▒ ▒▒▒ ▒ ▒                  │"],
    [30, "│  ▓ ▓ ▓ ▓ ▓ ▓ ▓ ▓                  │"],
    [30, "│  ▓▓  ▓ ▓ ▓ ▓ ▓▓                   │"],
    [30, "│  █ █ █ █ █ █ █ █                  │"],
    [30, "│  ███ ███ ███ █ █                  │"],
    [30, "│  ─── ─── ─── ─ ─                  │"],
    [30, "└───────────────────────────────────┘"],
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

function begin_startup_sequence() {
    document.getElementById("startup_sound").play();

    document.getElementById("begin_button").remove();

    var console = document.getElementById("main_console");
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
    step_delay = 10;
    setTimeout(function() {
        clear_strokes_delayed(console, step_delay);
    }, current_time);
    current_time += (startup_log2.length + startup_log3.length) * step_delay;
    setTimeout(function() {
        console.innerHTML = "";
        display_strokes_delayed(console, startup_log3);
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