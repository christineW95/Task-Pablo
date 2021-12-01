/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {
  ApolloProvider
} from '@apollo/client';
import * as Queries from './app/services/client';
import RNShake from 'react-native-shake';



const isPlanetExist = (planetId, film) => {
  let planets = film?.planetConnection?.planets || [];
  let filterResult = planets.filter(planet => planet.id == planetId);
  return filterResult.length > 0
}
const App = () => {
  const [films, setFilms] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState({});
  //Films
  Queries.getFilmsData().then(res => {
    setFilms(res.data.allFilms["films"]);
  });
  //Planets
  Queries.getPlanetsData().then(res => {
    setPlanets(res.data.allPlanets["planets"]);
  });


  React.useEffect(() => {
    const subscription = RNShake.addListener(() => {
      let randomIndex = Math.floor((Math.random() * 10) + 1);
      if (randomIndex < planets.length)
        setSelectedPlanet(planets[randomIndex]);
    });

    return () => {
      subscription.remove()
    }
  }, [])

  return (
    <SafeAreaView>
      <ApolloProvider client={Queries.client}>
        <View>
          <FlatList data={films}
            key={Math.random()}
            renderItem={({ item }) => {
              return (
                <>
                  <Text>{`${item.title}: Directed by ${item.director}`}</Text>
                  <Text>{`${item.created}: Edited In ${item.edited}`}</Text>
                  <Text>{`${item.releaseDate}`}</Text>
                  {
                    isPlanetExist(selectedPlanet?.id, item) ? <Text>{`${selectedPlanet?.name}`}</Text> : null
                  }

                </>);

            }} />
        </View>
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;
