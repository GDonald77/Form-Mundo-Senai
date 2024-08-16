import * as C from "@chakra-ui/react"
import React, { useState } from "react";

const FormProjeto = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedItems((prev) =>
          prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
      };
    

    return(
        <C.VStack spacing={5}>
            <C.Text fontSize="xl" fontWeight="bold" color="black.500">Projeto Escolhido</C.Text>
            <C.Input type="text" placeholder="Insira o Projeto"/>
            <C.Input type="text" placeholder="Área de atuação"/>
            <C.Input type="text" placeholder="Coordenador/professor"/>

            <C.FormControl>
        <C.FormLabel>Escolha os itens</C.FormLabel>
        <C.Stack spacing={4} direction="column">
          <C.Checkbox
            value="CETCC"
            isChecked={selectedItems.includes("CETCC")}
            onChange={handleCheckboxChange}
          >
            CETCC
          </C.Checkbox>
          <C.Checkbox
            value="CETAFEST"
            isChecked={selectedItems.includes("CETAFEST")}
            onChange={handleCheckboxChange}
          >
            CETAFEST
          </C.Checkbox>
          <C.Checkbox
            value="CETICC"
            isChecked={selectedItems.includes("CETICC")}
            onChange={handleCheckboxChange}
          >
            CETICC
          </C.Checkbox>
          <C.Checkbox
            value="CETAFAJU"
            isChecked={selectedItems.includes("CETAFAJU")}
            onChange={handleCheckboxChange}
          >
            CETAFAJU
          </C.Checkbox>
        </C.Stack>
      </C.FormControl>
        </C.VStack>
    )
    
   
}



export default FormProjeto