import React from "react";
import PollCardToday from "./PollCardToday";

// export default function CardGeneratorToday(questionData, endTime) {
//   const { img } = questionData;
//   return [
//     {
//       image: {
//         uri: "https://i.postimg.cc/7ZPTGpGR/marmite.jpg"
//       },
//       height: 500,
//       renderItem: ({ item, index }) => <PollCardToday endTime={endTime} />,
//       renderDetails: ({ item, index }) => (
//         <View style={{ paddingVertical: 30, paddingHorizontal: 16 }}>
//           <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
//             Test text
//           </Text>
//         </View>
//       )
//     }
//   ];
// }

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

// const CARDS = [
//   {
//     image: {
//       uri: "https://i.postimg.cc/7ZPTGpGR/marmite.jpg"
//     },
//     height: 500,
//     renderItem: ({ item, index }) => (
//       // <View>
//       //   <Text
//       //     style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 30, paddingLeft: 10 }}
//       //   >
//       //     Marmite...
//       //   </Text>
//       // </View>
//       <PollCardToday endTime={this.state.endTime} />
//     ),
//     renderDetails: ({ item, index }) => (
//       /* You can also provide custom content per item */
//       <View style={{ paddingVertical: 30, paddingHorizontal: 16 }}>
//         <Text style={{ color: "rgba(0, 0, 0, 0.7)", fontSize: 18 }}>
//           Test text
//         </Text>
//       </View>
//     )
//   }
// ];

export default CARDS;
