import * as C from "@chakra-ui/react"
import React, { useState } from "react";


const FormPessoal = () => {
    const [gender, setGender] = useState('');
    return(
        <C.VStack spacing={5}>
            <C.Text fontSize="xl" fontWeight="bold" color="black.500">Informações do Aluno</C.Text>
            <C.Input type="email" placeholder="Insira seu email"/>
            <C.Input type="text" placeholder="Insira seu nome"/>
            <C.Input type="text" placeholder="Insira seu CPF"/>
            <C.Input type="text" placeholder="Insira seu telefone"/>

            <C.FormControl>
        <C.FormLabel>Gênero</C.FormLabel>
        <C.RadioGroup onChange={setGender} value={gender}>
          <C.Stack spacing={4} direction="row">
            <C.Radio value="masculino">Masculino</C.Radio>
            <C.Radio value="feminino">Feminino</C.Radio>
          </C.Stack>
        </C.RadioGroup>
      </C.FormControl>
        </C.VStack>
    )
    
   
}



export default FormPessoal