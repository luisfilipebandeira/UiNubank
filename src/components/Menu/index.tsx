import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import { Container, Code, Nav, NavItems, NavText, SignOutButton, SignOutButtonText } from './styles';

import logo from '../../assets/Nubank_Logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props{
    translateY: object
}

const Menu: React.FC<Props> = ({translateY}) => {
  return (
      <Container style={{
          opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1]
          })
      }}>
          <Code>
          <QRCode
            value="https://nubank.com.br"
            logo={logo}
            logoSize={30}
            logoBackgroundColor='transparent'
            />
          </Code>

          <Nav>
              <NavItems>
                  <Icon name="help-outline" size={20} color="#fff" />
                  <NavText>Me ajuda</NavText>
              </NavItems>
              <NavItems>
                  <Icon name="person-outline" size={20} color="#fff" />
                  <NavText>Meu perfil</NavText>
              </NavItems>
              <NavItems>
                  <Icon name="credit-card" size={20} color="#fff" />
                  <NavText>Configurar Cartão</NavText>
              </NavItems>
              <NavItems>
                  <Icon name="smartphone" size={20} color="#fff" />
                  <NavText>Configurações do app</NavText>
              </NavItems>
          </Nav>

          <SignOutButton onPress={() => {}}>
            <SignOutButtonText>
                Sair do app
            </SignOutButtonText>
          </SignOutButton>
      </Container>
  );
}

export default Menu;