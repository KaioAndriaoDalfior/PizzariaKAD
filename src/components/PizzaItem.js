import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PizzaItem = ({ sabor, precoP, precoM, precoG, ingredientes, adicionarItem }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const addToCart = (tamanho, preco) => {
    adicionarItem(sabor, tamanho, preco);
  };

  return (
    <TouchableOpacity onPress={toggleDetails}>
      <View style={styles.container}>
        <Text style={styles.titulo}>{sabor}</Text>
        {showDetails && (
          <View style={styles.detailsContainer}>
            <Text style={styles.subtitulo}>Ingredientes: {ingredientes.join(', ')}</Text>
            <Text style={styles.subtitulo}>Tamanhos Disponíveis:</Text>
            {precoP && (
              <TouchableOpacity onPress={() => addToCart('P', precoP)}>
                <Text style={styles.preco}>- P: R${precoP.toFixed(2)}</Text>
              </TouchableOpacity>
            )}
            {precoM && (
              <TouchableOpacity onPress={() => addToCart('M', precoM)}>
                <Text style={styles.preco}>- M: R${precoM.toFixed(2)}</Text>
              </TouchableOpacity>
            )}
            {precoG && (
              <TouchableOpacity onPress={() => addToCart('G', precoG)}>
                <Text style={styles.preco}>- G: R${precoG.toFixed(2)}</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#343a40', 
  },
  subtitulo: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 5,
  },
  preco: {
    fontSize: 16,
    color: '#007bff',
  },
  detailsContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    paddingTop: 10,
  },
});

export default PizzaItem;
