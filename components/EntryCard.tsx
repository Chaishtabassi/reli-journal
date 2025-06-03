import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Entry {
  title: string;
  date: string;
  content: string;
}

type EntryCardProps = {
  entry: Entry;
  onDelete: () => void;
  onEdit: () => void;
};

export default function EntryCard({ entry, onDelete, onEdit }: EntryCardProps) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{entry.title}</Text>
        <Text style={styles.date}>{entry.date}</Text>
        <Text style={styles.content}>{entry.content}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
          <Text style={styles.actionText}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.actionButton}>
          <Text style={styles.actionText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  date: {
    color: '#6B7280',
    fontSize: 14,
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: '#374151',
  },
  actions: {
    justifyContent: 'space-between',
    marginLeft: 12,
  },
  actionButton: {
    padding: 8,
  },
  actionText: {
    fontSize: 20,
  },
});
