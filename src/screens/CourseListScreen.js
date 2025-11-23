import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import CourseCard from '../components/CourseCard';
import { courses, getCoursesByCategory } from '../data/courses';
import { colors } from '../styles/styles';

const CourseListScreen = ({ route, navigation }) => {
  const { categoryId, categoryName } = route?.params || {};
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    if (categoryId) {
      setFilteredCourses(getCoursesByCategory(categoryId));
    } else {
      setFilteredCourses(courses);
    }
  }, [categoryId]);

  const sortCourses = (courses, sortType) => {
    const sorted = [...courses];
    switch (sortType) {
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'price':
        return sorted.sort((a, b) => a.price - b.price);
      case 'popular':
      default:
        return sorted.sort((a, b) => b.students - a.students);
    }
  };

  const displayCourses = sortCourses(filteredCourses, sortBy);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>
              {categoryName || 'All Courses'}
            </Text>
            <Text style={styles.headerSubtitle}>{displayCourses.length} courses available</Text>
          </View>
        </View>
      </View>

      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Sort by:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => setSortBy('popular')}
            style={[styles.sortButton, sortBy === 'popular' && styles.sortButtonActive]}
          >
            <Text style={[styles.sortButtonText, sortBy === 'popular' && styles.sortButtonTextActive]}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSortBy('rating')}
            style={[styles.sortButton, sortBy === 'rating' && styles.sortButtonActive]}
          >
            <Text style={[styles.sortButtonText, sortBy === 'rating' && styles.sortButtonTextActive]}>Highest Rated</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSortBy('price')}
            style={[styles.sortButton, sortBy === 'price' && styles.sortButtonActive]}
          >
            <Text style={[styles.sortButtonText, sortBy === 'price' && styles.sortButtonTextActive]}>Lowest Price</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {displayCourses.map((course) => (
          <CourseCard key={course.id} course={course} onPress={() => navigation?.navigate('CourseDetail', { courseId: course.id })} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.gray50 },
  header: { backgroundColor: colors.primary, paddingTop: 48, paddingBottom: 16, paddingHorizontal: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  menuButton: { width: 40, height: 40, justifyContent: 'center', marginRight: 8 },
  menuIcon: { fontSize: 28, color: colors.white, fontWeight: '600' },
  headerTextContainer: { flex: 1 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: colors.white },
  headerSubtitle: { fontSize: 14, color: colors.primaryLight, marginTop: 4 },
  sortContainer: { backgroundColor: colors.white, paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', alignItems: 'center' },
  sortLabel: { fontSize: 14, fontWeight: '500', color: colors.gray700, marginRight: 12 },
  sortButton: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, backgroundColor: colors.gray100, marginRight: 8 },
  sortButtonActive: { backgroundColor: colors.primary },
  sortButtonText: { fontSize: 14, color: colors.gray700 },
  sortButtonTextActive: { color: colors.white, fontWeight: '500' },
  scrollView: { flex: 1 },
  contentContainer: { padding: 16 },
});

export default CourseListScreen;
