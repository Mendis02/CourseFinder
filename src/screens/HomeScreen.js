import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import CourseCard from '../components/CourseCard';
import { categories, featuredCourses } from '../data/courses';
import { colors } from '../styles/styles';

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitle}>Course Finder</Text>
              <Text style={styles.headerSubtitle}>
                Discover your next learning adventure
              </Text>
            </View>
          </View>

          {/* Search Bar */}
          <TouchableOpacity 
            onPress={() => navigation?.navigate('Search')}
            style={styles.searchBar}
          >
            <Text style={styles.searchText}>🔍 Search for courses...</Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Categories
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                onPress={() => {
                  setSelectedCategory(category.id);
                  navigation?.navigate('Courses', { 
                    screen: 'CourseListMain',
                    params: {
                      categoryId: category.id,
                      categoryName: category.name 
                    }
                  });
                }}
                style={styles.categoryItem}
              >
                <View 
                  style={[styles.categoryIcon, { backgroundColor: category.color + '20' }]}
                >
                  <Text style={styles.categoryEmoji}>{category.icon}</Text>
                </View>
                <Text style={styles.categoryName}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Courses */}
        <View style={styles.coursesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Featured Courses
            </Text>
            <TouchableOpacity onPress={() => navigation?.navigate('Courses')}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          {featuredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onPress={() => navigation?.navigate('CourseDetail', { courseId: course.id })}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuIcon: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '600',
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.primaryLight,
  },
  searchBar: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    color: colors.gray400,
    fontSize: 16,
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray900,
    marginBottom: 16,
  },
  categoryItem: {
    marginRight: 12,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.gray700,
    textAlign: 'center',
  },
  coursesSection: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default HomeScreen;
