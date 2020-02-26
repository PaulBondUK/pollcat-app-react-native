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

const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {
  state = {
    user: null,
    location: null,
    townName: null,
    countyName: null,
    error: null,
    isLoading: true,
    activePage: "Today's Poll"
  };

  render() {
    const {
      user,
      location,
      townName,
      countyName,
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
              component={TodaysPollScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon name="today" focused={focused} />
                )
              }}
              initialParams={{ user, townName, countyName }}
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
            <Tab.Screen
              name="Account"
              component={AccountRouter}
              options={{
                tabBarIcon: ({ focused }) => (
                  <TabBarIcon name="person" focused={focused} />
                )
              }}
            />
          </Tab.Navigator>
        )}
      </Fragment>
    );
  }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
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
