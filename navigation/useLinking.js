import { useLinking } from "./node_modules/@react-navigation/native";
import { Linking } from "./node_modules/expo";

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Root: {
        path: "root",
        screens: {
          Home: "home",
          Login: "login"
        }
      }
    }
  });
}
