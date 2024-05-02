import React from 'react';
import { View, Text, Image, FlatList, useWindowDimensions, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const eventos = [
  {
    id: 1,
    titulo: "Carnaval do Recife Antigo",
    descricao: "Venha vivenciar um dos carnavais mais vibrantes do Brasil, com frevo, maracatu e atrações incríveis pelas ruas históricas do Recife Antigo.",
    imagem: "carnaval_recife_antigo.jpg"
  },
  {
    id: 2,
    titulo: "Festival Recife de Teatro Nacional",
    descricao: "Um festival que reúne peças de teatro de todo o país, destacando a rica produção cultural e a diversidade do teatro brasileiro.",
    imagem: "festival_teatro_recife.jpg"
  },
  {
    id: 3,
    titulo: "Exposição de Arte Contemporânea",
    descricao: "Uma exposição que apresenta obras de arte contemporânea de artistas locais e internacionais, explorando temas diversos e provocativos.",
    imagem: "exposicao_arte.jpg"
  },
  {
    id: 4,
    titulo: "Concerto ao Ar Livre",
    descricao: "Desfrute de um concerto ao ar livre com músicos talentosos interpretando clássicos da música brasileira e internacional em um cenário deslumbrante.",
    imagem: "concerto_ar_livre.jpg"
  },
  {
    id: 5,
    titulo: "Feira Gastronômica",
    descricao: "Uma feira gastronômica com os melhores pratos da culinária local, incluindo comida de rua, pratos regionais e opções vegetarianas e veganas.",
    imagem: "feira_gastronomica.jpg"
  },
  {
    id: 6,
    titulo: "Exibição de Filmes ao Ar Livre",
    descricao: "Assista a filmes clássicos e contemporâneos sob as estrelas em uma exibição ao ar livre, uma experiência única para cinéfilos de todas as idades.",
    imagem: "exibicao_filmes.jpg"
  },
  {
    id: 7,
    titulo: "Aula de Dança Aberta",
    descricao: "Participe de uma aula de dança aberta ao público, onde você pode aprender passos de dança tradicionais e contemporâneos de instrutores experientes.",
    imagem: "aula_danca.jpg"
  },
  {
    id: 8,
    titulo: "Feira de Artesanato Local",
    descricao: "Explore uma feira de artesanato local, onde você pode encontrar produtos artesanais únicos, desde roupas e acessórios até decorações para casa.",
    imagem: "feira_artesanato.jpg"
  },
];

const Inicial = ({ route }) => {
  const { username, message } = route.params;
  const dimensions = useWindowDimensions();
  const orientation = dimensions.width > dimensions.height ? 'landscape' : 'portrait';
  const navigation = useNavigation();

  const renderEvento = ({ item }) => (
    <View style={tw.style('m-2 p-4 bg-white rounded-lg', { width: dimensions.width / 2 - 24 })}>
      <Text style={tw`text-lg font-bold mt-2`}>{item.titulo}</Text>
      <Text style={tw`text-sm`}>{item.descricao}</Text>
    </View>
  );

  return (
    <View style={tw.style('flex-1', { backgroundColor: orientation === 'portrait' ? '#dcdcdc' : '#a9a9a9' })}>
      <Button
        title="About"
        onPress={() => navigation.navigate('about')}
      />
      <Button
        title="Equipe"
        onPress={() => navigation.navigate('equipe')}
      />
      <Text style={tw`text-lg font-bold mt-2 text-center text-white`}>{message}{username}</Text>
      <FlatList
        data={eventos}
        renderItem={renderEvento}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={tw`p-2`}
      />
    </View>
  );
};

export default Inicial;
