import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import initialEntries from '../constants/entries';
import EntryCard from '../components/EntryCard';

export default function Journal() {
  const [entries, setEntries] = useState(initialEntries);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

 const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddOrUpdate = () => {
    if (title.trim() === '' || date.trim() === '' || content.trim() === '') {
      alert('Please fill all fields');
      return;
    }

    if (editIndex === null) {
      const newEntry = { title, date, content };
      setEntries([newEntry, ...entries]);
    } else {
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = { title, date, content };
      setEntries(updatedEntries);
      setEditIndex(null);
    }

    setTitle('');
    setDate('');
    setContent('');
  };

  const handleDelete =(index: number) => {
    Alert.alert(
      "Delete Entry",
      "Are you sure you want to delete this entry?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setEntries((prev) => prev.filter((_, i) => i !== index));
            if (editIndex === index) {
              setEditIndex(null);
              setTitle('');
              setDate('');
              setContent('');
            }
          },
        },
      ]
    );
  };

  const handleEdit = (index: number)=> {
    const entry = entries[index];
    setTitle(entry.title);
    setDate(entry.date);
    setContent(entry.content);
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setTitle('');
    setDate('');
    setContent('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Journal</Text>
          <Text style={styles.headerSubtitle}>Reflect on your thoughts & moments</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Date (e.g. 2025-06-03)"
            value={date}
            onChangeText={setDate}
          />
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Content"
            value={content}
            onChangeText={setContent}
            multiline
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              style={[styles.addButton, { flex: 1, marginRight: 8 }]}
              onPress={handleAddOrUpdate}
            >
              <Text style={styles.addButtonText}>
                {editIndex === null ? 'Add Entry' : 'Update Entry'}
              </Text>
            </TouchableOpacity>

            {editIndex !== null && (
              <TouchableOpacity
                style={[styles.cancelButton, { flex: 1 }]}
                onPress={handleCancelEdit}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {entries.map((entry, index) => (
            <EntryCard
              key={index}
              entry={entry}
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit(index)}
            />
          ))}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    backgroundColor: '#4F46E5',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#C7D2FE',
    fontSize: 14,
    marginTop: 4,
  },
  inputContainer: {
    padding: 16,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#F9FAFB',
  },
  addButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#9CA3AF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 60,
  },
});
