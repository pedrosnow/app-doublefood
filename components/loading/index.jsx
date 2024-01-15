import { lazy } from "react"
import { Modal, View, Text, ActivityIndicator} from "react-native"
import styled from "styled-components"

const Container = styled.View`
    background-color: #fff;
    width: 80%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

export default ({visible}) =>{
    return(
        <Modal
        transparent={true}
        animationType="fade"
        visible={visible}
    >
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(0, 0, 0, 0.400)" }}>
            <Container>
                <Text>Carregando</Text>
                <ActivityIndicator style={{
                    marginTop: 20
                }} size='large' />
            </Container>
        </View>

    </Modal>
    )
}