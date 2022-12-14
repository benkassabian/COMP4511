import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {Alert, Image, Center, Box, Heading, FormControl, Input, Link, Button, VStack, HStack } from "native-base";
import update from 'immutability-helper';
import Header from "../components/Header";
import stylez from "../styles/global";





const gameMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const styles = {
  row: {
    flexDirection: 'row'
  },

  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  cellText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
}

const X_SYMBOL = '💧';
const O_SYMBOL = '🛀🏾';

const generateMap = (mapData, callback) => {
  const mapJsx = [];
  for (let i = 0; i < mapData.length; i++) {
    const row = mapData[i];
    const rowJsx = [];
    for (let j = 0; j < row.length; j++) {
      rowJsx.push(
        <TouchableOpacity
          onPress={() => { callback(i, j) }}
          style={styles.cell}
          key={`cell_${i}_${j}`}>
          <Text style={styles.cellText}>
            {mapData[i][j]}
          </Text>
        </TouchableOpacity>
      )
    }
    mapJsx.push(<View style={styles.row} key={`row_${i}`}>{rowJsx}</View>)
  }

  return mapJsx
}


const getWinner = (gameStage) => {
  let transposed = [[], [], []];
  let diagonals = [[], []];
  for (let i = 0; i < gameStage.length; i++) {
    const row = gameStage[i];
    for (let j = 0; j < row.length; j++) {
      transposed[i][j] = gameStage[j][i];
      if (i === j) {
        diagonals[0][i] = gameStage[i][j];
      }
      if (i === Math.abs(j - (row.length - 1))) {
        diagonals[1][i] = gameStage[i][j];
      }
    }
  }

  const allLines = gameStage.concat(transposed).concat(diagonals);
  for (let i = 0; i < allLines.length; i++) {
    const line = allLines[i];
    const isEqual = line.every((item) => item === line[0]);
    if (isEqual) {
      return line[0];
    }
  }

  return null;
}

const JumpingGame = ({ navigation }) => {

  const [gameStage, setGameStage] = useState(gameMatrix);
  const [turnSymbol, setTurnSymbol] = useState(X_SYMBOL);
  const [winnerSymbol, setWinnerSymbol] = useState();

  const nextTurnSymbol = () => {
    setTurnSymbol(turnSymbol === X_SYMBOL ? O_SYMBOL : X_SYMBOL);
  }


  const hasNulls = (inputArray) => {
    let hasNulls = false;
    for (let i = 0; i < inputArray.length; i++) {
      const row = inputArray[i];
      for (let j = 0; j < row.length; j++) {
        if (inputArray[i][j] === null) {
          hasNulls = true;
        }
      }
    }

    return hasNulls;
  }

  return (

   

    <>
    
    <Box alignItems="center" bgColor="#F3EAFE" w="100%" h="100%" px="4" pt="6">
        <Header heading={"Water-Tac-Toe"} navigation={navigation} link={'Games'}/>
       
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 32 }}>{!winnerSymbol && `It's  ${turnSymbol}'s turn`}</Text>
          <Text style={{ fontSize: 32 }}>{winnerSymbol}</Text>
          {winnerSymbol && < TouchableOpacity
            onPress={() => {
              setGameStage(gameMatrix);
              setTurnSymbol(X_SYMBOL);
              setWinnerSymbol(undefined);
            }}>
            <Text style={{ fontSize: 32, textTransform: 'uppercase' }}>restart</Text>
          </TouchableOpacity>}
        </View>
        <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
          {generateMap(gameStage, (i, j) => {
            if (winnerSymbol || gameStage[i][j]) {
              return;
            }
            console.log('clicked', i, j);
            const newStage = update(gameStage, {
              [i]: {
                [j]: { $set: turnSymbol }
              }
            })
            nextTurnSymbol();
            setGameStage(newStage);
            const winner = getWinner(newStage);
            if (winner) {
              setWinnerSymbol(`${winner} wins!`)
            } else if (!hasNulls(newStage)) {
              setWinnerSymbol('It is a tie!')
            }
          })}
        </View>

      </Box>
    </>
  );
};

export default JumpingGame;