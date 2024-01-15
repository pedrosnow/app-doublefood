import React, { useState } from "react";
import { 
    Container,
    InputArea,
    Saudacao,
    AreaSaudacao,
    Button,
    TextButton,
    TextEsqueceuSenha,
    TextNaoTemConta,
    AreaNaoTemConta
} from "./style";
import { 
    Image, 
    Text, 
    Platform,
    TouchableOpacity
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

import FoodLogo from "../../assets/Group.png"
import IconSenha from "../../assets/IconSenha.png"
import IconEmail from "../../assets/icons8-nova-mensagem-100.png"
import SingInput from "../../components/SingInputInput";
import { YourNavigationType } from "../../types/StackNavigationProp";
import Loading from "../../components/loading";
import api from "../../api";
import { IResponse } from "../../interface/IResponse";


export default () => {

    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [load, setLoad] = useState<boolean>(false)

    const navigation = useNavigation<StackNavigationProp<YourNavigationType>>()

    const SingIn =  async ()  => {
        
        setLoad(true)

        if(email != undefined && password != undefined){
            api.singIn(email, password)
            .then((response:IResponse) =>{
                console.log(response)
            })
            .catch((erro:Error) => console.log(erro))
        }
        
       
    }

    const Cadastro = () =>{
        navigation.navigate('singUp')
    }

    return (
     <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Loading visible={load} />
       <Image source={FoodLogo} />
        <InputArea>
            <AreaSaudacao>
                <Saudacao>
                    Seja bem vindo(a)
                </Saudacao>
                <Text style={{fontSize:13}}>
                    Faça login pora continuar
                </Text>
            </AreaSaudacao>

            <SingInput
                Imagem={IconEmail}
                placeholder="Email"
                value={email}
                onChangeText={function(element:string){
                    setEmail(element)
                }}
            />
            
            <SingInput
                Imagem={IconSenha}
                placeholder="Senha"
                value={password}
                onChangeText={function(element:string){
                    setPassword(element)
                }}
                password={true}
            />
            <TouchableOpacity>
                <TextEsqueceuSenha>Esqueceu a senha ?</TextEsqueceuSenha>
            </TouchableOpacity>
           
            <Button onPress={SingIn} >
                <TextButton>
                    ENTRAR
                </TextButton>
            </Button>

        </InputArea>

        <AreaNaoTemConta onPress={Cadastro} >
            <TextNaoTemConta>Ainda não tem uma conta? <Text style={{fontWeight:"bold"}}>Cadastra-se</Text> </TextNaoTemConta>
        </AreaNaoTemConta>


     </Container>
    )
}
  