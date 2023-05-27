import React from "react";
import { Button, ContainerScroll, Row, TextH4, TextInput } from "../../theme";
import "boxicons";

const Lista = () => {

  const [lista, setLista] = React.useState ([]);
  const [item, setItem] = React.useState('');
 
   const deletarItem = (fruta) => {
     setLista(lista.filter(cadaFruta => cadaFruta != fruta))
   }

  return (
    <>
      <Row>
        <TextInput className="w100" type="text" value={item} placeholder="Digite o produto ..." onChange={(e) => setItem(e.target.value)}/>
        <Button onClick={() => {setLista([...lista, item]); setItem('');}}>
          <box-icon name="plus-circle" color="white"></box-icon>
        </Button>
      </Row>

      <ContainerScroll>
        {lista.map((item, key) => (
          <Row key={key} className="list-item">
            <TextH4>{item}</TextH4>
            <Button onClick={() => deletarItem(item)}>
              <box-icon name="trash" color="white"></box-icon>
            </Button>
          </Row>
        ))}
      </ContainerScroll>
    </>
  );
};

export default Lista;
