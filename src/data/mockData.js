export const restaurants = [
  {
    id: 1,
    name: 'Pizza Dakar',
    category: 'Italien',
    rating: 4.5,
    deliveryTime: '25-35 min',
    deliveryFee: '500 F',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    description: 'Pizzas authentiques italiennes',
  },
  {
    id: 2,
    name: 'Sushi Almadies',
    category: 'Japonais',
    rating: 4.8,
    deliveryTime: '30-40 min',
    deliveryFee: '800 F',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    description: 'Sushi frais et sashimi',
  },
  {
    id: 3,
    name: 'Le Lagon',
    category: 'Africain',
    rating: 4.6,
    deliveryTime: '20-30 min',
    deliveryFee: '400 F',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop',
    description: 'Cuisine sénégalaise traditionnelle',
  },
  {
    id: 4,
    name: 'Burger Teranga',
    category: 'Fast Food',
    rating: 4.2,
    deliveryTime: '15-25 min',
    deliveryFee: '300 F',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    description: 'Burgers et frites',
  },
  {
    id: 5,
    name: 'Chez Fatou',
    category: 'Africain',
    rating: 4.7,
    deliveryTime: '25-35 min',
    deliveryFee: '500 F',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
    description: 'Spécialités africaines authentiques',
  },
  {
    id: 6,
    name: 'Le Baobab',
    category: 'Africain',
    rating: 4.5,
    deliveryTime: '30-40 min',
    deliveryFee: '600 F',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    description: 'Cuisine ivoirienne et sénégalaise',
  },
];

export const menuItems = {
  1: [ // Pizza Dakar
    { id: 101, name: 'Pizza Margherita', price: 3500, description: 'Sauce tomate, mozzarella, basilic', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop' },
    { id: 102, name: 'Pizza Pepperoni', price: 4000, description: 'Sauce tomate, mozzarella, pepperoni', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop' },
    { id: 103, name: 'Pizza 4 Fromages', price: 4500, description: 'Mozzarella, gorgonzola, parmesan, chèvre', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=200&fit=crop' },
    { id: 104, name: 'Tiramisu', price: 2000, description: 'Dessert italien classique', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=200&fit=crop' },
  ],
  2: [ // Sushi Almadies
    { id: 201, name: 'California Roll', price: 4500, description: '8 pièces, avocat, crabe, concombre', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop' },
    { id: 202, name: 'Sashimi Mix', price: 8000, description: 'Assortiment saumon, thon, daurade', image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=300&h=200&fit=crop' },
    { id: 203, name: 'Dragon Roll', price: 5500, description: 'Crevettes tempura, avocat, anguille', image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=300&h=200&fit=crop' },
    { id: 204, name: 'Miso Soup', price: 1500, description: 'Soupe traditionnelle', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop' },
  ],
  3: [ // Le Lagon
    { id: 301, name: 'Thiéboudienne', price: 3000, description: 'Riz au poisson, légumes et sauce', image: '/images/plats/Thiéboudienne.png' },
    { id: 302, name: 'Yassa Poulet', price: 3500, description: 'Poulet mariné aux oignons et citron', image: '/images/plats/yassa.jpg.webp' },
    { id: 303, name: 'Mafé', price: 3200, description: 'Viande en sauce arachide', image: '/images/plats/mafé.webp' },
    { id: 304, name: 'Jus de Bissap', price: 1000, description: 'Boisson rafraîchissante', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop' },
  ],
  5: [ // Chez Fatou
    { id: 501, name: 'Thiéboudienne Rouge', price: 3500, description: 'Riz au poisson sauce rouge traditionnelle', image: '/images/plats/Thiéboudienne.png' },
    { id: 502, name: 'Mafé Bœuf', price: 3800, description: 'Bœuf mijoté en sauce arachide onctueuse', image: '/images/plats/mafé.webp' },
    { id: 503, name: 'Yassa Poisson', price: 4000, description: 'Poisson grillé aux oignons caramélisés', image: '/images/plats/yassa-poisson.jpg' },
    { id: 504, name: 'Thiou Viande', price: 3200, description: 'Ragoût de viande aux légumes', image: '/images/plats/thiou viande.jpg' },
    { id: 505, name: 'Jus de Gingembre', price: 1200, description: 'Boisson épicée maison', image: '/images/plats/jus de gingembre.png' },
  ],
  6: [ // Le Baobab
    { id: 601, name: 'Attiéké Poisson', price: 3500, description: 'Semoule de manioc avec poisson braisé', image: '/images/plats/Attiéké Poisson.png' },
    { id: 602, name: 'Attiéké Poulet', price: 3200, description: 'Attiéké avec poulet grillé', image: '/images/plats/Attiéké Poulet.png' },
    { id: 603, name: 'Mafé Poulet', price: 3000, description: 'Poulet sauce arachide maison', image: '/images/plats/mafé.webp' },
    { id: 604, name: 'Alloco Plantain', price: 2000, description: 'Bananes plantain frites sauce pimentée', image: '/images/plats/Alloco Plantain.png' },
    { id: 605, name: 'Jus de Tamarin', price: 1000, description: 'Boisson traditionnelle acidulée', image: '/images/plats/Jus de Tamarin.png' },
  ],
  4: [ // Burger Teranga
    { id: 401, name: 'Teranga Burger', price: 3500, description: 'Burger classique avec frites', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop' },
    { id: 402, name: 'Poulet Yassa Burger', price: 3800, description: 'Burger au poulet yassa', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop' },
    { id: 403, name: 'Nuggets x10', price: 2500, description: 'Nuggets de poulet avec sauce', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=200&fit=crop' },
    { id: 404, name: 'Milkshake Mangue', price: 1500, description: 'Milkshake à la mangue locale', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=200&fit=crop' },
  ],
};

export const orders = [
  {
    id: 1001,
    type: 'resto',
    restaurant: 'Pizza Dakar',
    items: ['Pizza Margherita x1', 'Tiramisu x1'],
    total: 5500,
    status: 'En cours',
    deliveryTime: '15 min',
    date: '2025-11-16',
  },
  {
    id: 1002,
    type: 'course',
    from: 'Plateau, Avenue Roume',
    to: 'Almadies, Route de Ngor',
    category: 'Standard',
    price: 2500,
    status: 'Terminé',
    date: '2025-11-15',
  },
  {
    id: 1003,
    type: 'colis',
    from: 'Parcelles Assainies',
    to: 'Mermoz, Sacré-Cœur',
    mode: 'Domicile',
    price: 1500,
    status: 'En cours',
    deliveryTime: '45 min',
    date: '2025-11-16',
  },
];

export const userProfile = {
  name: 'Djibril Gueye',
  email: 'djibril.gueye@example.com',
  phone: '+221 77 123 45 67',
  avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
  address: 'Almadies, Route de Ngor',
  paymentMethods: [
    { id: 1, type: 'card', last4: '4242', default: true },
    { id: 2, type: 'mobile', number: '771234567', default: false },
  ],
};

export const promotions = [
  {
    id: 1,
    title: '30% de réduction',
    description: 'Sur votre première course',
    code: 'BIENVENUE30',
    color: '#2563EB',
  },
  {
    id: 2,
    title: 'Livraison gratuite',
    description: 'Restaurants partenaires',
    code: 'LIVRAISON0',
    color: '#10B981',
  },
  {
    id: 3,
    title: '20% de réduction',
    description: 'Tous les plats africains',
    code: 'AFRIQUE20',
    color: '#F59E0B',
  },
];

export const stats = {
  totalTrips: 47,
  totalSpent: 125000,
  savedMoney: 15000,
  currentPoints: 350,
};
