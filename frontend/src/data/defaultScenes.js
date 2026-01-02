/**
 * Default scenes pre-generated using the reference image
 * These scenes are bundled with the app and always available
 */

export const DEFAULT_REFERENCE_IMAGE = '/assets/default-reference.png';

export const DEFAULT_SCENES = [
  {
    id: 'default-studio-1',
    name: 'Modern Interview Studio',
    category: 'studio',
    imageUrl: '/assets/default-scenes/default-studio-1.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-studio-2',
    name: 'Scandinavian Creative',
    category: 'studio',
    imageUrl: '/assets/default-scenes/default-studio-2.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-studio-3',
    name: 'Industrial Loft',
    category: 'studio',
    imageUrl: '/assets/default-scenes/default-studio-3.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-studio-4',
    name: 'Futuristic Broadcast',
    category: 'studio',
    imageUrl: '/assets/default-scenes/default-studio-4.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-studio-5',
    name: 'Vintage Scholar Study',
    category: 'studio',
    imageUrl: '/assets/default-scenes/default-studio-5.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-studio-6',
    name: 'Modern Art Gallery',
    category: 'studio',
    imageUrl: '/assets/default-scenes/default-studio-6.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-studio-7',
    name: 'Cozy Podcast Studio',
    category: 'studio',
    imageUrl: '/assets/default-scenes/default-studio-7.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-studio-8',
    name: 'Executive Broadcast',
    category: 'studio',
    imageUrl: '/assets/default-scenes/default-studio-8.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-office-1',
    name: 'Penthouse Sunset Office',
    category: 'office',
    imageUrl: '/assets/default-scenes/default-office-1.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-office-2',
    name: 'Glass Boardroom',
    category: 'office',
    imageUrl: '/assets/default-scenes/default-office-2.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-office-3',
    name: 'Executive Library',
    category: 'office',
    imageUrl: '/assets/default-scenes/default-office-3.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-office-4',
    name: 'Startup Loft',
    category: 'office',
    imageUrl: '/assets/default-scenes/default-office-4.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-office-5',
    name: 'Minimalist Japanese',
    category: 'office',
    imageUrl: '/assets/default-scenes/default-office-5.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-beach-1',
    name: 'Sunrise Beach Deck',
    category: 'beach',
    imageUrl: '/assets/default-scenes/default-beach-1.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-beach-2',
    name: 'Ocean Cliff Office',
    category: 'beach',
    imageUrl: '/assets/default-scenes/default-beach-2.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-city-1',
    name: 'Rooftop Night',
    category: 'city',
    imageUrl: '/assets/default-scenes/default-city-1.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-city-2',
    name: 'Penthouse City View',
    category: 'city',
    imageUrl: '/assets/default-scenes/default-city-2.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-nature-1',
    name: 'Forest Clearing',
    category: 'nature',
    imageUrl: '/assets/default-scenes/default-nature-1.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-luxury-1',
    name: 'Private Jet Cabin',
    category: 'luxury',
    imageUrl: '/assets/default-scenes/default-luxury-1.png',
    orientation: 'vertical',
    isDefault: true
  },
  {
    id: 'default-luxury-2',
    name: 'Luxury Hotel Suite',
    category: 'luxury',
    imageUrl: '/assets/default-scenes/default-luxury-2.png',
    orientation: 'vertical',
    isDefault: true
  }
];

// Get scenes grouped by category
export const getDefaultScenesByCategory = () => {
  const categories = {};
  DEFAULT_SCENES.forEach(scene => {
    if (!categories[scene.category]) {
      categories[scene.category] = [];
    }
    categories[scene.category].push(scene);
  });
  return categories;
};

// Category display names
export const CATEGORY_NAMES = {
  studio: 'Studio',
  office: 'Office',
  beach: 'Beach & Retreats',
  city: 'City Views',
  nature: 'Nature & Outdoors',
  luxury: 'Luxury & Elegance'
};

export default DEFAULT_SCENES;
