import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { useFavorites } from '../context/FavoritesContext';
import { colors } from '../styles/styles';

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useFavorites();

  const favoriteCourses = courses.filter(course => favorites.includes(course.id));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Feather name="heart" size={28} color={colors.white} />
          <Text style={styles.headerTitle}>My Favorites</Text>
        </View>
        <Text style={styles.headerSubtitle}>
          {favoriteCourses.length} {favoriteCourses.length === 1 ? 'course' : 'courses'} saved
        </Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {favoriteCourses.length === 0 ? (
          <View style={styles.emptyState}>
            <Feather name="heart" size={64} color={colors.gray300} />
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptyText}>
              Start adding courses to your favorites to see them here
            </Text>
          </View>
        ) : (
          favoriteCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onPress={() => navigation?.navigate('CourseDetail', { courseId: course.id })}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginLeft: 12,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.primaryLight,
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray900,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: colors.gray600,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default FavoritesScreen;
