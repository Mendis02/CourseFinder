import { StyleSheet } from 'react-native';
import { COLORS, LAYOUT } from '../constants';

export const globalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  
  // Card styles
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: LAYOUT.borderRadius.md,
    padding: LAYOUT.spacing.md,
    marginVertical: LAYOUT.spacing.sm,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Text styles
  heading1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.md,
  },
  
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: LAYOUT.spacing.sm,
  },
  
  bodyText: {
    fontSize: 16,
    color: COLORS.textPrimary,
    lineHeight: 24,
  },
  
  smallText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
  
  // Button styles
  button: {
    backgroundColor: COLORS.primary,
    padding: LAYOUT.spacing.md,
    borderRadius: LAYOUT.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Input styles
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: LAYOUT.borderRadius.md,
    padding: LAYOUT.spacing.md,
    fontSize: 16,
    backgroundColor: COLORS.white,
  },
});
