import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';
import { useTheme } from '../context/ThemeContext';
import { colors } from '../styles/styles';

const CourseCard = ({ course, onPress }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { theme } = useTheme();
  const favorite = isFavorite(course.id);

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={[styles.card, { backgroundColor: theme.card }]}
    >
      {/* Course Image */}
      <View style={styles.imageContainer}>
        <View style={[styles.imagePlaceholder, { backgroundColor: course.color || colors.primary }]}>
          <Text style={styles.placeholderText}>{course.category}</Text>
        </View>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>
            {course.category}
          </Text>
        </View>
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={(e) => {
            e.stopPropagation();
            toggleFavorite(course.id);
          }}
        >
          <Feather 
            name={favorite ? "heart" : "heart"} 
            size={20} 
            color={favorite ? "#EF4444" : "white"}
            fill={favorite ? "#EF4444" : "transparent"}
          />
        </TouchableOpacity>
      </View>

      {/* Course Info */}
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.text }]} numberOfLines={2}>
          {course.title}
        </Text>
        
        <Text style={[styles.description, { color: theme.textSecondary }]} numberOfLines={2}>
          {course.description}
        </Text>

        <Text style={[styles.instructor, { color: theme.textSecondary }]}>
          {course.instructor}
        </Text>

        {/* Rating and Stats */}
        <View style={styles.statsRow}>
          <View style={styles.ratingContainer}>
            <Text style={styles.star}>★</Text>
            <Text style={[styles.rating, { color: theme.text }]}>
              {course.rating}
            </Text>
            <Text style={[styles.reviews, { color: theme.textSecondary }]}>
              ({course.reviews.toLocaleString()})
            </Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={[styles.students, { color: theme.textSecondary }]}>
              {course.students.toLocaleString()} students
            </Text>
            <Text style={styles.price}>
              ${course.price}
            </Text>
          </View>
        </View>

        {/* Level Badge */}
        <View style={styles.badgeRow}>
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>
              {course.level}
            </Text>
          </View>
          <View style={styles.durationBadge}>
            <Text style={styles.durationText}>
              {course.duration}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 160,
    backgroundColor: colors.gray200,
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  instructor: {
    fontSize: 13,
    marginBottom: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    color: colors.yellow,
    fontSize: 14,
    marginRight: 4,
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray900,
    marginRight: 4,
  },
  reviews: {
    fontSize: 12,
    color: colors.gray500,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  students: {
    fontSize: 14,
    color: colors.gray500,
    marginRight: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  badgeRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  levelBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginRight: 8,
  },
  levelText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.primaryDark,
  },
  durationBadge: {
    backgroundColor: colors.gray100,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  durationText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.gray700,
  },
});

export default CourseCard;
