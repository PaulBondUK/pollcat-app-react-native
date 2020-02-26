import React, { Component, Fragment } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GoogleMapsAuth from "../Auth/GoogleMapsAuth";
import firebase from "../Auth/Firebase";
import axios from "axios";
import { TextInput, View, StyleSheet, AsyncStorage } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  Left,
  Right,
  Body,
  Title,
  Button,
  H1,
  Spinner
} from "native-base";
import HistoryRouter from "./History/HistoryRouter";
import AccountScreen from "./Account/Account";
import CityProfileScreen from "./CityProfile/CityProfile";
import HistoryScreen from "./History/History";
import TodaysPollScreen from "./TodaysPoll/TodaysPoll";
import AccountRouter from "./Account/AccountRouter";
import TabBarIcon from "../HomeScreen/TabBarIcon";

// const Tab = createBottomTabNavigator({
//   "Today's Poll": TodaysPollScreen,
//   History: HistoryScreen,
//   "City Profile": CityProfileScreen,
//   Account: AccountScreen
// });

const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {
  state = {
    user: null,
    location: null,
    townName: null,
    CountyName: null,
    error: null,
    isLoading: true,
    activePage: "Today's Poll"
  };

  render() {
    // if (this.state.user && !this.state.user.displayName) {
    //   this.props.navigation.navigate("CreateDisplayName");
    // }
    const {
      user,
      location,
      townName,
      CountyName,
      activePage,
      isLoading
    } = this.state;

    return (
      <Fragment>
        {isLoading ? (
          <Container>
            <Content
              contentContainerStyle={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center"
              }}
            >
              <Spinner color={"tomato"} />
            </Content>
          </Container>
        ) : (
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray"
            }}
          >
            <Tab.Screen
              name="Today's Poll"
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon name="today" focused={focused} />
                )
              }}
            />
            <Tab.Screen
              name="History"
              component={HistoryRouter}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon name="history" focused={focused} />
                )
              }}
            />
            <Tab.Screen
              name="City Profile"
              component={CityProfileScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon name="location-city" focused={focused} />
                )
              }}
            />
            <Tab.Screen name="Account" component={AccountRouter} options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon name="person" focused={focused} />
                )
              }}/>
          </Tab.Navigator>
        )}
      </Fragment>
    );
  }
  // <Container>
  // <Header>
  //   <Left />
  //   <Body>
  //     <Title>{activePage}</Title>
  //     <Right />
  //   </Body>
  //   <Right />
  // </Header>
  //   <Content
  //     style={{ flex: 1 }}
  //     contentContainerStyle={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center"
  //     }}
  //   >
  //     <H1 style={styles.header1}>
  //       {townName && `Viewing Polls in ${townName}`}
  //     </H1>
  //   </Content>
  //   <Footer>
  //     <FooterTab>
  //       <Button
  //         style={styles.button}
  //         vertical
  //         onPress={() => this.setState({ activePage: "Today's Poll" })}
  //         active={this.state.activePage === "Today's Poll"}
  //       >
  //         <Icon type="MaterialCommunityIcons" name="calendar-today" />
  //         <Text style={styles.buttonText}>Today's Poll</Text>
  //       </Button>
  //       <Button
  //         style={styles.button}
  //         vertical
  //         onPress={() => this.setState({ activePage: "History" })}
  //         active={this.state.activePage === "History"}
  //       >
  //         <Icon type="MaterialCommunityIcons" name="history" />
  //         <Text style={styles.buttonText}>History</Text>
  //       </Button>
  //       <Button
  //         style={styles.button}
  //         vertical
  //         onPress={() => this.setState({ activePage: "City Profile" })}
  //         active={this.state.activePage === "City Profile"}
  //       >
  //         <Icon type="MaterialCommunityIcons" name="city" />
  //         <Text style={styles.buttonText}>City Profile</Text>
  //       </Button>
  //       <Button
  //         style={styles.button}
  //         vertical
  //         onPress={() => this.setState({ activePage: "Account" })}
  //         active={this.state.activePage === "Account"}
  //       >
  //         <Icon type="MaterialCommunityIcons" name="account" />
  //         <Text style={styles.buttonText}>Account</Text>
  //       </Button>
  //     </FooterTab>
  //   </Footer>
  // </Container>

  // firebaseUserCheck = () => {
  //   const user = firebase.auth().currentUser;

  //   if (user) {
  //     console.log(user, "user is logged in");
  //   } else {
  //     console.log("user is not logged in");
  //     this.props.navigation.navigate("LoginOrCreate");
  //   }
  // };

  // async getLocationAsync() {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);
  //   if (status !== "granted") {
  //     this.setState({
  //       error:
  //         "Please enable Location Services in your settings to join in on Pollcat"
  //     });
  //   }
  //   let location = await Location.getCurrentPositionAsync({});
  //   this.setState({ location });
  //   return location;
  // }

  // getPlaceName = location => {
  //   return axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&result_type=administrative_area_level_2&key=${GoogleMapsAuth}`
  //     )
  //     .then(({ data }) => {
  //       this.setState({
  //         placeName: data.results[0].address_components[0].long_name
  //       });
  //       return data.results;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({ error });
  //     });
  // };

  async componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // if (user && !user.displayName) {
      //   this.props.navigation.navigate("CreateDisplayName");
      // } else

      if (user) {
        this.setState({ user });
      } else {
        this.props.navigation.navigate("LoginOrCreate");
      }
    });
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        error: "Please enable Location Services to join in on Pollcat"
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&&result_type=postal_town&key=${GoogleMapsAuth}`
      )
      .then(({ data }) => {
        const townName = data.results[0].address_components[0].long_name;
        const countyName = data.results[0].address_components[1].long_name;
        this.setState({
          townName,
          countyName,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  header1: { flex: 1, justifyContent: "center" },
  input: {
    marginTop: 10
  },
  button: {
    fontSize: 10
  },
  buttonText: {
    fontSize: 13
  },
  error: {
    color: "red",
    fontSize: 20,
    marginTop: 20,
    alignContent: "center",
    flex: 1
  }
});
