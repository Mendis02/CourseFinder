import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { courses } from '../data/courses';
import { useFavorites } from '../context/FavoritesContext';
import { colors } from '../styles/styles';

const CourseDetailScreen = ({ route, navigation }) => {
  const { courseId } = route?.params || {};
  const course = courses.find(c => c.id === courseId);
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(courseId);

  if (!course) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Course not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <View style={[styles.imagePlaceholder, { backgroundColor: course.color || colors.primary }]}>
            <Text style={styles.placeholderText}>{course.category}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation?.goBack()} style={styles.backButton}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => toggleFavorite(courseId)} 
            style={styles.favoriteButton}
          >
            <Feather 
              name={favorite ? "heart" : "heart"} 
              size={24} 
              color={favorite ? "#EF4444" : "white"}
              fill={favorite ? "#EF4444" : "transparent"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.badgeRow}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryBadgeText}>{course.category}</Text>
            </View>
            <View style={styles.levelBadge}>
              <Text style={styles.levelBadgeText}>{course.level}</Text>
            </View>
          </View>

          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.description}>{course.description}</Text>

          <View style={styles.instructorRow}>
            <View style={styles.instructorAvatar}>
              <Text style={styles.instructorEmoji}>👨‍🏫</Text>
            </View>
            <View>
              <Text style={styles.instructorLabel}>Instructor</Text>
              <Text style={styles.instructorName}>{course.instructor}</Text>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statEmoji}>★</Text>
              <Text style={styles.statValue}>{course.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statEmoji}>👥</Text>
              <Text style={styles.statValue}>{(course.students / 1000).toFixed(1)}k</Text>
              <Text style={styles.statLabel}>Students</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statEmoji}>⏱️</Text>
              <Text style={styles.statValue}>{course.duration}</Text>
              <Text style={styles.statLabel}>Duration</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>What you'll learn</Text>
          <View style={styles.learnContainer}>
            {course.whatYouLearn.map((item, index) => (
              <View key={index} style={styles.learnItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.learnText}>{item}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Course Syllabus</Text>
          {course.syllabus.map((item, index) => (
            <View key={index} style={styles.syllabusItem}>
              <View style={styles.syllabusNumber}>
                <Text style={styles.syllabusNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.syllabusText}>{item}</Text>
            </View>
          ))}

          <Text style={styles.sectionTitle}>Tags</Text>
          <View style={styles.tagsContainer}>
            {course.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.price}>${course.price}</Text>
        </View>
        <TouchableOpacity style={styles.enrollButton} onPress={() => alert('Enrollment feature coming soon!')}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  scrollView: { flex: 1 },
  emptyContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyText: { color: colors.gray500 },
  imageContainer: { position: 'relative', height: 224 },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  image: { width: '100%', height: 224 },
  backButton: { 
    position: 'absolute', 
    top: 48, 
    left: 16, 
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    borderRadius: 20, 
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButton: { 
    position: 'absolute', 
    top: 48, 
    right: 16, 
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    borderRadius: 20, 
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: { fontSize: 16 },
  content: { padding: 20 },
  badgeRow: { flexDirection: 'row', marginBottom: 12 },
  categoryBadge: { backgroundColor: colors.primaryLight, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16, marginRight: 8 },
  categoryBadgeText: { fontSize: 14, fontWeight: '500', color: colors.primaryDark },
  levelBadge: { backgroundColor: colors.gray100, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 16 },
  levelBadgeText: { fontSize: 14, fontWeight: '500', color: colors.gray700 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.gray900, marginBottom: 8 },
  description: { fontSize: 16, color: colors.gray600, marginBottom: 16 },
  instructorRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  instructorAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  instructorEmoji: { fontSize: 18 },
  instructorLabel: { fontSize: 14, color: colors.gray500 },
  instructorName: { fontSize: 16, fontWeight: '600', color: colors.gray900 },
  statsContainer: { flexDirection: 'row', backgroundColor: colors.gray50, borderRadius: 8, padding: 16, marginBottom: 20 },
  statItem: { flex: 1, alignItems: 'center' },
  statEmoji: { fontSize: 18, marginBottom: 4 },
  statValue: { fontSize: 18, fontWeight: 'bold', color: colors.gray900 },
  statLabel: { fontSize: 12, color: colors.gray500 },
  statDivider: { width: 1, backgroundColor: colors.gray200 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: colors.gray900, marginBottom: 12 },
  learnContainer: { backgroundColor: colors.primaryLight, borderRadius: 8, padding: 16, marginBottom: 20 },
  learnItem: { flexDirection: 'row', marginBottom: 8 },
  checkmark: { color: colors.primary, marginRight: 8 },
  learnText: { color: colors.gray700, flex: 1 },
  syllabusItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.gray50, borderRadius: 8, padding: 16, marginBottom: 8 },
  syllabusNumber: { width: 32, height: 32, borderRadius: 16, backgroundColor: colors.primaryLight, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  syllabusNumberText: { fontSize: 14, fontWeight: 'bold', color: colors.primary },
  syllabusText: { color: colors.gray700, flex: 1 },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 24 },
  tag: { backgroundColor: colors.gray100, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16, marginRight: 8, marginBottom: 8 },
  tagText: { fontSize: 14, color: colors.gray700 },
  footer: { backgroundColor: colors.white, borderTopWidth: 1, borderTopColor: colors.gray200, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  priceLabel: { fontSize: 14, color: colors.gray500 },
  price: { fontSize: 24, fontWeight: 'bold', color: colors.primary },
  enrollButton: { backgroundColor: colors.primary, paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8 },
  enrollButtonText: { color: colors.white, fontWeight: 'bold', fontSize: 16 },
});

export default CourseDetailScreen;
