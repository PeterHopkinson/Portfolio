var root = document.querySelector(':root');
var root_style = getComputedStyle(root);
var darkmode = false;

function toggle_dark_mode() {
    if (darkmode) {
        root.style = root_style
    } else {
        root.style.setProperty('--background', '010e1b');
        root.style.setProperty('--colour1', 'ffffff');
        // alt scheme
        //root.style.setProperty('--background', '010e1b');
        //root.style.setProperty('--colour1', 'dee2e6');
        //root.style.setProperty('--colour2', '12d640');
        //root.style.setProperty('--colour3', 'd95080');
        //root.style.setProperty('--colour4', '3bb8ef');
        //root.style.setProperty('--colour5', 'e2e22e');
    }
}


function typeWriter2(i, speed, txt) {
  if (i < txt.length) {
    document.getElementById("skillset").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const typeWriter = async (speed, pause, undo_speed, list) => {
    while (true) {
        for (let phrase in list) {
            text = list[phrase]
            for (let i in text) {
                await sleep(speed)
                document.getElementById("skillset").textContent += text.charAt(i)
            }
            await sleep(pause)
            for (let j in text) {
                await sleep(undo_speed)
                document.getElementById("skillset").textContent = text.slice(0,-j-1)
            }
        }
    }
}

skills = ["Data Engineer", "Software Engineer", "Business Analyst"]
typeWriter(200, 600, 100, skills)