from flask import Flask, request, jsonify, json
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

recipes = open("./recipes_new.json")
recipes = json.load(recipes)

def assign_unique_ids(recipes):
    for idx, recipe_id in enumerate(recipes):
        recipes[recipe_id]['id'] = idx + 1  
    return recipes
recipes = assign_unique_ids(recipes)

def assign_clicks(recipes):
    for idx, recipe_id in enumerate(recipes):
        recipes[recipe_id]['clicks'] = 0 
    return recipes
recipes = assign_clicks(recipes)



@app.route("/get-all-ingredients")
def get_all_ingredients():
    all_ingredients = set()

    for recipe_id, recipe in recipes.items():
        ingredients_list = recipe.get('ingredients', [])
        all_ingredients.update(ingredients_list)

    return jsonify({'ingredients': list(all_ingredients)})


@app.route("/get-all-recipes-by-ingredients/<ingredient>")
def get_all_recipes_by_ingredients(ingredient):
    requested_ingredient = ingredient.lower()

    filtered_recipes = {}
    for recipe_id, recipe in recipes.items():
        recipe_ingredients = [item.lower() for item in recipe.get('ingredients', [])]

        if any(requested_ingredient in item for item in recipe_ingredients):
            filtered_recipes[recipe_id] = recipe

    return filtered_recipes

@app.route("/get-recipes-count-by-ingredient/<ingredient>")
def get_recipes_count_by_ingredient(ingredient):
    requested_ingredient = ingredient.lower()

    filtered_recipes = {}
    for recipe_id, recipe in recipes.items():
        recipe_ingredients = [item.lower() for item in recipe.get('ingredients', [])]

        if any(requested_ingredient in item for item in recipe_ingredients):
            filtered_recipes[recipe_id] = recipe
        count = len(filtered_recipes)

    return jsonify(count)

@app.route("/get-recipes-by-ingredients/<ingredient>/<page>/<perPage>")
def get_recipes_by_ingredients(ingredient, page, perPage):
    page = int(page)
    perPage = int(perPage)

    filtered_recipes = {}
    for recipe_id, recipe in recipes.items():
        recipe_ingredients = [item.lower() for item in recipe.get('ingredients', [])]

        if any(ingredient.lower() in item for item in recipe_ingredients):
            filtered_recipes[recipe_id] = recipe

    recipes_list = list(filtered_recipes.keys())
    recipes_list = recipes_list[((page - 1) * perPage):(page - 1) * perPage + perPage]

    new_dict = {}
    for i in recipes_list:
        new_dict[i] = filtered_recipes[i]

    return new_dict

@app.route("/get-recipe/<recipe_id>")
def get_recipe(recipe_id):
    if recipe_id == "all":
        return jsonify(recipes)
    return jsonify(recipes[recipe_id])

@app.route("/get-recipe-count")
def get_recipe_count():
    total_recipe_count = len(recipes)  
    return jsonify(total_recipe_count)

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

@app.route("/get-chips-count/<chip>")
def get_chip_count(chip):
    filtered_recipes = {}
    for recipe_id, recipe in recipes.items():
        if chip.lower() in recipe['title'].lower():
            filtered_recipes[recipe_id] = recipe
            
    total_chip_count = len(filtered_recipes)  
    return jsonify(total_chip_count)

@app.route("/get-random-recipe")
def get_random_recipe():
    random_recipe_id = random.choice(list(recipes.keys()))
    random_recipe = recipes[random_recipe_id]
    return jsonify(random_recipe)

@app.route("/update-click-count/<recipe_id>", methods=["POST"])
def update_click_count(recipe_id):
        print("Received recipe ID:", recipe_id) 
        recipe_id = int(recipe_id)
        recipes[recipe_id]["clicks"] += 1
        return jsonify({"message": "Click count updated successfully", "recipe": recipes[recipe_id]})

    
@app.route("/get-most-clicked")
def get_most_clicked():
    most_clicked_recipe = max(recipes.values(), key=lambda x: x["clicks"])
    # most_clicked_recipe["clicks"] += 1
    return jsonify(most_clicked_recipe)

@app.route("/get-recipes-by-label/<chip>/<page>/<perPage>")
def get_recipes_by_label(chip, page, perPage):
    page = int(page)
    perPage = int(perPage)

    filtered_recipes = {}
    for recipe_id, recipe in recipes.items():
        if chip.lower() in recipe['title'].lower():
            filtered_recipes[recipe_id] = recipe

    recipes_list = list(filtered_recipes.keys())
    recipes_list = recipes_list[((page - 1) * perPage):(page - 1) * perPage + perPage]

    new_dict = {}
    for i in recipes_list:
        new_dict[i] = filtered_recipes[i]
    
    return new_dict


# @app.route("/create-recipe", methods=["POST"])
# def create_recipe():
#     try:

#         data = request.get_json()


#         new_recipe_id = str(len(recipes) + 1)


#         recipes[new_recipe_id] = {
#             'title': data.get('title', ''),
#             'ingredients': data.get('ingredients', []),
#             'steps': data.get('steps', ''),
#         }

#         recipes = assign_unique_ids(recipes)
#         recipes = assign_clicks(recipes)

#         with open('./recipes_new.json', 'w') as recipes_file:
#             json.dump(recipes, recipes_file, indent=2)

#         return jsonify({'message': 'Recipe created successfully', 'recipe_id': new_recipe_id}), 201

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500
    
#
def save_recipes_to_file():
    with open('./recipes_new.json', 'a') as recipes_file:
        json.dump(recipes, recipes_file, indent=2)

@app.route("/add-recipe", methods=["POST"])
def add_recipe():
    try:
        new_recipe_data = request.get_json()

        new_recipe_id = len(recipes) + 1
        new_recipe_data['id'] = new_recipe_id
        new_recipe_data['clicks'] = 0

        recipes[new_recipe_id] = new_recipe_data

        save_recipes_to_file()
        
        return jsonify({"message": "Recipe added successfully", "recipe": new_recipe_data})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)