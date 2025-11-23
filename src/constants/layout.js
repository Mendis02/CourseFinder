import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const LAYOUT = {
  // Screen dimensions
  window: {
    width,
    height,
  },
  
  // Spacing scale (use multiples of 4 or 8 for consistency)
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  // Border radius
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    round: 50,
  },
  
  // Common sizes
  iconSize: {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  },
  
  // Hit slop for touchable elements
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
};
