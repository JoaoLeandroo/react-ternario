
const Input = ({placeholder}) => {
  return(
    <input placeholder={placeholder}/>
  )
}

export default function App() {

  const condicional = true;

  return(
    <div>
      {
        condicional ? (
          <Input placeholder={'Primeira Condição '}/> 
        ) : (
          <Input placeholder={'Segunda Condição'}/>
        )
      }
    </div>
  )
}