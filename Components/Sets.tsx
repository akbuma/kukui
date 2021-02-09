import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { getAllSets } from './../api';
import { CardSetData } from '../types/tcgTypes';

interface SetsProps {}

export const Sets: React.FC<SetsProps> = ({}) => {
  const [cardSets, setCardSets] = useState<CardSetData[] | null>(null);

  useEffect(() => {
    let data = _getCardSets();
    console.log(data);
  }, []);

  const _getCardSets = async () => {
    const data: CardSetData[] = await getAllSets();
    setCardSets(data);
  };

  return (
    <SafeAreaView>
      <Text>Sets</Text>
    </SafeAreaView>
  );
};
