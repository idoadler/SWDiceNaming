
function test() {
    document.getElementById("results").innerHTML = convert(document.getElementById('roll').value);
}

function convert(word) {
    let res = [];
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        res.push(word.charAt(i));
    }
    res.sort()
    return res.join("")
}

function key_dic(list) {
    let dic = {};
    for (let i = 0; i < list.length; i++) {
        let word = list[i];
        let key = convert(word);
        if (key in dic)
            dic[key].push(word);
        else
            dic[key] = [word]
    }
    return dic
}

