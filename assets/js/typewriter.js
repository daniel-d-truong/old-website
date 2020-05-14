let typerwriterEl = document.getElementById("typewriter");
let name = "Daniel Truong"
let speed = 100;

const delay = ms => new Promise(res => setTimeout(res, ms));

async function typeWriter() {
    let descriptions = [
        "a Software Developer",
        "an Entrepreneur",
        "a Leader",
        "a Photographer",
        "a Gemini :)"
    ];
    for (let word in descriptions) {
            let totalWord = `${name}, ${descriptions[word]}`;
            console.log(totalWord)
            // Typing the word
            for (let i = name.length; i < totalWord.length; i++) {
                typerwriterEl.innerHTML += totalWord[i];
                await delay(speed);
            }
            
            await delay(2000);

            // Deleting the word
            for (let i = totalWord.length; i >= name.length; i--) {
                typerwriterEl.innerHTML = totalWord.substring(0, i);
                await delay(speed);
            }

            await delay(speed*2);

    }
    setTimeout(typeWriter, 3000);
}

setTimeout(typeWriter, 3000);