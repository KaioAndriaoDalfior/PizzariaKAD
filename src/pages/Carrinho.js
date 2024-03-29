import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Carrinho = ({ route }) => {
  const { itensSelecionados } = route.params || { itensSelecionados: [] };
  const navigation = useNavigation();

  const removerItem = (index) => {
    const novosItens = itensSelecionados.filter((_, i) => i !== index);
    navigation.setParams({ itensSelecionados: novosItens });
  };

  const limparCarrinho = () => {
    navigation.setParams({ itensSelecionados: [] });
  };

  
  const calcularTotal = () => {
    let total = 0;
    itensSelecionados.forEach(item => {
      Object.values(item.tamanhos).forEach(preco => {
        total += preco;
      });
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>
      {itensSelecionados.length > 0 ? (
        <FlatList
          data={itensSelecionados}
          renderItem={({ item, index }) => (
            <View style={styles.pizzaItem}>
              <Text style={styles.sabor}>{item.sabor.toUpperCase()}</Text>
              <Text style={styles.tamanhos}>Tamanhos:</Text>
              {Object.entries(item.tamanhos || {}).map(([tamanho, preco]) => (
                <Text key={tamanho} style={styles.itemDetalhe}>{`Tamanho: ${tamanho}, Preço: R$${preco.toFixed(2)}`}</Text>
              ))}
              <TouchableOpacity onPress={() => removerItem(index)} style={styles.botaoRemover}>
                <Text style={styles.textoBotaoRemover}>Remover</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.vazio}>Nenhum item no carrinho</Text>
      )}
      <Text style={styles.total}>Total: R${calcularTotal()}</Text>
      <TouchableOpacity onPress={limparCarrinho} style={styles.botaoLimpar}>
        <Text style={styles.textoBotaoLimpar}>Limpar Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  pizzaItem: {
    marginBottom: 30,
  },
  sabor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue',
  },
  tamanhos: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDetalhe: {
    fontSize: 14,
    marginLeft: 20,
  },
  vazio: {
    fontSize: 18,
    textAlign: 'center',
  },
  total: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  botaoRemover: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  textoBotaoRemover: {
    color: 'white',
    textAlign: 'center',
  },
  botaoLimpar: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  textoBotaoLimpar: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Carrinho;
