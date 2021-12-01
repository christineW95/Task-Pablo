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
          <FlatList data={data}
            renderItem={({ item }) => {
              return (
                <>
                  <Text>{`${item.title}: Directed by ${item.director}`}</Text>
                  <Text>{`${item.created}: Edited In ${item.edited}`}</Text>
                  <Text>{`${item.releaseDate}`}</Text>
                  {item.planetConnection.planets.map((planet) => {
                    return <Text>{`${planet.name}`}</Text>
                  })}
                </>);

            }} />
        </View>
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
