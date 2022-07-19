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
            option1:"",
            option2:"",}, 
        {
            title: "Halal",
            image: "/assets/images/categories/categoriesImg/Halal.png",
            description:"description on Halal",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FHalal2.jpg?alt=media&token=2e7d3eea-7b15-4732-a073-6f6d352d1312",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Halal.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",},
        {
            title: "Chinese",
            image: "/assets/images/categories/categoriesImg/Chinese.png",
            description:"description on Chinese",
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
            description:"description on Middle Eastern",
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
            description:"description on Vegan",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FVegetarian2.jpg?alt=media&token=2d60097e-bd57-4ebd-bba5-a09d94692590",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Vegetarian.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",},
        {
            title: "Desserts",
            image: "/assets/images/categories/categoriesImg/Desserts.png",
            description:"description on Desserts",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FDesserts2.jpg?alt=media&token=4d60085b-a102-4354-ae8b-a7301fd748b1",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Desserts.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"Greek yogurt with homemade honeycomb",
            option2:"Frozen chocolate mousse trifles",}, {
            title: "Smoothies",
            image: "/assets/images/categories/categoriesImg/Smoothie.png",
            description:"description on Smoothies",
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
            description:"description on breakfasts",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FBreakfast2.jpg?alt=media&token=e2d4038a-5e7f-4a01-a6a4-5da75ae4d3ef",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Breakfast.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",},
        {
            title: "Thai",
            image: "/assets/images/categories/categoriesImg/Thai.png",
            description:"description on Thai",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FThai2.jpg?alt=media&token=a0700ec1-9ac2-4097-a370-2198101c0c55",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Thai.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",},
        {
            title: "Greek",
            image: "/assets/images/categories/categoriesImg/Greek.png",
            description:"description on Greek",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FGreek2.jpg?alt=media&token=4f51203f-e312-4294-9229-33ef97c6ed6c",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Greek.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",},
        {
            title: "Bakery",
            image: "/assets/images/categories/categoriesImg/Bakery.png",
            description:"Baking is one of the most delicate culinary arts, which requires careful and precise measurements, ingredients, cooking temperatures, and techniques. Although the fine balancing act of baking is intimidating to some, any home cook can become a master baker with the right ingredients and baking supplies, a little patience, and reliable recipes.",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FBakery2.jpg?alt=media&token=84850de8-38a6-4f66-84f7-f0cc2c7bb3ca",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Bakery.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",},
        {
            title: "Mexican",
            image: "/assets/images/categories/categoriesImg/Mexican.png",
            description:"description on mexican",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FMexican2.jpg?alt=media&token=d2a9793a-11ba-43af-9666-2928e7ea2d41",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Mexican.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",},
        {
            title: "Vietnamese",
            image: "/assets/images/categories/categoriesImg/Vietnamese.png",
            description:"description on vietnamese",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FVietnamese2.jpg?alt=media&token=22e3aacf-fc12-429b-8a4a-0b4754e16f17",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Vietnamese.jpg",
        adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",},
        {
            title: "BBQ",
            image: "/assets/images/categories/categoriesImg/BBQ.png",
            description:"description on BBQ",
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
            description:"description on Gluten-Friendly",
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
            description:"description on Sandwiches123",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FSandwiches2.jpg?alt=media&token=7c8c09a4-9159-4a93-aeba-3e6d66d14aac",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Sandwiches.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",
        },
        {
            title: "French",
            image: "/assets/images/categories/categoriesImg/French.png",
            description:"description on French",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FFrench2.jpg?alt=media&token=050336a1-0a8e-409a-84df-d9fcd1d5bee9",
            thumbnail: "/assets/images/categories/categoriesThumbnail/French.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",
        },
        {
            title: "Indian",
            image: "/assets/images/categories/categoriesImg/Indian.png",
            description:"description on Indian",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FIndian2.jpg?alt=media&token=7d1eef60-d03c-411d-8f37-ba4a16c1cb1a",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Indian.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",
        },
        {
            title: "Chicken",
            image: "/assets/images/categories/categoriesImg/Chicken.png",
            description:"description on Chicken",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FChicken2.jpg?alt=media&token=d50d4d53-4d06-4e01-a352-491ce6d2c263",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Chicken.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",
        }
        ,
        {
            title: "Cheap",
            image: "/assets/images/categories/categoriesImg/Offers_2.png",
            description:"description on Cheap",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FOffers_22.jpg?alt=media&token=b924128c-53ee-4bc3-9c96-6e5eade8121a",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Offers_2.png",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),
            option1:"",
            option2:"",
        },
        {
            title: "Japanese",
            image: "/assets/images/categories/categoriesImg/Japanese.png",
            description:"description on Japanese",
            display1: "https://firebasestorage.googleapis.com/v0/b/seg3125-fyf.appspot.com/o/Images%2FDisplay%2FJapanese2.jpg?alt=media&token=572b5639-7af4-4be1-8583-a6c66adb921a",
            thumbnail: "/assets/images/categories/categoriesThumbnail/Japanese.jpg",
            adjective:[
                "Amazing", "Great","Sweet","Phenomenal"
            ].sort(()=> Math.random()-0.5),option1:"",
            option2:"",
        },
        {
            title: "Pizza",
            image: "/assets/images/categories/categoriesImg/Pizza.png",
            description:"description on Pizza",
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

