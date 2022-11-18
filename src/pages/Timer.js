import { Box, Center, Button, VStack, HStack, IconButton, useToast } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "../components/Header";
import React from "react";

import { Text } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function Timer({ navigation }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(5);
  const [isReset, setIsReset] = React.useState(true);
  const [key, setKey] = React.useState(0);
  const toast = useToast();

  const handleStart = () => {
    setIsPlaying(!isPlaying);
    setIsReset(false);
  };

  const handleReset = () => {
    setKey(prevKey => prevKey + 1);
    setIsPlaying(false);
    setIsReset(true);
  };

  const handleComplete = () => {
    handleReset();
    toast.show({title:"TIME'S UP", placement: "top"})
  
  };

  return (
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%"px="4" >
      <VStack alignContent="center" justifyContent="center" py="2" h="100%" w="100%" mt="2" px="4" space="4">
        <Center w="100%">
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={duration*60}
            colors={['#AEAEDA', '#8888D7', '#B42934']}
            colorsTime={[duration, duration / 2, 0]}
            size={320}
            strokeWidth={18}
            trailStrokeWidth={12}
            rotation={"clockwise"}
            key={key}
            onComplete={() => handleComplete()}
          >
            {({ remainingTime }) => {
              const minutes = Math.floor(remainingTime / 60)
              const seconds = remainingTime % 60
              return <Text style={{fontSize: 66, color: "#6666AE"}}>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</Text>
            }}
          </CountdownCircleTimer>
          <HStack w="100%" justifyContent="center" space={120}>
            <IconButton variant="ghost" rounded="3xl" size="lg" px="12" py="4" isDisabled={!isReset}
              _icon={{ as: MaterialIcons, name: "add", size: "3xl" }}
              onPress={() => setDuration(duration + 1)}
            />
            <IconButton variant="ghost" rounded="3xl" size="lg" px="12" py="4" isDisabled={!isReset}
              _icon={{ as: MaterialIcons, name: "remove", size: "3xl" }}
              onPress={() => setDuration(duration - 1)}
            />
          </HStack>
        </Center>
        <Button rounded="3xl" mt="4" size="lg" p="4" onPress={() => handleStart()}>
          <Text style={{ fontSize: 20, color: "white" }} >{isPlaying ? 'Stop' : (isReset ? 'Start' : 'Resume')}</Text>
        </Button>
        <Button rounded="3xl" mt="2" size="lg" p="4" variant="outline" onPress={() => handleReset()}>
          Cancel
        </Button>

      </VStack>
    </Box>
  );
}
