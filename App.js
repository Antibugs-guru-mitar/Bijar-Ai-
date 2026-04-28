import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [tokens, setTokens] = useState(100); // Shuru ke 100 Token Free

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bijar.AI 👑</Text>
      <Text style={styles.subtitle}>Video Generator AI</Text>
      
      <View style={styles.tokenBox}>
        <Text style={styles.tokenText}>Your Tokens: {tokens} 🪙</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('AI Video Generate Wala Button. Next Step Mein Chalay Ga')}>
        <Text style={styles.buttonText}>Generate Video 🎬</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.adButton} onPress={() => setTokens(tokens + 10)}>
        <Text style={styles.buttonText}>Watch Ad +10 Tokens 📺</Text>
      </TouchableOpacity>
      
      <Text style={styles.footer}>Made by Sultan + The Baloch ⛓️💚</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 40, fontWeight: 'bold', color: '#00FF88', marginBottom: 5 },
  subtitle: { fontSize: 16, color: '#aaa', marginBottom: 30 },
  tokenBox: { backgroundColor: '#222', padding: 15, borderRadius: 10, marginBottom: 30 },
  tokenText: { fontSize: 20, color: 'white', fontWeight: 'bold' },
  button: { backgroundColor: '#00FF88', padding: 15, borderRadius: 10, width: 250, alignItems: 'center', marginBottom: 15 },
  adButton: { backgroundColor: '#0077FF', padding: 15, borderRadius: 10, width: 250, alignItems: 'center' },
  buttonText: { color: 'black', fontSize: 18, fontWeight: 'bold' },
  footer: { position: 'absolute', bottom: 40, color: '#555' }
});
