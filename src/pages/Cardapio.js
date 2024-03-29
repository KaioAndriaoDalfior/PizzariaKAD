import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PizzaItem from '../components/PizzaItem';

const Cardapio = () => {
  const navigation = useNavigation();
  const [itensSelecionados, setItensSelecionados] = useState([]);

  const adicionarItem = (sabor, tamanho, preco) => {
    const novoItem = { sabor, tamanhos: { [tamanho]: preco } };
    setItensSelecionados([...itensSelecionados, novoItem]);
  };

  const navegarParaCarrinho = () => {
    navigation.navigate('Carrinho', { itensSelecionados });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Pizzaria KAD</Text>
        <Text style={styles.subtitulo}>Cardápio</Text>
      </View>

      <PizzaItem
        sabor="MUSSARELA"
        precoP={40}
        precoM={50}
        precoG={60}
        ingredientes={['Molho', 'Mussarela', 'Milho', 'Azeitona', 'Orégano']}
        adicionarItem={adicionarItem}
      />
<PizzaItem
  sabor="FRANGO COM CATUPIRY"
  precoP={48}
  precoM={58}
  precoG={68}
  ingredientes={['Molho', 'Frango desfiado', 'Catupiry', 'Milho', 'Azeitona', 'Orégano']}
  adicionarItem={adicionarItem}
/>


      <PizzaItem
        sabor="NORDESTINA"
        precoP={50}
        precoM={55}
        precoG={60}
        precoAntigo={76}
        ingredientes={['Molho', 'Mussarela', 'Carne de Sol', 'Tomate', 'Cebola', 'Pimentão', 'Milho', 'Azeitona']}
        adicionarItem={adicionarItem}
      />

    <TouchableOpacity onPress={navegarParaCarrinho} style={styles.botaoAdicionarCarrinho}>
  <Text style={styles.textoBotaoAdicionarCarrinho}>
    Adicionar ao Carrinho ({itensSelecionados.length} itens)
  </Text>
</TouchableOpacity>



    <TouchableOpacity onPress={navegarParaCarrinho} style={styles.botao}>
        <Text style={styles.textoBotao}>Ver Carrinho ({itensSelecionados.length} itens)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#666',
  },
  botao: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginTop: 40,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Cardapio;