import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import CourseCard from '../components/CourseCard';
import { searchCourses, categories } from '../data/courses';
import { colors } from '../styles/styles';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      let results = searchCourses(query);
      if (selectedCategory) {
        results = results.filter(course => course.categoryId === selectedCategory);
      }
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleCategoryFilter = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      handleSearch(searchQuery);
    } else {
      setSelectedCategory(categoryId);
      let results = searchCourses(searchQuery || '');
      if (categoryId) {
        results = results.filter(course => course.categoryId === categoryId);
      }
      setSearchResults(results);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Search</Text>
        </View>

        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for courses..."
            value={searchQuery}
            onChangeText={handleSearch}
            autoFocus
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <Text style={styles.clearButton}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.filterLabel}>Filter by category:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => handleCategoryFilter(category.id)}
              style={[styles.filterButton, selectedCategory === category.id && styles.filterButtonActive]}
            >
              <Text style={[styles.filterButtonText, selectedCategory === category.id && styles.filterButtonTextActive]}>
                {category.icon} {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {searchQuery.length === 0 && searchResults.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyTitle}>Find Your Perfect Course</Text>
            <Text style={styles.emptyText}>Search for courses by name, category, or keywords</Text>
          </View>
        ) : searchResults.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>😕</Text>
            <Text style={styles.emptyTitle}>No Results Found</Text>
            <Text style={styles.emptyText}>Try adjusting your search or filters</Text>
          </View>
        ) : (
          <>
            <Text style={styles.resultText}>
              Found {searchResults.length} course{searchResults.length !== 1 ? 's' : ''}
            </Text>
            {searchResults.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onPress={() => navigation?.navigate('CourseDetail', { courseId: course.id })}
              />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.gray50 },
  header: { backgroundColor: colors.primary, paddingTop: 48, paddingBottom: 16, paddingHorizontal: 16 },
  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  backButton: { marginRight: 12 },
  backText: { color: colors.white, fontSize: 18 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: colors.white },
  searchBar: { backgroundColor: colors.white, borderRadius: 8, padding: 12, flexDirection: 'row', alignItems: 'center' },
  searchIcon: { color: colors.gray400, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16 },
  clearButton: { color: colors.gray400 },
  filterContainer: { backgroundColor: colors.white, paddingHorizontal: 16, paddingVertical: 12 },
  filterLabel: { fontSize: 14, fontWeight: '500', color: colors.gray700, marginBottom: 8 },
  filterButton: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, backgroundColor: colors.gray100, marginRight: 8 },
  filterButtonActive: { backgroundColor: colors.primary },
  filterButtonText: { fontSize: 14, color: colors.gray700 },
  filterButtonTextActive: { color: colors.white, fontWeight: '500' },
  scrollView: { flex: 1 },
  contentContainer: { padding: 16 },
  emptyContainer: { alignItems: 'center', justifyContent: 'center', marginTop: 80 },
  emptyEmoji: { fontSize: 60, marginBottom: 16 },
  emptyTitle: { fontSize: 20, fontWeight: '600', color: colors.gray900, marginBottom: 8 },
  emptyText: { fontSize: 16, color: colors.gray500, textAlign: 'center', paddingHorizontal: 32 },
  resultText: { fontSize: 16, color: colors.gray600, marginBottom: 16 },
});

export default SearchScreen;
