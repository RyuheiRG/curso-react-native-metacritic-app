import { Text, View } from "react-native";

export function Score({ score, maxScore }) {
  const getColor = () => {
    if (score === "N/A") return "bg-gray-500";
    const percetage = (score / maxScore) * 100;
    if (percetage < 50) return "bg-red-500";
    if (percetage < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  const className = getColor();

  return (
    <View
      className={`${className} w-8 h-8 rounded-full justify-center items-center`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}
