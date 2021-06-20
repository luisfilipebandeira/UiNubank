import React from 'react';

import { Container, CardView, CardHeader, CardContent, Title, Description, CardFooter, Annotation } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../Menu';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const Card: React.FC = () => {
    let offset = 0;
    let opened = false;
    const translateY = new Animated.Value(0);

    const animatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY
                }
            }
        ],
        {useNativeDriver: true}
    )

    function onHandlerStateChange(event: React.ChangeEvent<HTMLInputElement>){
        if (event.nativeEvent.oldState === State.ACTIVE) {
            let opened = false;
            const { translationY } = event.nativeEvent;
      
            offset += translationY;
      
            if (translationY >= 100) {
              opened = true;
            } else {
              translateY.setValue(offset);
              translateY.setOffset(0);
              offset = 0;
            }
      
            Animated.timing(translateY, {
              toValue: opened ? 420 : 0,
              duration: 200,
              useNativeDriver: true,
            }).start(() => {
              offset = opened ? 420 : 0;
              translateY.setOffset(offset);
              translateY.setValue(0);
            });
          }
    }

  return (
      <Container>
         <Menu translateY={translateY} />

         <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChange}
         >
            <CardView style={{
                transform: [{
                    translateY: translateY.interpolate({
                        inputRange: [-300, 0, 420],
                        outputRange: [-50, 0, 420],
                        extrapolate: 'clamp'
                    })
                }]
            }}>
                <CardHeader>
                    <Icon name="attach-money" size={28} color="#666" />
                    <Icon name="visibility-off" size={28} color="#666" />
                </CardHeader>
                <CardContent>
                    <Title>Saldo disponível</Title>
                    <Description>R$ 197.611,65</Description>
                </CardContent>
                <CardFooter>
                    <Annotation>
                        Transferência de R$30.000 recebida de Caio hoje as 18:00hrs
                    </Annotation>
                </CardFooter>
            </CardView>
          </PanGestureHandler>
      </Container>
  );
}

export default Card;