let simplified_words;
let simplified_words_by_length;

function init() {
  let words = [].concat(data['my_list'], data['countries_list'],
      data['basic_list'], data['animal_list'],
      data['descriptions_list'], data['curse_list'], data['sw_list']);
  words = words.map(v => v.toLowerCase());
  simplified_words = key_dic(words);
  simplified_words_by_length = letter_num_dic(simplified_words);
}

function find() {
  let dice = document.getElementById('roll').value;
  let r = find_dice(convert(dice, data['letter_map']), simplified_words, simplified_words_by_length);
  document.getElementById("results").innerHTML = choose_random(r, 3);
}

function convert(word, lettermap) {
  let res = [];
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    let c = word.charAt(i);
    if (c in lettermap)
      res.push(lettermap[c]);
  }
  res.sort();
  return res.join("");
}

function key_dic(list) {
  let dic = {};
  for (let i = 0; i < list.length; i++) {
    let word = list[i];
    let key = convert(word, data['letter_map']);
    if (key in dic) {
      if (!dic[key].includes(word)) {
        dic[key].push(word);
      }
    }
    else {
      dic[key] = [word];
    }
  }
  return dic;
}

function letter_num_dic(converted) {
  let dic = {};
  for (let word_key in converted) {
    if (word_key.length in dic)
      dic[word_key.length].push(word_key);
    else
      dic[word_key.length] = [word_key];
  }
  return dic;
}

function remove(word, subword){
  for (let i = 0; i < subword.length; i++) {
    let s = subword.charAt(i);
    if (!(word.includes(s)))
      return '';
    word = word.replace(s,'',1);
  }
  return word;
}

function clone(obj) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}

function find_dice(dice, dic, dic_by_length, max_i=20){
  let letters = clone(dic_by_length);
  let res = {};
  if (dice in dic && dice.length <= max_i)
    res[1]=dic[dice];

  for (let i = Math.min(dice.length-1, max_i); i > 0; i--) {
    if (i in letters)
      while(letters[i].length > 0) {
        let key = letters[i].shift();
        let leftover = remove(dice, key);
        if (leftover.length > 0) {
          let others = find_dice(leftover, dic, letters, i);
          for (let k in others) {
            let num = parseInt(k);
            if ((num+1) in res)
              res[num+1].push([dic[key], others[num]]);
            else
              res[num+1] = [[dic[key], others[num]]];
          }
        }
      }
  }
  return res;
}

function random_choice(arr){
  return arr[arr.length * Math.random() << 0];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function choose_random(words, num) {
  let keys = Object.keys(words);
  keys.sort();
  let res = "";
  for (let x = 0; x < num && x < keys.length; x++) {
    let key = keys[x]
    let curr = words[key];
    let t = [];
    for(let i = 0; i < key - 1; i++){
      let r = random_choice(curr);
      t.push(random_choice(r[0]));
      curr = r[1];
    }
    t.push(random_choice(curr));
    shuffle(t);
    res += t.join(" ") + "\n";
  }
  return res
}

window.onload = init;