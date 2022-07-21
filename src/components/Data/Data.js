  const categoriesPreview = [
        {
            title: "Italian",
            image: "/assets/images/categories/categoriesImg/Italian.png",
            description:"Italian cuisine is among the oldest in the world, and the variations between each of its regions can be seen in the recipes that have been handed down from one generation to the next. The majority of their dishes use only traditional ingredients, but some, like pizza or pasta, have been updated to better suit our contemporary tastes. Italian food is known for its freshness. The most often prepared meals in this culinary style are always delightfully fresh, displaying their sophisticated flavour with each bite.",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Italian.jpg",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FItalian2.jpg?alt=media&token=554aaf3d-6f5d-41f5-801f-5434d94cb491",

        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Baked Shrimp Scampi",
            option2:"Baked Penne with Roasted Vegetables",}, 
        {
            title: "Halal",
            image: "/assets/images/categories/categoriesImg/Halal.png",
            description:"description on Halal",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FHalal2.jpg?alt=media&token=2e7d3eea-7b15-4732-a073-6f6d352d1312",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Halal.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Shakshuka with chickpeas",
            option2:"Italian garden veggie soup",},
        {
            title: "Chinese",
            image: "/assets/images/categories/categoriesImg/Chinese.png",
            description:"Chinese cuisine has a long history, and is one of the Chinese cultural treasures. It is as famous all over the world as French and Turkic cuisines. Chinese cookery has developed and matured over the centuries, forming a rich cultural content. It is characterized by fine selection of ingredients, precise processing, particular care to the amount of fire, and substantial nourishment. ",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Chinese.jpg",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FChinese2.jpg?alt=media&token=e8892b21-443e-456f-8a04-55f5a3ceed43",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Cold soba and shrimp fritter bento",
            option2:"Extreme Green Salad",},
        {
            title: "Middle-Eastern",
            image: "/assets/images/categories/categoriesImg/Middle_Eastern.png",
            description:"Middle Eastern cuisine includes dishes found in Syria, Egypt, Iraq, Saudi Arabia and Lebanon as well as dishes traditionally associated with Bedouins. Most of the meat dishes are made with mutton, lamb, chicken, goat or camel meat. ",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FMiddle_Eastern2.jpg?alt=media&token=5fbf49da-360f-4479-8052-ec34218c02ee",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Middle_Eastern.jpg",
            
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Vegetable Stock",
            option2:"Apple Carrot Salad",},
        {
            title: "Vegan",
            image: "/assets/images/categories/categoriesImg/Vegetarian.png",
            description:"Veganism is a type of vegetarian diet that excludes meat, eggs, dairy products, and all other animal-derived ingredients. Many vegans also do not eat foods that are processed using animal products, such as refined white sugar and some wines. ",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FVegetarian2.jpg?alt=media&token=2d60097e-bd57-4ebd-bba5-a09d94692590",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Vegetarian.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Mini Tostadas",
            option2:"Caprese Skewers",},
        {
            title: "Desserts",
            image: "/assets/images/categories/categoriesImg/Desserts.png",
            description:"Desserts can be defined as a usually sweeter course that concludes a meal. This definition includes a range of courses ranging from fruits or dried nuts to multi-ingredient cakes and pies. Many cultures have different variations of dessert.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FDesserts2.jpg?alt=media&token=4d60085b-a102-4354-ae8b-a7301fd748b1",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Desserts.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Greek yogurt with homemade honeycomb",
            option2:"Frozen chocolate mousse trifles",}, 
            
            {
            title: "Smoothies",
            image: "/assets/images/categories/categoriesImg/Smoothie.png",
            description:"Smoothies are thick, creamy beverages usually blended from puréed fruits, vegetables, juices, yogurt, nuts, seeds, and/or dairy or nondairy milk. The most basic smoothie starts with two essential ingredients — a base and a liquid. From there, you can combine ingredients to your liking.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FSmoothie2.jpg?alt=media&token=c2de88e6-f6cb-441d-b733-e8a1b00d4402",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Smoothie.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"PB&J smoothie",
            option2:"Sweet Almond Date Smoothie",},
        {
            title: "Breakfasts",
            image: "/assets/images/categories/categoriesImg/Breakfast.png",
            description:"Breakfast is the first meal of the day usually eaten in the morning. The word in English refers to breaking the fasting period of the previous night. Various 'typical' or 'traditional' breakfast menus exist, with food choices varying by regions and traditions worldwide.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FBreakfast2.jpg?alt=media&token=e2d4038a-5e7f-4a01-a6a4-5da75ae4d3ef",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Breakfast.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Best Oatmeal Ever",
            option2:"Open face egg and tomato sandwich",},
        {
            title: "Thai",
            image: "/assets/images/categories/categoriesImg/Thai.png",
            description:"Thai cuisine is a type of Asian cuisine that is traditionally famous for its exotic taste of spices, combined with sweet and sour. Several distinct tastes dominate the dishes of this extravagant cuisine - sour, sweet, bitter, salty and spicy. ",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FThai2.jpg?alt=media&token=a0700ec1-9ac2-4097-a370-2198101c0c55",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Thai.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Spicy sauteed kale with lemon",
            option2:"Thai Vegetable Stir-fry",},
        {
            title: "Greek",
            image: "/assets/images/categories/categoriesImg/Greek.png",
            description:" Like other Mediterranean cuisines, Greek food has a reputation for being heart healthy with its heavy use of olive oil, fish, lean meats, vegetables, herbs and grain, although some dishes can be quite rich, like the classic moussaka – a hearty dish made of layers of lamb and eggplant, smothered in béchamel sauce and cheese",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FGreek2.jpg?alt=media&token=4f51203f-e312-4294-9229-33ef97c6ed6c",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Greek.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Tomato Basil Soup",
            option2:"Onion Pie",},
        {
            title: "Bakery",
            image: "/assets/images/categories/categoriesImg/Bakery.png",
            description:"Baking is one of the most delicate culinary arts, which requires careful and precise measurements, ingredients, cooking temperatures, and techniques. Although the fine balancing act of baking is intimidating to some, any home cook can become a master baker with the right ingredients and baking supplies, a little patience, and reliable recipes.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FBakery2.jpg?alt=media&token=84850de8-38a6-4f66-84f7-f0cc2c7bb3ca",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Bakery.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Flaky Buttermilk Biscuits",
            option2:"Raspberry-lemon thumbprint cookies",},
        {
            title: "Mexican",
            image: "/assets/images/categories/categoriesImg/Mexican.png",
            description:"Mexican Cuisine is a nice blend of the indigenous and Spanish cuisine. It is still based in beans, corn, tortillas, and chile peppers, but these are now usually served with some sort of meat and cheese. Most dishes come with some sort of rice and spices as well, a clear nod to the European influence.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FMexican2.jpg?alt=media&token=d2a9793a-11ba-43af-9666-2928e7ea2d41",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Mexican.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Mexican Ensalada",
            option2:"Guacamole",},
        {
            title: "Vietnamese",
            image: "/assets/images/categories/categoriesImg/Vietnamese.png",
            description:"Vietnamese cuisine is known for using fish sauce, soy sauce, rice, fresh fruits and vegetables and herbs and spices including lemon grass, lime and kaffir lime leaves. Throughout all regions of Vietnam, the emphasis is always on serving fresh vegetables and herbs as side dishes along with dipping sauce.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FVietnamese2.jpg?alt=media&token=22e3aacf-fc12-429b-8a4a-0b4754e16f17",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Vietnamese.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Sweet and Spicy Tofu with Jasmine Rice and Crispy Shallot",
            option2:"Vegetarian Steamed Dumplings",},
        {
            title: "BBQ",
            image: "/assets/images/categories/categoriesImg/BBQ.png",
            description:"Barbecue or barbeque (informally BBQ in the UK, US, and Canada, barbie in Australia and braai in South Africa) is a term used with significant regional and national variations to describe various cooking methods that use live fire and smoke to cook the food.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FBBQ2.jpg?alt=media&token=faf543ed-6333-4ff6-a5e2-674e8dd7f461",
            thumbnail: "/assets/images/categories/categoriesThumbnail/BBQ.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",},
        {
            title: "Gluten-Friendly",
            image: "/assets/images/categories/categoriesImg/Gluten-Friendly.png",
            description:"A gluten-free diet is an eating plan that excludes foods containing gluten. Gluten is a protein found in wheat, barley, rye and triticale.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FGluten-Friendly2.jpg?alt=media&token=f6d4468f-c109-480f-8d9d-641256ccc3fe",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Gluten-Friendly.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",
        },
        {
            title: "Sandwiches",
            image: "/assets/images/categories/categoriesImg/Sandwiches.png",
            description:"A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FSandwiches2.jpg?alt=media&token=7c8c09a4-9159-4a93-aeba-3e6d66d14aac",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Sandwiches.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Smoky white bean and arugula panini",
            option2:"Tofu Cuban sandwiches",
        },
        {
            title: "French",
            image: "/assets/images/categories/categoriesImg/French.png",
            description:"French Cuisine is a heavenly amalgamation of culture, tradition, sophistication and, perhaps above all, a love for food. The French look beyond the ingredients and techniques that go into creating a rich blend of flavors. It has to also be considered as a way of life.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FFrench2.jpg?alt=media&token=050336a1-0a8e-409a-84df-d9fcd1d5bee9",
            thumbnail: "/assets/images/categories/categoriesThumbnail/French.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"French toast popcorn seasoning",
            option2:"French onion soup",
        },
        {
            title: "Indian",
            image: "/assets/images/categories/categoriesImg/Indian.png",
            description:"Indian cuisine consists of a variety of regional and traditional cuisines native to India. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.Indian food is also heavily influenced by religion, in particular Hinduism and Islam, cultural choices and traditions.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FIndian2.jpg?alt=media&token=7d1eef60-d03c-411d-8f37-ba4a16c1cb1a",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Indian.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Indian Chickpea Wrap",
            option2:"Vadouvan curry spice blend",
        },
        {
            title: "Chicken",
            image: "/assets/images/categories/categoriesImg/Chicken.png",
            description:"Chicken is the most common type of poultry in the world.[1] Owing to the relative ease and low cost of raising chickens—in comparison to mammals such as cattle or hogs—chicken meat (commonly called just 'chicken') and chicken eggs have become prevalent in numerous cuisines. Chicken can be prepared in a vast range of ways, including baking, grilling, barbecuing, frying, and boiling. Since the latter half of the 20th century, prepared chicken has become a staple of fast food",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FChicken2.jpg?alt=media&token=d50d4d53-4d06-4e01-a352-491ce6d2c263",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Chicken.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Oregano Marinated Chicken",
            option2:"Seitan and three-color pepper stir-fry bento",
        }
        ,
        {
            title: "Cheap",
            image: "/assets/images/categories/categoriesImg/Offers_2.png",
            description:"Here are Face Your Food favpurite cheap options! Definitely give it a try!",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FOffers_22.jpg?alt=media&token=b924128c-53ee-4bc3-9c96-6e5eade8121a",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Offers_2.png",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Spaetzle",
            option2:"Creamy ranch dressing",
        },
        {
            title: "Japanese",
            image: "/assets/images/categories/categoriesImg/Japanese.png",
            description:"eJapanese cuisine encompasses the regional and traditional foods of Japan, which have developed through centuries of political, economic, and social changes. The traditional cuisine of Japan is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients. Side dishes often consist of fish, pickled vegetables, and vegetables cooked in broth. Seafood is common, often grilled, but also served raw as sashimi or in sushi. ",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FJapanese2.jpg?alt=media&token=572b5639-7af4-4be1-8583-a6c66adb921a",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Japanese.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Smoked Salmon Ebelskivers",
            option2:"Popeye's Muscle Salad",
        },
        {
            title: "Pizza",
            image: "/assets/images/categories/categoriesImg/Pizza.png",
            description:"Pizza is full of umami, which means “delicious” in Japanese. Just like the other types of taste, which are sweet, sour, salty, and bitter, umami is a rich and savory flavor that your taste buds taste and recognize",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FPizza2.jpg?alt=media&token=0894077e-b832-4ede-a8a5-acb181e654cb",
            thumbnail: "/assets/images/categories/another/Pizza.jpg",
            aadjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Veggie Pizza",
            option2:"Mediterranean Patio Pizza",
        }

    ].sort(() => Math.random() - 0.5)

 const categoriesOpt = [
    
                
    "italian",
    "halal",
    "chinese",
    "middle-eastern",
    "vegan",
    "desserts",
    "smoothies",
    "breakfasts", 
    "thai",
    "greek",
    "bakery",
    "mexican",
    "vietnamese",
    "bbq",
    "gluten-friendly",
    "sandwiches",
    "french",
    "indian",
    "chicken",
    "cheap",
    "japanese",
    "pizza",

    ]

    export { categoriesPreview,categoriesOpt };

