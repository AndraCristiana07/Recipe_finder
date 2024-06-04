
<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Recipe finder </h3>

  <p align="center">
    Search tonight's recipe!
    <br />
   
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
         <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknoledgments</a></li>
    
    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A recipe finder web application where you can search the desired food you want to cook. 

**Fronted**

What can you do? You can manually search for a specific recipe by its name, or you can search by ingredients. You can also select a recipe type from the chips, so that you can see all the recipes with beef, chicken, etc.

Now for a full description of the pages:

* Home page: 

![Home image](https://github.com/AndraCristiana07/Recipe_finder/blob/main/images/home.png?raw=true)

    - A page with a short desciption, some images with animations, a random quote that will change every time you acces the page, most clicked recipe, a "try recipe",a header and a footer.
    - After the description, there's a "explore" button that will take you to the recipe page
    - The "Most clicked recipe" and "Try something new" cards from this page will take you to those recipes directly.
    - The header has the name of the app, a search bar for the recipes and buttons that take you home and to the recipes page.
    - If you need to search by title, just input what you want in the search bar and it will show a list with recipes. If you click on a recipe it will give you the recipe card.

* Recipe page: 

![Recipe Page image](https://github.com/AndraCristiana07/Recipe_finder/blob/main/images/recipes1.png?raw=true)

![Recipe Page image](https://github.com/AndraCristiana07/Recipe_finder/blob/main/images/recipes2.png?raw=true)

    - Here there are displayed all the recipes with pagination. You can also choose how many recipes you want shown on the page. If you want to see the full recipe, you need to click on its card.
    - There's also chips with usually searched recipes (burger, pizza, beef, chicken, etc.). When you click on it, it will take you to a page with all the recipes with beef, for example. 
    - You can find another search bar here, but this time it's a search by ingredients. So if you want to search for a recipe that has eggs in it, you input it in the search by ingredients and it will take you to a page with all recipes that have that ingredient.
    - A "create a recipe" button that take you to a form where you can add your own recipe with all the ingredients, steps. After you click on the "Create recipe" button it will submit it and it will be added to the other recipes dictionary.

You can see the whole recipe by clicking on its card. There you will find all the ingredients and steps you need.

![Recipe Card image](https://github.com/AndraCristiana07/Recipe_finder/blob/main/images/recipe_card.png?raw=true)

**Backend**

The backend uses a json file where all the recipes are found.

There's a format.py file where I format the json file to work for me.
There's also the main.py file where all the functionalities are implemented for the app like the ones for fetching the ingredients, the recipes, recipes by ingredients, recipes per page etc.


### Built With

These are what I used to build the bot:

* ![JavaScript](https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
 
*  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
    
*  ![CSS3](https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
*  ![Python](https://img.shields.io/badge/Python%20-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white)
   


<!-- GETTING STARTED -->
## Getting Started

To be able to use this project you will need some stuff first.

### Prerequisites

* You need to install npm and node.js

* I also used vite to create my project, so if you want to create your own with it you can use:
     ```sh
  npm create vite@latest
  ```
### Installation

If you want to make your own app like this you need to:

1. Clone the repo
   ```sh
   git clone https://github.com/AndraCristiana07/Recipe_finder.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Run the frontend
   ```sh
   node dev start
   ```
4. Run the backend
    ```sh
   python ./main.py
   ```


<!-- ROADMAP -->
## Roadmap

- [x] Find recipes data
- [x] Make home page
- [x] Make Recipe page
- [x] Make header
- [x] Add navigation
- [x] Add description and images to home page
- [x] Add quote to home page
- [x] Animate images
- [x] Make recipe cards
- [x] Make recipe dialog with full instructions
- [x] Make chips 
- [x] Format json data
- [x] Add functions in the backend for fetching recipes
- [x] Add pagination and number of recipes per page
- [x] Make chips pages and functions for backend
- [x] Make search bar and update backend 
- [x] Modify recipe cards to look better
- [x] Modify search to not fetch recipes untill there's at least 2 characters as input
- [x] Make search by ingredients bar and functionalities in backend
- [x] Make sure pagination works on every type of page
- [x] Make download recipe button to download a pdf of the recipe page
- [x] Add "create a recipe" button and make page for it
- [x] Add functionalities for add recipe and update the json


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Some things that helped me while making this project :
* [MUI components](https://mui.com/)
* [React documantations](https://legacy.reactjs.org/docs/getting-started.html)
* [Vite](https://vitejs.dev/)




