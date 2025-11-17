import {
  FaAndroid,
  FaApple,
  FaDesktop,
  FaGamepad,
  FaGlobe,
  FaMobileAlt,
  FaPlaystation,
  FaXbox,
} from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'

export const GENRES = [
  'Action',
  'RPG',
  'Strategy',
  'FPS',
  'Adventure',
  'Indie',
  'Sports',
  'Horror',
  'Fighting',
  'MOBA',
  'Metroidvania',
  'Survival',
  'Crafting',
  'Roguelike',
  'Tactical FPS',
  'Battle Royale',
  'Third-Person Shooter',
  'Action RPG',
  'JRPG',
  'Soulslike',
  'Open World',
  'Sandbox',
  'Cyberpunk',
  'Western',
  'Platformer',
  'Farming Sim',
  'Soccer/Football',
  'Cooperative',
]

export const PLATFORMS = [
  'PC',
  'PlayStation 5',
  'PlayStation 4',
  'Xbox Series X|S',
  'Xbox One',
  'Nintendo Switch',
  'macOS',
  'iOS',
  'Android',
  'Multi-platform',
]

export const SORT_OPTIONS = [
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popularity', label: 'Popularity' },
  { value: 'release-date', label: 'Release Date' },
  { value: 'rating', label: 'Rating' },
  { value: 'alphabetical', label: 'Alphabetical' },
]

export const PLATFORM_ICONS = {
  PC: FaDesktop,
  'PlayStation 5': FaPlaystation,
  'PlayStation 4': FaPlaystation,
  'Xbox Series X|S': FaXbox,
  'Xbox One': FaXbox,
  'Nintendo Switch': SiNintendoswitch,
  macOS: FaApple,
  iOS: FaMobileAlt,
  Android: FaAndroid,
  'Multi-platform': FaGlobe,
}

export const DEFAULT_PLATFORM_ICON = FaGamepad

