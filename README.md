# Reli-Journal

Reli-Journal is a simple, clean, and intuitive journaling mobile app built with React Native and Expo.  
It aims to provide users with a seamless experience to capture their thoughts, reflect on their day, and maintain a personal journal on the go.

---

## Technologies Used

- **React Native** (with Expo SDK latest version)  
- **TypeScript** for type safety  
- **expo-router** for navigation  
- **React Native Vector Icons** for icons  
- **EAS Build** for iOS build verification  

---

## App Overview & Design Rationale

Reli-Journal consists of two main screens accessible via a bottom tab bar:

1. **Entries Screen:**  
   Displays a list of journal entries, with options to add new entries or delete old ones. The list shows dates and snippets for easy recognition.

2. **New Entry Screen:**  
   Allows users to write a new journal entry with a clean and distraction-free editor.

**Design Choices:**

- Minimalist and clean UI with focus on usability and readability.  
- Bottom tab navigation to switch quickly between journal list and entry creation.  
- Consistent spacing, font sizes, and colors for visual harmony.  
- Error prevention by disabling empty entries from being saved.  
- Confirmation dialogs on delete to prevent accidental data loss.

---

## Usability Heuristics Focused

This app emphasizes the following Jakob Nielsen heuristics:

- **Visibility of system status:** Loading spinners and feedback messages on save/delete operations.  
- **Match between system and real world:** Familiar terms like "Entries," "New Entry," and date formats that users recognize easily.  
- **User control and freedom:** Undo options on delete, ability to cancel entry creation.  
- **Consistency and standards:** Uniform button styles, font usage, and navigation layout throughout the app.  
- **Error prevention:** Disables saving empty journal entries and confirms deletion actions.  
- **Recognition rather than recall:** Displays entry previews to help users recognize past thoughts.  
- **Aesthetic and minimalist design:** Simple UI without clutter, focusing on journal content.  

---

## Running the App Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Chaishtabassi/reli-journal.git
   cd reli-journal

2. **Install dependencies:**

  npm install
  # or
  yarn install

3. **Start the Expo development server:**
   
    npx expo start
    # or
    expo start
