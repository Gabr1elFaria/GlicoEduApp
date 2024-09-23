import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ArrowRightIcon from 'react-native-vector-icons/Entypo';
import { Button } from '@rneui/themed';
import IconCheck from 'react-native-vector-icons/FontAwesome5';
import IconTimes from 'react-native-vector-icons/FontAwesome';

import Footer from '~/components/Footer';
import { Header } from '~/components/Header';
import { HeaderFeature } from '~/components/HeaderFeature';
import { style, answer } from './style';
import { ButtonCustom } from '~/components/Button';

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
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

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
    setIsConfirmed(false);
  };

  const handleSelectAnswer = (answer: string) => {
    if (!isConfirmed) {
      setSelectedAnswer(answer);
    }
  };

  const handleConfirmAnswer = () => {
    if (currentQuestion) {
      const isCorrect = selectedAnswer === currentQuestion.rightAnswer;
      setResultMessage(
        isCorrect
          ? `Parabéns! Você acertou, a resposta correta é a letra ${currentQuestion.rightAnswer}`
          : `Ops! Você errou. A resposta correta é a letra ${currentQuestion.rightAnswer}`
      );
      setShowResult(true);
      setUsedQuestions([...usedQuestions, currentQuestion]);
      setIsConfirmed(true);
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
          {Object.entries(currentQuestion.options).map(([key, option]) => {
            const isCorrectAnswer = key === currentQuestion.rightAnswer;
            const isSelectedAnswer = key === selectedAnswer;

            let optionStyle = style.optionButton;
            let icon = null;

            if (isConfirmed) {
              if (isSelectedAnswer && isCorrectAnswer) {
                optionStyle = answer.correctSelectAnswer;
                icon = <IconCheck name="check-circle" size={30} color={'white'} />;
              } else if (isSelectedAnswer && !isCorrectAnswer) {
                optionStyle = answer.wrongSelectAnswer;
                icon = <IconTimes name="times-circle" size={30} color={'white'} />;
              } else if (isCorrectAnswer) {
                optionStyle = answer.correctAnswer;
              }
            }

            return (
              <TouchableOpacity
                key={key}
                style={
                  !isSelectedAnswer
                    ? style.optionButton
                    : isConfirmed
                      ? optionStyle
                      : answer.selectedOptionButton
                }
                onPress={() => handleSelectAnswer(key)}
                disabled={isConfirmed}>
                <View style={style.optionLetterBox}>
                  <Text style={style.optionText}>{`${key}`}</Text>
                </View>
                <View style={style.optionTextBox}>
                  <Text style={[style.optionText, { marginBottom: 3 }]}>{`${option}`}</Text>
                  <View>{icon && <View>{icon}</View>}</View>
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={style.buttonBox}>
            <Button
              buttonStyle={!selectedAnswer || isConfirmed ? style.buttonDisable : style.button}
              titleStyle={style.buttonText}
              title="CONFIRMAR"
              onPress={handleConfirmAnswer}
              disabled={!selectedAnswer || isConfirmed}
            />
          </View>

          {showResult && (
            <>
              <Text style={style.resultText}>{resultMessage}</Text>
              <View style={style.buttonNextQuestionBox}>
                <ButtonCustom
                  onPress={handleNextQuestion}
                  disabled={false}
                  propsStyle={style.buttonNextQuestion}
                  icon={<ArrowRightIcon name="arrow-with-circle-right" size={40} />}>
                  Próxima Pergunta
                </ButtonCustom>
              </View>
            </>
          )}
        </View>
      </View>
      <Footer />
    </>
  );
}
