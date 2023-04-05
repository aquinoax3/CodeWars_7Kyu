
// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"











function nerdify(txt) {

    let newTxt = ""

    console.log(txt)

    for (let i = 0; i < txt.length; i++) {
        let char = txt[i]

        if (char === 'a' || char === "A") {
            char = "4"
            newTxt += char
        } else if (char === 'e' || char === "E") {
            char = "3"
            newTxt += char
        } else if (char === 'l') {
            char = "1"
            newTxt += char
        } else {
            newTxt += char
        }


    }
    return newTxt
}