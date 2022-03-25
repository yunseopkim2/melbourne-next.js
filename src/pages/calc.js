
import React,{useState} from 'react' 



export default function Calc() {
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1, opcode, num2} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        result = ({})
        /*memberCalc({num1, opcode ,num2}).then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))*/
    }
    return <><h1>Calc폼</h1>
    <form action=""> 
    <label><b>num1</b></label>
    <input name ="num1" type="text" onChange={handleChange} /><br />

    <label htmlFor=""><b>opcode</b></label>
    <select name="opcode" id=""onChange={handleChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
    </select>
    
    <br />

    <label htmlFor=""><b>num2</b></label>
    <input name="num2" type="text" onChange= {handleChange} /><br />

    <button onClick={handleClick}>전 송</button>
    </form>
    <div>계산결과 : {result}</div>


    </>
}