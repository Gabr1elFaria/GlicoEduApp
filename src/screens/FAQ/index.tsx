import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';
import { style } from './style';
import faqData from '../../data/faq.json';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Footer from '~/components/Footer';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <ScrollView style={style.main}>
        <Header />
        <HeaderFeature backgroundColor="#1E1E1E" text="PERGUNTAS FREQUENTES" textColor="#FFFFFF" />
        <View style={style.container}>
          {faqData.map((item: FaqItem) => (
            <View key={item.id} style={style.accordionContainer}>
              <TouchableOpacity onPress={() => toggleAccordion(item.id)} style={style.accordion}>
                <Text style={style.questionText}>{item.question}</Text>
                <FontAwesome5
                  name={expandedId === item.id ? 'chevron-up' : 'chevron-down'}
                  size={16}
                  color="#333"
                  style={style.icon}
                />
              </TouchableOpacity>
              {expandedId === item.id && (
                <View style={style.answerContainer}>
                  <Text style={style.answerText}>{item.answer}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}
