/*
 bugs:
 1. word repetition, and strange word choice
 2. choose random doesn't work correctly, might be due to 1
 */

function find() {
    let words = [].concat(my_list, countries_list, basic_list, animal_list, descriptions_list, curse_list, sw_list);
    let x = key_dic(words);
    let xx = letter_num_dic(x);
    let dice = document.getElementById('roll').value;
    let r = find_dice(convert(dice), x, xx);
    let test = JSON.stringify(r)
    let text = choose_random(r, 3)
    document.getElementById("results").innerHTML = test;
}

const lettermap = {
    'y':'y',
    'g':'g',
    'a':'g',
    'b':'b',
    'k':'s',
    's':'s',
    'r':'r',
    'c':'r',
    'p':'p',
    'd':'p'
}

const forbidden_letters = 'wfvtln'

const my_list = ['BiG','BoY','GAY','YAY','BABY','BuGGY','bug','SoY','GooD','BAD','DAD','DeGRee','AGRee','AiDS','PAuSe','PAD','BiRD','BiRDS','GRAPe','GRAPeS','PAPeR','PAPeRS','SCARY','DeSPAiR','ADDReSS','ADDReSSeS','zeRo','iDo','PoPe','CoKe','RiP ','ReD','PePSi','PePPeR','suck','sucKS']
const countries_list = ['Bahamas','Barbados','Cambodia','Chad','Comoros','Cuba','Cyprus','Ecuador','Gambia','Georgia','Greece','Iraq','Jamaica','Madagascar','Mexico','Morocco','Mozambique','Paraguay','Peru','Samoa','Saudi Arabia','Serbia','Syria','Uruguay','Zambia']
const basic_list = ['you','a','me','is','my','do','be','your','so','are','he','oh','here','yeah','her','she','up','go','him','did','see','come','good','as','okay','back','hey','yes','his','or','because','some','had','say','ok','us','make','sure','more','our','sorry','am','maybe','has','uh','by','said','much','god','home','day','keep','does','guy','guys','huh','big','made','guess','hi','care','bad','mom','remember','dad','hear','baby','course','came','House','Jack','idea','ask','years','room','hope','same','um','hmm','happy','sir','May','job','heard','boy','dead','excuse','hard','car','ready','supposed','head','used','each','cause','use','bye','somebody','such','miss','married','case','kids','check','ha','year','makes','ago','says','crazy','kid','days','asked','break','promise','door','easy','SAM','die','comes','ya','mm','pay','eyes','side','yours','read','pick','bed','hours','serious','high','ahead','sick','game','goes','seems','book','seem','six','daddy','dear','buy','hour','speak','body','order','ooh','marriage','sex','died','scared','Jake','ass','boys','hair','choice','Max','kiss','Grace','marry','drop','dream','surprise','poor','mad','besides','piece','busy','decided','Joey','perhaps','dog','air','murder','eye','broke','missed','George','Ross','red','Brooke','suppose','Rick','Rose','York','message','become','Craig','dude','ride','Ray','Bo','buddy','Phoebe','ridge','music','paper','proud','agree','share','hurry','Chris','Kay','mess','Jerry','dress','Richard','Jesus','James','road','mmm','surprised','bar','pass','dark','ice','Jessica','box','judge','sake','mommy','mama','quick','Barbara','rid','Adam','bag','Mike','major','cops','deep','park','shh','record','Erica','key','card','crime','joke','magic','promised','Jim','paid','push','boss','doc','summer','ex','cop','risk','Eric','dreams','across','charge','Cassie','hide','huge','age','picked','Josh','gay','ho','Brady','decide','sad','press','seemed','Mary','memory','Mark','Paris','Joe','board','Roz','Bob','space','kick','grab','discuss','yep','rock','rich','bucks','shoes','peace','arms','Brad','papers','er','eh','cash','Skye','keeps','beer','drug','cares','gosh','books','jump','career','Mac','Maria','easier','drugs','Isaac','checked','Amber','Pacey','pop','piper','church','Chad','games','Rory','charges','dare','shop','radio','reach','heh','choose','dropped','cry','agreed','Prue','price','goodbye','guard','cake','mood','crap','Paige','pressure','ohh','arm','dressed','cup','bus','raise','cross','carry','group','Eddie','Rebecca','assume','bedroom','camera','bigger','keys','area','cream','desk','chair','rough','sees','Harry','pack','ship','surgery','passed','jerk','copy','dry','speech','issue','orders','America','code','umm','research','escape','page','Chicago','address','hero','dumb','Amy','gas','memories','Margo','bear','smoke','horse','cards','search','damage','spoke','scare','Marah','beach','Mia','re','ed','due','hired','rush','heads','Kramer','prepared','sea','Asa','kissed','Jess','babies','army','bride','add','size','Jimmy','Sami','beg','Diego','someday','grade','cheese','Bobby','pizza','bird','ideas','Parker','bomb','records','ordered','shame','hook','scary','merry','precious','Roy','caused','couch','harder','Gia','pushed','shock','became','crash','Sarah','headed','purpose','drag','speed','hire','curious','gorgeous','a','is','you','he','are','as','his','be','or','had','by','some','up','use','your','said','each','she','do','so','her','make','see','him','has','more','day','go','come','did','my','may','side','made','back','year','came','good','me','our','say','cause','much','boy','same','does','air','home','read','add','here','big','high','such','ask','house','us','head','page','keep','eye','cross','hard','sea','press','seem','ease','paper','group','music','mark','car','care','book','carry','room','idea','base','hear','horse','sure','ready','red','bird','body','dog','pose','measure','door','ship','area','rock','order','piece','pass','space','heard','hour','remember','reach','six','appear','road','map','cry','dark','box','oh','quick','produce','course','decide','deep','busy','record','dry','ago','check','game','shape','miss','yes','drop','am','arm','size','speak','ice','pair','perhaps','pick','square','bed','egg','ride','race','summer','exercise','sky','board','joy','grass','job','edge','gas','bear','happy','hope','jump','baby','buy','raise','push','paragraph','hair','describe','cook','copy','phrase','ear','broke','case','speed','pay','age','dress','surprise','poor','key','crease','die','seed','break','yard','rise','bad','mix','choose','period','radio','spoke','crop','agree','chair','rich','process','guess','sharp','compare','poem','rub','hurry','major','search','dead','rose','success','shoe','spread','camp','shop','gray','require','broad','prepare','sugar','huge','discuss','guide','score','mass','card','rope','dream','basic','shore','chord','share','dad','bread','charge','proper','bar','duck','degree','chick','dear','occur','speech']
const animal_list = ['Dog','Horse','Pig','Sheep ','Duck ','Goose ','Ape','Aphid','Asp','Badger','Barracuda','Bass','Bear','Bedbug','Bee','Bird','Boa','Boar','Booby','Bug','Buzzard','Capybara','Caribou','Carp','Chickadee','Cobra','Cockroach','Cod','Cougar','Crab','Cuckoo','Cicada','Deer','Dog','Dormouse','Duck','Gecko','Goose','Gopher','Grasshopper','Grouse','Guppy','Haddock','Hammerhead shark','Hare','Harrier','Hedgehog','Horse','Jaguar','Jay','Koi','Magpie','Moose','Mouse','Muskox','Opossum','Orca','Peacock','Perch','Pig','Pike','Porpoise','Possum','Prairie dog','Puma','Quokka','Rook','Seahorse','Shark','Sheep','Shrimp','Spider','Squid','Yak','Zebra','Dog','Guppy','Horse','Koi','Sheep','Yak']
const descriptions_list = ['academic','acidic','admired','adored','aged','ajar','amused','arid','ashamed','assured','babyish','bad','back','baggy','bare','basic','big','bogus','bossy','brisk','bruised','bumpy','busy','cheap','cheery','chubby','coarse','composed','cooked','courageous','crazy','creamy','creepy','crisp','crooked','cumbersome','damaged','damp','dapper','dark','dead','dear','deep','dim','dreary','disguised','dizzy','dopey','drab','dreary','droopy','dry','each','eager','easy','embarrassed','euphoric','gaseous','giddy','good','gorgeous','gracious','gray','greedy','gregarious','grim','grimy','gross','grouchy','grubby','gruesome','grumpy','gummy','hairy','happy','hard','harsh','hideous','high','hoarse','huge','husky','icky','icy','impish','impure','jaded','jagged','jam-packed','joyous','judicious','juicy','jumbo','jumpy','key','kooky','kosher','mad','made-up','major','married','meager','mediocre','medium','meek','merry','messy','misguided','mixed','muddy','murky','mushy','obese','odd','our','parched','peppery','periodic','perky','pesky','poised','poor','posh','precious','precious','pricey','primary','prime','prize','proper','proud','pure','pushy','queasy','quick','quirky','ragged','rapid','rare','rash','ready','red','required','rich','rigid','ripe','rosy','rough','rubbery','ruddy','rude','sad','same','scarce','scared','scary','serious','shabby','shady','sharp','shocked','shoddy','shy','sick','smoggy','smug','soggy','somber','some','sore','soupy','sour','sparse','speedy','spicy','spry','square','squeaky','subdued','sugary','super','superb','superior','surprised','suspicious','used','yummy','zigzag']
const curse_list = ['ass','baby juice','bareback','bdsm','bimbos','boob','boobs','bukkake','cock','cocks','creampie','cum','darkie','dick','dommes','dry hump','ecchi','gay sex','goodpoop','goregasm','grope','group sex','guro','hard core','hardcore','hooker','jigaboo','jiggaboo','jiggerboo','juggs','kike','make me come','omorashi','orgasm','orgy','paki','pedobear','piss pig','pisspig','pubes','pussy','raghead','rape','rimjob','sadism','sex','sexo','sexy','shibari','sodomize','sodomy','spic','spooge','suck','sucks','yaoi','arse','bugger','bum','crap','dyke','jerk','omg','piss','poop','prick','pube','queer','smegma']
const sw_list = [].concat(
    ['Bizarre','Books','Breach','Cause','Cyborgs','Deed','Disease','Dreamer','Drugs','Eerie','Episode','Exposure','Herbs','Hobby','Horror','Magic','Microbe','Murky','Oasis','Odd','Order','Pressure','Probe','Purpose','Queasy','Quirk','Scare','Scope','Space','Urge']
    ,['Ahak Maharr','Aki Aki','Bdas','Babb','Bergamasque','Bimm','Boma','Brebishem','Caphex','Cemas','Corasgh','Dabi','Duhma','Dupei','Ecorb','Esh-kha','Ezaraa','Garoos','Gorach','Gorezh','Gorum','Gozzo','Griddek','Hassk','Hassk','Hig','Hoguss','Houk','Houk','Jacipri','Jeodu','Jeodu','Jiruusi','Kaaa','Kassk','Khormai','Kooroo','Krish']
    ,['abrams','george','yoda','mace','jar jar','rey','jedi','jedi','dagobah','jakku','beru','bobba','dooku','jedi','sidious','ackbar','droid','bossk','phasma','jabba']
)

