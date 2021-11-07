let mock = [
    {
        id: 1,
        title: "Double Chocolate Pancakes",
        img: "pancakes.jpg",
        category: 'Breakfast',
        ingredients: [
            {
                sectionIngredients: [
                    "2 tablespoons butter, melted and cooled",
                    "1/2 cup flour",
                    "1/3 cup sugar",
                    "3 tablespoons cocoa",
                    "1/2 teaspoon baking powder",
                    "pinch salt",
                    "1/4 cup semisweet chocolate chips",
                    "1/3 cup + 1 tablespoon milk",
                    "1 large egg, beaten"
                ]
            }
        ],
        steps: [
            "Sift together flour, sugar, cocoa, baking powder and salt.",
            "Add chocolate chips.",
            "Add milk, butter, and egg.",
            "Mix until just combined."
        ]
    },
    {
        id: 2,
        title: "Crêpes",
        img: "crepes.jpg",
        category: 'Breakfast',
        ingredients: [
            {
                sectionIngredients: [
                    "1 1/4 to 1 1/3 cup flour",
                    "3 eggs",
                    "3/4 cup milk",
                    "3/4 cup water",
                    "1/4 teaspoon salt",
                    "2 tablespoons butter or margarine, melted"
                ]
            }
        ],
        steps: [
            "Put ingredients in order into blender. Blend 30 seconds, scrape down sides, blend 30-60 seconds more until smooth. Makes about 16 crepes."
        ],
    },
    {
        id: 3,
        title: "French Toast",
        img: "toast.jpg",
        category: 'Breakfast',
        ingredients: [
            {
                sectionIngredients: [
                    "1 cup flour",
                    "1/2 teaspoon salt",
                    "1 1/2 teaspoon sugar",
                    "1 1/2 teaspoon baking powder",
                    "1 teaspoon cinnamon",
                    "1/4 teaspoon nutmeg",
                    "1 cup milk",
                    "1 egg"
                ]
            }
        ],

        steps: [
            "Stir together flour, salt, sugar, baking powder, cinnamon, and nutmeg. Beat milk and egg until frothy, then add to dry ingredients. Dip toast and fry."
        ],
    },
    {
        id: 4,
        title: "Caramel",
        img: "caramel.jpg",
        category: 'Dessert',
        ingredients: [
            {
                sectionIngredients: [
                    "2 cups sugar",
                    "1 cup dark Karo corn syrup",
                    "1 cube (1/2 cup) butter",
                    "1/2 pint cream",
                    "1/2 pint cream"
                ]
            }
        ],

        steps: [
            "Rub pan and wood spoon with Nucoa margarine.",
            "Cook sugar, corn syrup, butter, and half the cream at medium high heat to 224° (pecan roll) or 226° (caramel).",
            "Add the other half of the cream and cook to 228° (pecan roll) or 230° (caramel).",
            "Pour into buttered 9x13 pan--don't scrape the pan!"
        ],
        notes: [
            "(Temperatures adjusted for 4000 feet altitude)."
        ],
    },
    {
        id: 5,
        title: "Chocolate Pie",
        img: "chocolate_pie.jpg",
        category: 'Dessert',
        ingredients: [
            {
                sectionIngredients: [
                    "2/3 cup sugar",
                    "1/4 cup cornstarch",
                    "2 tablespoons unsweetened cocoa",
                    "pinch salt",
                    "6 large egg yolks",
                    "2 cups milk",
                    "1/2 cup whipping cream",
                    "6 ounces dark chocolate",
                    "1 teaspoon vanilla",
                    "Chocolate crumb pie crust"
                ]
            }
        ],
        steps: [
            "In medium heavy saucepan, blend first 4 ingredients.",
            "Add egg yolks, whisk to form thick paste.",
            "Whisk in milk and cream. Continue whisking while heating over medium heat until mixture thickens and boils for 1 minute.",
            "Remove from heat. Add chocolate, mix until smooth.",
            "Add vanilla.",
            "Let cool for 5 minutes, whisking occasionally.",
            "Put in crust, chill until cold."
        ]
    },
    {
        id: 6,
        title: "Toll House Chocolate Chip Cookies",
        img: "cookies.jpg",
        category: 'Dessert',
        ingredients: [
            {
                sectionIngredients: [
                    "2 1/4 cup flour",
                    "1 teaspoon baking soda",
                    "1 teaspoon salt",
                    "1 cup butter, softened",
                    "3/4 cup granulated sugar",
                    "3/4 cup brown sugar",
                    "1 teaspoon vanilla",
                    "1/2 teaspoon water",
                    "2 eggs",
                    "12 oz. package (2 cups) chocolate chips",
                    "2 cups nuts"
                ]
            }
        ],

        steps: [
            "Sift together flour, soda, and salt. Set aside.",
            "Beat butter, sugar, vanilla, and water until creamy. Add eggs.",
            "Add flour mixture; mix well.",
            "Stir in chocolate chips and nuts.",
            "Drop by teaspoonfuls on greased cookie sheets. Bake at 375° for 10 to 12 minutes."
        ]
    },
    {
        id: 7,
        title: "Key Lime Pie",
        img: "key_lime_pie.jpg",
        category: 'Dessert',
        ingredients: [
            {
                sectionIngredients: [
                    "1 envelope unflavored gelatin",
                    "1/2 cup sugar",
                    "1/4 teaspoon salt",
                    "4 egg yolks",
                    "1/2 cup lime juice",
                    "1/4 cup water",
                    "1 teaspoon grated lime peel",
                    "4 egg whites (see note)",
                    "1/2 cup sugar",
                    "1 cup whipping cream",
                    "1 baked 9-inch pastry shell or graham cracker crust"
                ]
            }
        ],

        notes: [
            "Since the whites are not cooked, you can substitute powder eggs whites such as"
        ],
        steps: [
            "Combine gelatin, sugar, and salt.",
            "Beat egg yolks, lime juice, and water till blended; stir into gelatin.",
            "Cook over medium heat, stirring, just till mixture comes to boiling.",
            "Remove from heat; add lime peel. Add green food coloring to give pale green color.",
            "Chill stirring occasionally until mixture mounds when spooned (note: do not stick in refrigerator so long that the gelatin hardens).",
            "Beat egg whites (or Just Whites as directed) until soft peaks form. Gradually add 1/2 cup sugar, beat until stiff peaks form. Fold gelatin mixture into egg whites.",
            "Whip cream; fold into other mixture.",
            "Pile filling into baked pastry shell. Chill until firm."
        ]
    },
    {
        id: 8,
        title: "Chocolate Molten Lava Cake",
        img: "lava_cake.jpg",
        category: 'Dessert',
        ingredients: [
            {
                sectionIngredients: [
                    "6 squares bittersweet baking chocolate",
                    "10 tablespoons butter",
                    "1 1/2 cups powdered sugar",
                    "1/2 cup flour",
                    "3 whole eggs",
                    "3 egg yolks"
                ]
            }
        ],

        steps: [
            "Preheat oven to 425 degrees.",
            "Grease six 6-oz. custard cups or large muffin tin. Place on baking sheet.",
            "Microwave chocolate and butter until butter is melted. Stir with wire whisk until chocolate is completely melted.",
            "Add sugar and flour; mix well",
            "Add eggs and yolks; beat until well blended.",
            "Divide batter evenly into prepared cups.",
            "Bake 14-15 minutes, until cakes are firm around the edges but still soft in the center. Let stand 1 minute, then carefully loosen and invert onto serving dishes. Garnish with powdered sugar and raspberries. Serve warm."
        ]
    },
    {
        id: 9,
        title: "Alfredo Sauce",
        img: "alfredo.jpg",
        category: 'Main Dish',
        ingredients: [
            {
                sectionIngredients: [
                    "4 ounces cream cheese, cubed",
                    "1/2 cup grated parmesan cheese",
                    "3/4 cup milk",
                    "1/4 cup butter",
                    "1/4 teaspoon white pepper",
                    "1/8 teaspoon garlic powder",
                    "salt to taste",
                    "8 ounces cooked, drained fettuccine"
                ]
            }
        ],

        steps: [
            "Melt cream cheese, parmesan cheese milk, butter, white pepper, garlic powder, and salt in medium sauce pan.",
            "Cook on low until cream cheese is melted and mixture is well blended.",
            "Pour over fettuccine."
        ]
    },
    {
        id: 10,
        title: "Chili Verde",
        img: "chili_verde.jpg",
        category: 'Main Dish',
        ingredients: [
            {
                sectionIngredients: [
                    "3-4 pounds chicken breasts or good quality pork roast (preferably with bone)",
                    "6 Anaheim (mild) peppers",
                    "3 Jalapeno (medium) peppers",
                    "1 medium onion (optional--more pepper flavor without)",
                    "2 cloves garlic",
                    "1 tablespoon cumin",
                    "2 cups chicken stock (or 2 cubes chicken bouillon and 2 cups water)",
                    "2 tablespoons flour",
                    "Salt to taste",
                    "1-2 tablespoons sugar"
                ]
            }
        ],

        steps: [
            "Put chicken or pork in crock pot. Remove seeds from peppers (remember to wear gloves!) and add to pot. Add onion, garlic, cumin, and then pour broth over all. Cook for at least 5 hours on low (preferred) or 3 on high. Remove meat from pot, de-bone and cut (or pull) into bite-size pieces. Meanwhile, liquefy the remaining ingredients and add flour to thicken (I prefer to not bother chopping anything too much and just liquefy it all, which makes a thick green soup. If you don't have children who are squeamish about onions or peppers, you could just chop everything fine and leave it as is). Return meat to pot. Salt to taste.",
            "Use sugar to adjust heat--adding more sugar will take the edge off any heat (really, it's amazing). You can also adjust the heat by varying the ratio of Anaheims to Jalapenos, or substituting bell or hotter peppers."
        ],
    },
    {
        id: 11,
        title: "Pain au Chocolat/Croissants",
        img: "croissants.jpg",
        category: 'Other',
        ingredients: [
            {
                sectionIngredients: [
                    "1/4 cup (4 Tablespoons; 60g) unsalted butter, softened to room temperature",
                    "4 cups (500g) all-purpose flour (spoon and leveled), plus more for rolling/shaping",
                    "1/4 cup (50g) granulated sugar",
                    "2 teaspoons salt",
                    "1 Tablespoon active dry or instant yeast",
                    "1 and 1/2 cups (360ml) cold whole milk",
                    "one 4-ounce bar (113g) semi-sweet or bittersweet chocolate, coarsely chopped",
                    "optional: confectioners sugar for dusting"
                ]
            },
            {
                sectionHeading: 'Butter Layer',
                sectionIngredients: [
                    "1 and 1/2 cups (3 sticks; 345g) unsalted butter, softened to room temperature",
                    "2 Tablespoons (16g) all-purpose flour"
                ]
            },
            {
                sectionHeading: 'Egg Wash',
                sectionIngredients: [
                    "1 large egg",
                    "2 Tablespoons (30ml) whole milk"
                ]
            }
        ],
        steps: [
            "Make the dough: Cut the butter in four 1-Tablespoon slices and place in the bowl of an electric stand mixer fitted with the dough hook attachment. Add the flour, sugar, salt, and yeast. Turn the mixer on low-medium speed. Slowly pour in the milk. Beat the dough for at least 5 full minutes.",
            "Remove dough from the bowl and, with floured hands, work it into a ball. Gently flatten the dough out and cover with plastic wrap or aluminum foil. Place in the refrigerator for 30 minutes.",
            "Shape the dough: Roll dough into a 14x10-inch rectangle.",
            "Long rest: Allow the dough to rest in the refrigerator for 4 hours or overnight.",
            "Butter layer: Beat the butter and flour together until smooth and combined. Smooth out into a 7x10-inch rectangle. Chill for 30 minutes.",
            "Laminate the dough: Remove both the dough and butter layers from the refrigerator. Place the butter layer in the center of the dough and fold each end of the dough over it. On a lightly floured counter, roll the dough into a 10x20-inch rectangle.",
            "2nd turn: Roll the dough out once again into a 10x20-inch rectangle, then fold the dough lengthwise into thirds as if you were folding a letter. Refrigerate for 30 minutes.",
            "3rd turn: Roll the dough out once again into a 10x20-inch rectangle. Fold the dough lengthwise into thirds as if you were folding a letter.",
            "Long rest: Refrigerate for 4 hours or overnight. (Up to 24 hours is ok.)",
            "Shape the croissants: Roll the dough out into an 8x20-inch rectangle. Slice the dough in half vertically. Cut 3 even slices horizontally. Cut each in half lengthwise so you have 16 2x5-inch rectangles. Stretch to be about 8 inches long. Place a few small pieces of chocolate in a single layer at one end and tightly roll the dough up around the chocolate. Allow to rest at room temperature.",
            "Preheat oven to 400°F",
            "Egg wash: Whisk the egg wash ingredients together. Brush each croissant lightly with egg wash.",
            "Bake the croissants: Bake until croissants are golden brown, about 20 minutes."
        ]
    },
    {
        id: 12,
        title: "Pomegranate Salsa",
        img: "salsa.jpg",
        category: 'Other',
        ingredients: [
            {
                sectionIngredients: [
                    "1 avocado, diced",
                    "1 tomato, diced",
                    "2 tbsp chopped onion (or more)",
                    "1 tbsp lime juice (preferably fresh)",
                    "1/2 tsp accent (or another 1/2 tsp salt)",
                    "⅛ tsp cayenne pepper",
                    "1/4 tsp ground coriander",
                    "1/2 tsp salt",
                    "Seeds from one pomegranate"
                ]
            }
        ],

        steps: [
            "Mix lime juice with dry ingredients, then mix in with the rest.",
            "One recipe is quite small--you can double it and still only use 1 pomegranate."
        ],
    }

]


export default mock;
