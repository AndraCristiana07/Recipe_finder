import json



new_json = {}
old_json = json.load(open('recipes.json'))
for e in old_json:
    new_json[e] = old_json[e]
    new_json[e]['ingredients'] = list(map(lambda x: x, old_json[e]['ingredients'][1:-1].split('\', \'')))
    new_json[e]['ingredients'][0] = new_json[e]['ingredients'][0][1:]
    new_json[e]['ingredients'][-1] = new_json[e]['ingredients'][-1][:-1]
with open('recipes_new.json', 'w') as f:
    json.dump(new_json, fp=f, indent=4)
    