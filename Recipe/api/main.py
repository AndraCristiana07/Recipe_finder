from flask import Flask, request, jsonify, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

recipes = open("./recipes.json")
recipes = json.load(recipes)

@app.route("/get-recipe/<recipe_id>")
def get_recipe(recipe_id):
    if recipe_id == "all":
        return jsonify(recipes)
    return jsonify(recipes[recipe_id])

@app.route("/get-some-recipes/<offset>/<noRecipes>")
def get_some_recipes(offset, noRecipes):
    recipes_list = list(recipes.keys())
    recipes_list = recipes_list[int(offset):int(offset)+int(noRecipes)]
    new_dict = {}
    for i in recipes_list:
        
        new_dict[i] = recipes[i]
    return new_dict
    

@app.route("/get-all-recipes/<page>/<perPage>")
def get_all_recipes(page, perPage):
    page = int(page)
    perPage = int(perPage)
    
    recipes_list = list(recipes.keys())
    recipes_list = recipes_list[((page - 1) * perPage):(page - 1) * perPage+ perPage]

    new_dict = {}
    for i in recipes_list:
        new_dict[i] = recipes[i]
    
    return new_dict

if __name__ == "__main__":
    app.run(debug=True)