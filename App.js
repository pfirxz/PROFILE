import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    
    <View style={styles.profile}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.scdn.co/image/ab67706c0000da84a38dd94afc95447e78553614'}}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Gus Porter</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.sectionTitle}>INFORMAÇÕES BÁSICAS</Text>
        <View style={styles.infoRow}>
          <Ionicons name="mail" size={24} color="#333" />
          <Text style={styles.infoText}>Email: gus.porter@gmail.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="man" size={24} color="#333" />
          <Text style={styles.infoText}> 1.73 centimetros </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="ios-barbell" size={24} color="#333" />
          <Text style={styles.infoText}> 60 kg</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="ios-brush" size={24} color="#333" />
          <Text style={styles.infoText}>Cor do Cabelo: Preto</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="transgender-outline" size={24} color="#333" />
          <Text style={styles.infoText}>Tipo Sanguíneo: O-</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="star" size={24} color="#333" />
          <Text style={styles.infoText}>Signo: Aquário</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="person" size={24} color="#333" />
          <Text style={styles.infoText}>Nome de Solteira da Mãe: Mary Porter</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="heart" size={24} color="#333" />
          <Text style={styles.infoText}>Estado Civil: Solteiro</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="book" size={24} color="#333" />
          <Text style={styles.infoText}>Educação: Feiticeiro</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="medkit" size={24} color="#333" />
          <Text style={styles.infoText}>Histórico de Doenças</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: 'red',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 100 },
    shadowOpacity: 0.2,
    elevation: 7,
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginRight: 10,
    marginTop: 50,
    alignSelf: 'center',
    

  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  userInfo: {
    marginTop: 60,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Profile;

