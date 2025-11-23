# CourseFinder - React Native App

A simple, clean React Native application built with Expo and styled with NativeWind (Tailwind CSS).

## Project Structure

```
CourseFinder/
├── src/
│   ├── assets/          # Images, fonts
│   ├── components/      # Reusable UI components
│   ├── constants/       # Colors, spacing
│   ├── screens/         # App screens
│   └── styles/          # Global styles
├── App.js
└── package.json
```

---

## Quick Start

```bash
# Install dependencies
npm install

# Start the app
npm start

# start with expo
npx expo start

# Press 'w' for web, 'a' for Android, 'i' for iOS
```

---

## Styling with NativeWind

This project uses **NativeWind** - Tailwind CSS for React Native!

```javascript
// Instead of StyleSheet
<View className="flex-1 bg-gray-100 p-4">
  <Text className="text-2xl font-bold text-gray-900">Hello!</Text>
</View>
```

See **[NATIVEWIND_GUIDE.md](./NATIVEWIND_GUIDE.md)** for all available classes.

---

## What's Included

- **Components** - Button, Card (reusable UI)
- **Screens** - HomeScreen (your app pages)
- **Constants** - Colors, spacing, layout values
- **Styles** - Global reusable styles

---

## Tech Stack

- React Native + Expo
- NativeWind (Tailwind CSS)
- React Hooks

---

## Tips

- Use `className=""` for Tailwind styling
- Check `NATIVEWIND_GUIDE.md` for all utility classes
- Components are in `src/components/common/`
- Add new screens in `src/screens/`
