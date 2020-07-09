import copy
import random
import json

def convert(word, lettermap):
    res = []
    for x in word:
        if x.lower() in lettermap:
            res += lettermap[x.lower()]
    res.sort()
    return ''.join(res)


def key_dic(list, lettermap):
    dic = {}
    for word in list:
        key = convert(word, lettermap)
        if key in dic:
            dic[key].append(word)
        else:
            dic[key] = [word]
    return dic


def letter_num_dic(converted):
    dic = {}
    for word_key in converted:
        if len(word_key) in dic:
            dic[len(word_key)].append(word_key)
        else:
            dic[len(word_key)] = [word_key]
    return dic

def remove(word, subword):
    for s in subword:
        if s not in word:
            return ''
        word = word.replace(s,'',1)
    return word

def find_dice(dice, dic, dic_count, max_i=20):
    letters = copy.deepcopy(dic_count)
    res = {}
    if dice in dic and len(dice) <= max_i:
        res[1]=dic[dice]
    for i in range(min(len(dice)-1, max_i), 0, -1):
        if i in letters:
            while letters[i]:
                key = letters[i].pop(0)
                leftover = remove(dice, key)
                if leftover:
                    others = find_dice(leftover, dic, letters, i)
                    for num in others:
                        if num+1 in res:
                            res[num+1].append((dic[key], others[num]))
                        else:
                            res[num+1] = [(dic[key], others[num])]
    return res

def print_first_rand(res, num=3):
    keys = [size for size in res]
    keys.sort()
    keys = keys[:num]
    for key in keys:
        tabs = ''
        curr = res[key]
        t = []
        for i in range(key-1):
            r = random.choice(curr)
            t.append(random.choice(r[0]))
            # print(tabs, r[0])
            tabs += '\t'
            curr = r[1]
        t.append(random.choice(curr))
        print(' '.join(t))
        #print(tabs, curr)

def find(dice, lettermap, words, print=3):
    updated = set([x.lower() for x in words])
    x = key_dic(updated, lettermap)
    xx = letter_num_dic(x)
    r = find_dice(convert(dice, lettermap), x, xx)
    print_first_rand(r,1)
    print_first_rand(r,1)
    print_first_rand(r,print)
    return r


if __name__ == "__main__":
    # load all data
    data = json.load(open('data.json'))
    print(data.keys())


    print("a=find('rpsbbbyyyyg', sw_list + curse_list + animal_list + descriptions_list + my_list + countries_list + basic_list,3)")
    a = find('rpsbbbyyyyg', data['letter_map'],
             data['sw_list'] + data['curse_list'] + data['animal_list'] + data['descriptions_list']
             + data['my_list'] + data['countries_list'] + data['basic_list'])
