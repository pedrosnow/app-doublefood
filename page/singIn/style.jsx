import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: #F1F1F1;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const AreaSaudacao = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 50px;
`
export const Saudacao = styled.Text`
    font-size: 23px;
    font-weight: 700;
`

export const InputArea = styled.View`
    width: 100%;
    padding: 0 25px;
`


export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 100px;
    margin-top: 40px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    color: #fff;
`

export const TextEsqueceuSenha = styled.Text`
    margin-top: 12px;
    width: 150px;
    margin-left: 230px;
    font-size: 14px;
    font-weight: 600;
`

export const AreaNaoTemConta = styled.TouchableOpacity`
    position: absolute;
    bottom: 40px;
`

export const TextNaoTemConta = styled.Text`
   
    font-size: 14px;
    font-weight: 600;

`