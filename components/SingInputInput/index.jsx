import {
    ContainerInput,
    Input,
    Image
} from './style'


export default ({placeholder, Imagem, value, onChangeText, password = false}) => {
    return (
        <ContainerInput>
            <Image source={Imagem} />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#000"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </ContainerInput>
    )
}