import type {
  Address,
  Category,
  InputOrder,
  Product,
  TreeNode,
  User,
  UserProfile,
} from '@/types';

// ---------- User ----------
export const newUser: User = {
  firstName: '',
  lastName: '',
  email: '',
};

export const user1: User = {
  firstName: 'Michael',
  lastName: 'Jackson',
  email: 'mjackson@gmail.com',
};

// ---------- Address ----------
export const newAddress: Address = {
  street: '',
  city: '',
  state: '',
  zip: '',
};

export const address1: Address = {
  street: '123 Main St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94111',
};

// ---------- UserProfile ----------
export const newUserProfile: UserProfile = {
  user: newUser,
  address: newAddress,
};

export const userProfile1: UserProfile = {
  user: user1,
  address: address1,
};

// ---------- Categories ----------
export const categoryMap = new Map<string, Category>([
  [
    'clothing',
    {
      id: 'clothing',
      name: 'Clothing',
      photo:
        'https://images.unsplash.com/photo-1619473792839-1d3b0355a7c8?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'shoes',
    {
      id: 'shoes',
      name: 'Shoes',
      photo:
        'https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'jewelry',
    {
      id: 'jewelry',
      name: 'Jewelry',
      photo:
        'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'watches',
    {
      id: 'watches',
      name: 'Watches',
      photo:
        'https://images.unsplash.com/photo-1451290173668-9a14beaf714c?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'electronics',
    {
      id: 'electronics',
      name: 'Electronics',
      photo:
        'https://images.unsplash.com/photo-1588459460688-561668329db5?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'music',
    {
      id: 'music',
      name: 'Music',
      photo:
        'https://images.unsplash.com/photo-1458560871784-56d23406c091?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'games',
    {
      id: 'games',
      name: 'Games',
      photo:
        'https://images.unsplash.com/photo-1635372730136-06b29022281c?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'sports',
    {
      id: 'sports',
      name: 'Sports',
      photo:
        'https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'books',
    {
      id: 'books',
      name: 'Books',
      photo:
        'https://images.unsplash.com/photo-1525972385596-02ad3049150b?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'luggage',
    {
      id: 'luggage',
      name: 'Luggage',
      photo:
        'https://images.unsplash.com/photo-1581364101929-bd09d423e738?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'toys',
    {
      id: 'toys',
      name: 'Toys',
      photo:
        'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'groceries',
    {
      id: 'groceries',
      name: 'Groceries',
      photo:
        'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
]);

// ---------- Products ----------
export const productMap = new Map<string, Product>([
  [
    'grace-karnes-womens-casual-pants',
    {
      id: 'grace-karnes-womens-casual-pants',
      categoryId: 'clothing',
      name: 'Grace Karnes Womens Casual Pants',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Grace Karnes',
      price: 45.68,
      photo:
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'vito-Willy-mens-polo-shirt',
    {
      id: 'vito-Willy-mens-polo-shirt',
      categoryId: 'clothing',
      name: 'Vito & Willy Mens Polo Shirt',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Vito & Willy',
      price: 25.74,
      photo:
        'https://images.unsplash.com/photo-1586363090844-099253d6a1cb?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'levis-mens-jacket',
    {
      id: 'levis-mens-jacket',
      categoryId: 'clothing',
      name: "Levi's Men's Jacket",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: "Levi's",
      price: 48.99,
      photo:
        'https://images.unsplash.com/photo-1613869810108-70f9fe0cdef5?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'levis-womens-denim-shirt',
    {
      id: 'levis-womens-denim-shirt',
      categoryId: 'clothing',
      name: "Levi's Women's Denim Shirt",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: "Levi's",
      price: 35.98,
      photo:
        'https://images.unsplash.com/photo-1610659775956-308c9951bca9?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'levis-mens-denim-shirt',
    {
      id: 'levis-mens-denim-shirt',
      categoryId: 'clothing',
      name: "Levi's Men's Denim Shirt",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: "Levi's",
      price: 35.98,
      photo:
        'https://images.unsplash.com/photo-1573662073208-1f58a071c756?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'levis-womens-denim-jumper',
    {
      id: 'levis-womens-denim-jumper',
      categoryId: 'clothing',
      name: "Levi's Women's Denim Jumper",
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: "Levi's",
      price: 65.81,
      photo:
        'https://images.unsplash.com/photo-1609324120004-364275e0ad05?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'nike-air',
    {
      id: 'nike-air',
      categoryId: 'shoes',
      name: 'Nike Air',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Nike',
      price: 75.99,
      photo:
        'https://images.unsplash.com/photo-1543508282-5c1f427f023f?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'nike-ktyc',
    {
      id: 'nike-ktyc',
      categoryId: 'shoes',
      name: 'Nike KTYC',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Nike',
      price: 88.3,
      photo:
        'https://images.unsplash.com/photo-1584386450584-c6d766612a45?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'nike-x-90',
    {
      id: 'nike-x-90',
      categoryId: 'shoes',
      name: 'Nike X-90',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Nike',
      price: 55.7,
      photo:
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'pink-flamenco',
    {
      id: 'pink-flamenco',
      categoryId: 'shoes',
      name: 'Pink Flamenco',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Flamenco Shoes',
      price: 125.99,
      photo:
        'https://images.unsplash.com/photo-1499013819532-e4ff41b00669?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'adidas-stan-smith',
    {
      id: 'adidas-stan-smith',
      categoryId: 'shoes',
      name: 'Adidas Stan Smith',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Adidas',
      price: 64.37,
      photo:
        'https://images.unsplash.com/photo-1583492265212-d6c55d18a0c0?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'adidas-ultra-boost',
    {
      id: 'adidas-ultra-boost',
      categoryId: 'shoes',
      name: 'Adidas Ultra Boost',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Adidas',
      price: 50.99,
      photo:
        'https://images.unsplash.com/photo-1523314399-837f3e0c291b?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'gold-flower-pendant',
    {
      id: 'gold-flower-pendant',
      categoryId: 'jewelry',
      name: 'Gold Flower Pendant',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Maria Lucia',
      price: 150,
      photo:
        'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'diamond-pendant',
    {
      id: 'diamond-pendant',
      categoryId: 'jewelry',
      name: 'Diamond Pendant',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Maria Lucia',
      price: 399,
      photo:
        'https://images.unsplash.com/photo-1589128530087-c6f0ce071eea?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'square-pendant-with-silver-chain',
    {
      id: 'square-pendant-with-silver-chain',
      categoryId: 'jewelry',
      name: 'Square Pendant with Silver Chain',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Maria Lucia',
      price: 250,
      photo:
        'https://images.unsplash.com/photo-1588444968576-f8fe92ce56fd?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'egyptian-bronze-necklace',
    {
      id: 'egyptian-bronze-necklace',
      categoryId: 'jewelry',
      name: 'Egyptian Bronze Necklace',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Maria Lucia',
      price: 450,
      photo:
        'https://images.unsplash.com/photo-1620441090373-f6977a23fa0b?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'his-and-her-wedding-bands',
    {
      id: 'his-and-her-wedding-bands',
      categoryId: 'jewelry',
      name: 'His & Her Wedding Bands',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Maria Lucia',
      price: 325,
      photo:
        'https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'sappire-ring',
    {
      id: 'sappire-ring',
      categoryId: 'jewelry',
      name: 'Sappire Ring',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Maria Lucia',
      price: 490,
      photo:
        'https://images.unsplash.com/photo-1586104237516-5b7075e00d45?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'gold-ring-with-diamond',
    {
      id: 'gold-ring-with-diamond',
      categoryId: 'jewelry',
      name: 'Gold Ring with Diamond',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Maria Lucia',
      price: 750,
      photo:
        'https://images.unsplash.com/photo-1567523977592-7959bc5df51e?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'blue-stone-and-diamond-rings',
    {
      id: 'blue-stone-and-diamond-rings',
      categoryId: 'jewelry',
      name: 'Blue Stone & Diamond Rings',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Maria Lucia',
      price: 700,
      photo:
        'https://images.unsplash.com/photo-1543295204-2ae345412549?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'gold-tiara',
    {
      id: 'gold-tiara',
      categoryId: 'jewelry',
      name: 'Gold Tiara',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Maria Lucia',
      price: 999,
      photo:
        'https://images.unsplash.com/photo-1588163307392-ce5223f593d0?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'pierre-ricaud-watch',
    {
      id: 'pierre-ricaud-watch',
      categoryId: 'watches',
      name: 'Pierre Ricaud',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Pierre Ricaud',
      price: 1000,
      photo:
        'https://images.unsplash.com/photo-1451290173668-9a14beaf714c?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'breitling-1884-chronometer',
    {
      id: 'breitling-1884-chronometer',
      categoryId: 'watches',
      name: 'Breitling 1884 Chronometer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Breitling',
      price: 1000,
      photo:
        'https://images.unsplash.com/photo-1548171838-1fd4cb4ab854?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'fossil-10-atm',
    {
      id: 'fossil-10-atm',
      categoryId: 'watches',
      name: 'Fossil 10 ATM',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Fossil',
      price: 300,
      photo:
        'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'empro-armai-watch',
    {
      id: 'empro-armai-watch',
      categoryId: 'watches',
      name: 'Empro Armai',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Empro Armai',
      price: 100,
      photo:
        'https://images.unsplash.com/photo-1624106159879-8a16d53c54ff?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'rolex-air-king',
    {
      id: 'rolex-air-king',
      categoryId: 'watches',
      name: 'Rolex Air-King',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Rolex',
      price: 5000,
      photo:
        'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'festina-watch',
    {
      id: 'festina-watch',
      categoryId: 'watches',
      name: 'Festina',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Festina',
      price: 300,
      photo:
        'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&h=450&fit=crop&crop=entropy',
    },
  ],
  [
    'apple-imac',
    {
      id: 'apple-imac',
      categoryId: 'electronics',
      name: 'iMac',
      description:
        'The 27‑inch iMac is packed with powerful tools and apps that let you take any idea to the next level. Its superfast processors and graphics, massive memory, and all-flash storage can tackle any workload with ease. And with its advanced audio and video capabilities and stunning 5K Retina display, everything you do is larger than life.',
      manufacturer: 'Apple',
      price: 1299,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/apple-imac.jpg?alt=media&token=69d03695-d57d-4b1a-952c-909a21af9099',
    },
  ],
  [
    'apple-macbook-pro',
    {
      id: 'apple-macbook-pro',
      categoryId: 'electronics',
      name: 'MacBook Pro',
      description:
        'Designed for those who defy limits and change the world, the 16-inch MacBook Pro is by far the most powerful notebook Apple have ever made. With an immersive Retina display, superfast processors, advanced graphics, the largest battery capacity ever in a MacBook Pro, Magic Keyboard, and massive storage.',
      manufacturer: 'Apple',
      price: 699,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/apple-macbook-pro.jpg?alt=media&token=d2b1cf37-cfe0-4f20-adeb-eaeb472cedaa',
    },
  ],
  [
    'apple-ipad',
    {
      id: 'apple-ipad',
      categoryId: 'electronics',
      name: 'iPad',
      description:
        'Powerful. Easy to use. Versatile. The new iPad is designed for all the things you love to do. Work, play, create, learn, stay connected, and more. All at an incredible value.',
      manufacturer: 'Apple',
      price: 249,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/apple-ipad.jpg?alt=media&token=17ba3b67-5e54-4bf0-8dfb-afb2538355d2',
    },
  ],
  [
    'belkin-netcam',
    {
      id: 'belkin-netcam',
      categoryId: 'electronics',
      name: 'Belkin NetCam HD+ Wi-Fi Camera',
      description:
        "The Belkin NetCam HD+ delivers 720p HD live streaming video to your smartphone or tablet, letting you watch the action in your home from wherever you go. Equipped with a wide-angle glass lens, night vision, and secure Wi-Fi connectivity, the NetCam HD+ ensures you'll always be a part of what's happening at home.",
      manufacturer: 'Belkin',
      price: 99,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/belkin-netcam-hd%2B-wi-fi-camera.jpg?alt=media&token=26babba0-3765-4402-8336-facf19c07ca7',
    },
  ],
  [
    'fitbit-charge-hr',
    {
      id: 'fitbit-charge-hr',
      categoryId: 'electronics',
      name: 'Fitbit Charge HR',
      description:
        'Make every beat count with Charge HR—a high-performance wristband with automatic, continuous heart rate and activity tracking right on your wrist.',
      manufacturer: 'Fitbit',
      price: 136,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/fitbit-charge-hr.jpg?alt=media&token=ba217f84-6b73-4a45-8c41-eaf75242668f',
    },
  ],
  [
    'ring-video-doorbell-pro',
    {
      id: 'ring-video-doorbell-pro',
      categoryId: 'electronics',
      name: 'Ring Video Doorbell Pro',
      description:
        "Our wired doorbell camera with added security and style. Video Doorbell Pro brings you next-level features like enhanced dual-band wifi, color night vision, and built-in Alexa Greetings that answer the door for you when you're busy.",
      manufacturer: 'Ring',
      price: 249,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/ring-video-doorbell-pro.jpg?alt=media&token=91de25d4-813f-4341-9fec-cd8564ae4335',
    },
  ],
  [
    'august-smart-lock-pro',
    {
      id: 'august-smart-lock-pro',
      categoryId: 'electronics',
      name: 'August Smart Lock Pro',
      description:
        'The ultimate smart door upgrade for your home. August Smart Lock Pro takes any worry out of getting into your home. Use our top-rated app to control your door to unlock/lock, grant guest access, see who came and left, and let anyone in from anywhere.',
      manufacturer: 'August',
      price: 249,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/august-smart-lock-pro.jpg?alt=media&token=026b30c5-6b4f-4432-9e8e-5c0830274bee',
    },
  ],
  [
    'nest-learning-thermostat',
    {
      id: 'nest-learning-thermostat',
      categoryId: 'electronics',
      name: 'Nest Learning Thermostat',
      description:
        'The Nest Learning Thermostat automatically adapts as your life and the seasons change. Just use it for a week and it programs itself. With the Nest app, your thermostat lives on your wall and in your pocket. Once you connect your thermostat to Wi-Fi, you can control it from anywhere.',
      manufacturer: 'Nest',
      price: 249,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/nest-learning-thermostat.jpg?alt=media&token=afea31e6-611e-4ec4-a2fe-6cb9928ab997',
    },
  ],
  [
    'nest-protect',
    {
      id: 'nest-protect',
      categoryId: 'electronics',
      name: 'Nest Protect Smoke + Carbon Monoxide Alarm',
      description:
        'There’s never been a smoke and CO alarm quite like this. Nest Protect looks for fast-burning fires, smoldering fires, and carbon monoxide. It speaks up when there’s a problem and can send a message to your phone if you’re not at home. And it helps keep you safe and sound for up to a decade.',
      manufacturer: 'Nest',
      price: 249,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/nest-protect.jpg?alt=media&token=c36ef284-bd4b-4cfb-90e2-1fd5e59417d3',
    },
  ],
  [
    'google-chromecast-audio',
    {
      id: 'google-chromecast-audio',
      categoryId: 'electronics',
      name: 'Google Chromecast Audio',
      description:
        "Stream your favorite music with Google Chromecast Audio. Simply plug into your speaker's auxiliary input and connect to your Wi-Fi network. Then just tap the Cast button from your favorite apps on your phone, tablet or computer to cast songs, radio stations and podcasts to your speaker.",
      manufacturer: 'Google',
      price: 35,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/google-chromecast-audio.jpg?alt=media&token=83800a2b-575a-4927-8c9c-2e16f25e87a9',
    },
  ],
  [
    'nest-secure',
    {
      id: 'nest-secure',
      categoryId: 'electronics',
      name: 'Nest Secure Alarm System Starter Pack',
      description:
        'Tough on bad guys. Easy on you. The Nest secure alarm system is easy to live with every day. Just tap Nest tag on Nest guard to arm and disarm the alarm – no pass code needed. Nest detect sensors look out for doors, windows and rooms. And with the Nest app, you’ll always know what’s happening at home.',
      manufacturer: 'Nest',
      price: 499,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/nest-secure.jpg?alt=media&token=4dc8e77b-e94e-416c-ad6c-3182397264a6',
    },
  ],
  [
    'sonos-play1',
    {
      id: 'sonos-play1',
      categoryId: 'electronics',
      name: 'Sonos PLAY:1 Smart Wireless Speaker',
      description:
        'Small yet powerful speaker for streaming music and more. Get rich, room-filling sound with Play:1, and control it with the Sonos app.',
      manufacturer: 'Sonos',
      price: 149,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/sonos-play1.jpg?alt=media&token=9e04f562-5d11-4b0d-a5d2-7c7c40137fc6',
    },
  ],
  [
    'dyson-cordless-vacuum',
    {
      id: 'dyson-cordless-vacuum',
      categoryId: 'electronics',
      name: 'Dyson Cordless Vacuum',
      description:
        'For cord-free cleaning with twice the suction of any other cordless stick vacuum cleaner.',
      manufacturer: 'Dyson',
      price: 175,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/dyson-cordless-vacuum.jpg?alt=media&token=0ca780cf-475f-4d82-8486-5ae36696421f',
    },
  ],
  [
    'gopro-hero',
    {
      id: 'gopro-hero',
      categoryId: 'electronics',
      name: 'GoPro HERO Session Action Camera',
      description:
        'HERO Session packs the power of GoPro into a convenient, grab-and-go, everyday camera. Perfect for the first-time GoPro user, or as a second camera, HERO Session is simple and easy to use. A single button powers on the camera and starts recording automatically, then when you stop recording, the camera powers itself off.',
      manufacturer: 'GoPro',
      price: 149,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/gopro-hero.jpg?alt=media&token=22e54972-b834-4319-be7c-f1d046e7487f',
    },
  ],
  [
    'google-home-mini',
    {
      id: 'google-home-mini',
      categoryId: 'electronics',
      name: 'Google Home Mini',
      description:
        'Google Home Mini is a smart speaker powered by the Google Assistant, so you can ask it questions and tell it to do things. Just start with "Ok Google" to enjoy your entertainment, get answers from Google, and control your smart home.',
      manufacturer: 'Google',
      price: 29,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/google-home-mini.jpg?alt=media&token=af98464b-f994-4473-b96b-7549c375b6c1',
    },
  ],
  [
    'canon-eos-rebel',
    {
      id: 'canon-eos-rebel',
      categoryId: 'electronics',
      name: 'Canon EOS Rebel SL1',
      description:
        "As Canon's smallest and lightest digital SLR camera, the EOS Rebel SL1 is small in size but enormous in performance. With a newly-designed Canon 18.0 Megapixel CMOS (APS-C) sensor and speedy Canon DIGIC 5 Image Processor, it delivers images of extraordinary quality.",
      manufacturer: 'Canon',
      price: 403,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/canon-eos-rebel.jpg?alt=media&token=aaab2139-a9ba-4ac1-a9bc-a4902a84926c',
    },
  ],
  [
    'prince-purple-rain',
    {
      id: 'prince-purple-rain',
      categoryId: 'music',
      name: 'Purple Rain',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Prince and the Revolution',
      price: 22,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/prince-purple-rain.jpg?alt=media&token=4b9fbb28-6bc5-4671-8161-ad3cb7c02405',
    },
  ],
  [
    'norah-jones-come-away-with-me',
    {
      id: 'norah-jones-come-away-with-me',
      categoryId: 'music',
      name: 'Come Away With Me',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Norah Jones',
      price: 16,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/norah-jones-come-away-with-me.jpg?alt=media&token=cb74e53b-825b-4a05-a9fa-f4b2196382ae',
    },
  ],
  [
    'queen-a-night-at-the-opera',
    {
      id: 'queen-a-night-at-the-opera',
      categoryId: 'music',
      name: 'A Night at the Opera',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Queen',
      price: 12,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/queen-a-night-at-the-opera.jpg?alt=media&token=2401166b-bd77-4d67-8283-5d14bba55755',
    },
  ],
  [
    'charlie-puth-nine-track-mind',
    {
      id: 'charlie-puth-nine-track-mind',
      categoryId: 'music',
      name: 'Nine Track Mind',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Charlie Puth',
      price: 15,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/charlie-puth-nine-track-mind.jpg?alt=media&token=2653c277-c835-4491-a5a3-103cfdd09687',
    },
  ],
  [
    'florence-lungs',
    {
      id: 'florence-lungs',
      categoryId: 'music',
      name: 'Lungs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Florence + The Machine',
      price: 15,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/florence-%2B-the-machine-lungs.jpg?alt=media&token=5cbf5ef5-dd8e-41fc-915f-91c7281a2ac7',
    },
  ],
  [
    'meghan-trainor-thank-you',
    {
      id: 'meghan-trainor-thank-you',
      categoryId: 'music',
      name: 'Thank You',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Meghan Trainor',
      price: 8,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/meghan-trainor-thank-you.png?alt=media&token=17fabfa2-c463-4267-ac6d-3bfb13900ae2',
    },
  ],
  [
    'amy-winehouse-black-to-black',
    {
      id: 'amy-winehouse-black-to-black',
      categoryId: 'music',
      name: 'Black to Black',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Amy Winehouse',
      price: 13,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/amy-winehouse-back-to-black.jpg?alt=media&token=02ee1276-b219-460b-b7c8-747b4b6e7e93',
    },
  ],
  [
    'pharrell-williams-happy',
    {
      id: 'pharrell-williams-happy',
      categoryId: 'music',
      name: 'Happy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Pharrell Williams',
      price: 12,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/pharrell-williams-happy.jpg?alt=media&token=31cae736-5595-4e8c-b8ff-5d012b716464',
    },
  ],
  [
    'michael-buble-christmas',
    {
      id: 'michael-buble-christmas',
      categoryId: 'music',
      name: 'Christmas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Michael Buble',
      price: 9,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/michael-buble-christmas.jpg?alt=media&token=95dc387a-5940-454c-8185-07bbf8e2a394',
    },
  ],
  [
    'michael-jackson-thriller',
    {
      id: 'michael-jackson-thriller',
      categoryId: 'music',
      name: 'Thriller',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Michael Jackson',
      price: 20,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/michael-jackson-thriller.jpg?alt=media&token=39578013-19c5-4288-8369-e9b3c88fef20',
    },
  ],
  [
    'adele-21',
    {
      id: 'adele-21',
      categoryId: 'music',
      name: '21',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Adele',
      price: 19,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/adele-21.png?alt=media&token=ff2c5c85-bcd7-4273-8b92-1a1a596b885b',
    },
  ],
  [
    'bruno-mars-24k-magic',
    {
      id: 'bruno-mars-24k-magic',
      categoryId: 'music',
      name: '24K Magic',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Bruno Mars',
      price: 11,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/bruno-mars-24k-magic.jpg?alt=media&token=bd771b4b-0340-4901-bbd6-a8ac933624a2',
    },
  ],
  [
    'beatles-abbey-road',
    {
      id: 'beatles-abbey-road',
      categoryId: 'music',
      name: 'Abbey Road',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'The Beatles',
      price: 21,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/the-beatles-abbey-road.jpg?alt=media&token=ad5f89c5-0e5e-4162-9cca-50d41bae65c1',
    },
  ],
  [
    'pink-floyd-dark-side-of-the-moon',
    {
      id: 'pink-floyd-dark-side-of-the-moon',
      categoryId: 'music',
      name: 'Dark Side of the Moon',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Pink Floyd',
      price: 13,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/pink-floyd-dark-side-of-the-moon.jpg?alt=media&token=258f2ebd-6f90-4372-8161-e727bc48834a',
    },
  ],
  [
    'ed-sheeren-divide',
    {
      id: 'ed-sheeren-divide',
      categoryId: 'music',
      name: 'Divide',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'Ed Sheeren',
      price: 15,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/ed-sheeren-divide.jpg?alt=media&token=a466c921-c565-4467-9726-d8d3351782e2',
    },
  ],
  [
    'john williams-star-wars-the-last-jedi',
    {
      id: 'john williams-star-wars-the-last-jedi',
      categoryId: 'music',
      name: 'Star Wars: The Last Jedi',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      manufacturer: 'John Williams',
      price: 12,
      photo:
        'https://firebasestorage.googleapis.com/v0/b/mobx-shop.appspot.com/o/john-williams-star-wars-the-last-jedi.jpg?alt=media&token=4fdb63df-0dca-4400-a079-28586b01f0f6',
    },
  ],
]);

export const products: Product[] = Array.from(productMap.values());

export const productTree: TreeNode = {
  id: 'products',
  name: 'Products',
  children: Array.from(categoryMap.values()).map((category) => ({
    id: category.id,
    name: category.name,
    children: Array.from(productMap.values())
      .filter((product) => product.categoryId === category.id)
      .map((product) => ({
        id: product.id,
        name: product.name,
      })),
  })),
};

// ---------- InputOrder ----------
export const newOrder: InputOrder = {
  id: '',
  product1Id: '',
  product2Id: '',
};

export const inputOrder1: InputOrder = {
  id: 'order-1',
  product1Id: 'apple-ipad',
  product2Id: 'apple-imac',
};
