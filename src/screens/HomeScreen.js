import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button, Card } from '../components/common';

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView className="p-4">
        {/* Using NativeWind classes */}
        <Text className="text-4xl font-bold text-gray-900 mb-2">
          Course Finder
        </Text>
        <Text className="text-base text-gray-700 mb-6">
          Find the perfect course for your learning journey.
        </Text>

        {/* Card with NativeWind */}
        <View className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <Text className="text-2xl font-bold text-gray-900 mb-1">
            Featured Courses
          </Text>
          <Text className="text-sm text-gray-600">
            Discover our top-rated courses
          </Text>
        </View>

        {/* Your existing Button components still work */}
        <Button 
          title="Browse Courses" 
          onPress={() => console.log('Navigate to courses')}
        />
        
        <View className="mt-4">
          <Button 
            title="Search" 
            variant="outline"
            onPress={() => console.log('Open search')}
          />
        </View>

        {/* Example of NativeWind styling */}
        <View className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <Text className="text-blue-800 font-semibold">
            💡 Tip: You can now use Tailwind CSS classes!
          </Text>
          <Text className="text-blue-600 mt-2">
            Try: className="bg-red-500 p-4 rounded-lg"
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
