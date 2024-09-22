import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';
import { style } from './style';

import questionsData from '../../data/questions.json';

interface Question {
  id: number;
  question: string;
  options: Record<string, string>;
  rightAnswer: string;
}

export function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [usedQuestions, setUsedQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffledQuestions = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
    loadNextQuestion(shuffledQuestions);
  }, []);

  const loadNextQuestion = (shuffledQuestions: Question[] = questions) => {
    if (shuffledQuestions.length === 0) return;

    if (usedQuestions.length === questionsData.length) {
      setUsedQuestions([]);
      setQuestions([...questionsData].sort(() => Math.random() - 0.5));
    } else {
      const nextQuestion = shuffledQuestions.find(
        (q) => !usedQuestions.some((uq: { id: any }) => uq.id === q.id)
      );
      setCurrentQuestion(nextQuestion || null);
    }

    setSelectedAnswer(null);
    setShowResult(false);
    setResultMessage(null);
  };

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleConfirmAnswer = () => {
    if (currentQuestion) {
      const isCorrect = selectedAnswer === currentQuestion.rightAnswer;
      setResultMessage(isCorrect ? 'Resposta correta!' : 'Resposta errada.');
      setShowResult(true);
      setUsedQuestions([...usedQuestions, currentQuestion]);
    }
  };

  const handleNextQuestion = () => {
    loadNextQuestion();
  };

  if (!currentQuestion) return <Text>Carregando...</Text>;

  return (
    <>
      <Header />
      <HeaderFeature backgroundColor="#39BAAF" text="QUIZ" />
      <View style={style.mainContainer}>
        <View style={style.container}>
          <Text style={style.questionText}>{currentQuestion.question}</Text>
          {Object.entries(currentQuestion.options).map(([key, option]) => (
            <TouchableOpacity
              key={key}
              style={[style.optionButton, selectedAnswer === key && style.selectedOptionButton]}
              onPress={() => handleSelectAnswer(key)}>
              <View style={style.optionLetterBox}>
                <Text style={[style.optionText]}>{`${key}`}</Text>
              </View>
              <Text style={[style.optionText, { marginBottom: 3 }]}>{`${option}`}</Text>
            </TouchableOpacity>
          ))}

          {selectedAnswer && <Button title="Confirmar" onPress={handleConfirmAnswer} />}

          {showResult && (
            <>
              <Text style={style.resultText}>{resultMessage}</Text>
              <Button title="Outra pergunta" onPress={handleNextQuestion} />
            </>
          )}
        </View>
      </View>
      <Footer />
    </>
  );
}