function convert(word) {
    let res = [];
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        let c = word.charAt(i);
        if (c in lettermap)
            res.push(lettermap[c]);
    }
    res.sort()
    return res.join("")
}

function key_dic(list) {
    let dic = {};
    for (let i = 0; i < list.length; i++) {
        let word = list[i];
        let key = convert(word);
        if (key in dic) {
            if (!(word in dic[key])) {
                dic[key].push(word);
            }
        }
        else {
            dic[key] = [word]
        }
    }
    return dic
}

function letter_num_dic(converted) {
    let dic = {};
    for (let word_key in converted) {
        if (word_key.length in dic)
            dic[word_key.length].push(word_key);
        else
            dic[word_key.length] = [word_key];
    }
    return dic
}

function remove(word, subword){
    for (let i = 0; i < subword.length; i++) {
        let s = subword.charAt(i)
        if (!(word.includes(s)))
            return ''
        word = word.replace(s,'',1)
    }
    return word
}

function find_dice(dice, dic, dic_count, max_i=20){
    let letters = {...dic_count};
    let res = {};
    if (dice in dic && dice.length <= max_i)
        res[1]=dic[dice]

    for (let i = Math.min(dice.length-1, max_i); i > 0; i--) {
    if (i in letters)
        while(letters[i].length > 0) {
            let key = letters[i].shift();
            let leftover = remove(dice, key)
            if (leftover.length > 0) {
                let others = find_dice(leftover, dic, letters, i)
                for (let k in others) {
                    let num = parseInt(k)
                    if ((num+1) in res)
                        res[num+1].push([dic[key], others[num]])
                    else
                        res[num+1] = [[dic[key], others[num]]]
                }
            }
        }
    }
    return res
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
    const keys = Object.keys(words);
    let res = "";
    for (let repeat = 0; repeat < num-1; repeat++) {
        let key = random_choice(keys);
        let curr = words[key];
        t = [];
        for(let i = 0; i < key; i++){
            let r = random_choice(curr);
            t.push(random_choice(r[0]));
            curr = r[1];
        }
        t.push(random_choice(curr));
        shuffle(t);
        res += t.join( ) + "\n";
    }
}
