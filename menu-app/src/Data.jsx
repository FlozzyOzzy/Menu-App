import Pancakes from '/src/assets/images/pancakes.png';  
import Coffee from '/src/assets/images/coffee.png';  
import FullBreakfast from '/src/assets/images/full breakfast.png';  
import PastaLunch from '/src/assets/images/lunch pasta.png';  
import Steak from '/src/assets/images/steak.png';  
import FriesLunch from '/src/assets/images/fries lunch.png';  
import Salad from '/src/assets/images/salad.png';  
import PastaDinner from '/src/assets/images/pasta dinner.png';  
import Noodles from '/src/assets/images/noodles.png';  


const menu = [
    {
        id: 1,
        title: 'Buttermilk Pancakes',
        category: 'Breakfast',
        price: 15 ,
        img: Pancakes, 
        desc: `Pancakes are the hero of the breakfast table and their very taste can even be described as
         “deeply breakfasty”. These fluffy stacks with crisped edges, dripping with maple syrup, are everything you want, 
         exactly when you want them.`,
    },

    {
        id: 2,
        title: 'Coffee and Croissant',
        category: 'Breakfast',
        price: 20,
        img: Coffee,
        desc:`An indulgent coffee pastry cream topped with whipped cream which brings all the lovely and comforting 
        flavours and aromatic notes of cappuccino, and a mini-all-butter-flaky croissant that you can dip in the silky cream.`,
    },

    {
        id: 3,
        title: 'Full Breakfast',
        category: 'Breakfast',
        price: 50,
        img: FullBreakfast,
        desc: `Main plate of a typical full English breakfast, 
        consisting of bacon, fried egg, sausage, mushrooms, baked beans, hash brown and grilled tomatoes. The typical 
        ingredients are bacon, sausages, eggs, black pudding, baked beans, tomatoes, mushrooms, and fried bread or toast, served with coffee or tea.`, 
    },

    {
        id: 4,
        title: 'Pasta',
        category: 'Lunch',
        price: 30,
        img: PastaLunch,
        desc: `Indulge in our delicious, freshly made pasta, crafted to perfection. Each strand is cooked al dente, 
        offering a delicate balance of tenderness and firmness. The pasta is infused with rich flavors, complementing a variety of sauces—from a classic, 
        robust marinara to a creamy Alfredo that melts in your mouth. Paired with fresh herbs, premium olive oil, and hand-picked ingredients,`,
    },

    {
        id: 5,
        title: 'Steak and Asparagus',
        category: 'Lunch',
        price: 45,
        img: Steak,
        desc: `Savor the taste of our perfectly grilled, tender steak, seasoned with a blend of spices to enhance its natural flavors. 
        Each juicy, succulent cut is seared to your preference, locking in the rich, smoky essence. 
        Paired with a side of vibrant, crisp asparagus, lightly seasoned and grilled to perfection, the dish is a well-rounded, mouthwatering dining experience.`,
    },

    {
        id: 6,
        title: 'Fries and Burger',
        category: 'Lunch',
        price: 25,
        img: FriesLunch,
        desc: `Experience the ultimate comfort food with our juicy, perfectly grilled burger, layered with melted cheese, fresh lettuce,
         ripe tomatoes, and crispy onions, all sandwiched between a soft, toasted bun.
        Served alongside a generous portion of golden, crispy fries—lightly salted and irresistibly crunchy—this combo is a timeless favorite.`,
    },

    {
        id: 7,
        title: 'Salad',
        category: 'Dinner',
        price: 50,
        img: Salad,
        desc: `Our fresh garden salad is a vibrant and refreshing mix of crisp lettuce, juicy tomatoes, crunchy cucumbers, and 
        thinly sliced red onions. Tossed with crunchy carrots, sweet bell peppers, and a sprinkle of fresh herbs. It is 
        topped with your choice of a light vinaigrette, creamy dressing, or olive oil with a dash of balsamic glaze. 
        For an added touch of flavor, enjoy optional extras like crumbled feta, avocado slices, or toasted nuts.`,
    },

    {
        id: 8,
        title: 'Pasta and Prawns',
        category: 'Dinner',
        price: 60,
        img: PastaDinner,
        desc: `The dish features tender, juicy prawns sautéed in garlic, olive oil, and a hint of chili. 
        Tossed with freshly cooked pasta, the prawns are bathed in a light, flavorful sauce, enhanced with fresh herbs 
        like basil and parsley. A touch of lemon zest adds a bright, refreshing finish.`,
    },

    {
        id: 9,
        title: 'Noodles',
        category: 'Dinner',
        price: 30,
        img: Noodles,
        desc: `Our stir-fried noodles are a delightful mix of chewy, savory noodles tossed with fresh vegetables and your choice of protein, 
        all stir-fried to perfection. Infused with aromatic garlic, ginger, and soy sauce, each bite bursts with bold, flavorful goodness. 
        The dish is balanced with crisp veggies like bell peppers, carrots, and bok choy.`,
    },
]

export default menu;