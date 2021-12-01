/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import client from './app/services/client';
import {
  ApolloProvider
} from '@apollo/client';
import getData from './app/services/client';




const App = () => {
  const [data, setData] = useState([]);
  getData().then(res => {
    setData(res.data.allFilms["films"]);
  }
  );
  return (
    <SafeAreaView>
      <ApolloProvider client={client}>
        <View>
          <Text>Hello</Text>
          {/* {
            result.data.allFilms.films.map(item => {
              console.log({ item });
            })
          } */}
          <FlatList data={data}
            renderItem={({ item }) => {
              return <Text>{`${item.title}: Directed by ${item.director}`}</Text>
            }} />
        </View>
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
