import React from "react";
import PollCardToday from "./PollCardToday";

const CARDS = [
  {
    image: {
      uri: "https://i.postimg.cc/7ZPTGpGR/marmite.jpg"
    },
    height: 500,
    renderItem: ({ item, index }) => <PollCardToday endTime={1242342342} />,
    renderDetails: ({ item, index }) => (
      <View style={{ paddingVertical: 30, paddingHorizontal: 16 }}>
        <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
          Test text
        </Text>
      </View>
    )
  }
];

export default CARDS;
