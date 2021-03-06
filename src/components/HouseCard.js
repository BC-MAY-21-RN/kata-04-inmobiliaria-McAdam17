import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import TextIcon from './TextIcon'
import { Icon } from 'react-native-elements'

function HouseCard ({ houseInfo }) {
  const { title, img, location, rooms, bathrooms, dimensions, price } = houseInfo
  return (
    <View style={styles.container}>
      <View style= {styles.icon}>
        <Icon 
            color='#00ba74' 
            name='heart' 
            reverse
            size= {12} 
            type='font-awesome'
        />
      </View>
      <Image style={styles.img} source={ img }/>
      <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <TextIcon title= {location} iconName="map-marker" light={true}/>
          <View style={styles.infoData}>
              <TextIcon title= {rooms} iconName="bed"/>
              <TextIcon title= {bathrooms} iconName="bath"/>
              <TextIcon title= {dimensions} iconName="object-group"/>
          </View>
          <Text style={styles.price}>${price}/m</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2fdff',
    borderRadius: 20,
    flex: 0,
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    position: 'relative'
  },
  img: {
    borderRadius: 20,
    height: 120,
    width: 120
  },
  info: {
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 20
  },
  title: {
    fontSize: 19,
    fontWeight: '600'
  },
  infoData: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    bottom: 0,
    right: 0,
    position: 'absolute'
  }
})

export default HouseCard
