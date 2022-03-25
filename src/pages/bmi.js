import React, {useState} from 'react' 

export default function Bmi(){

    const [inputs, setInputs] = useState({})
    const { name, weight, height } = inputs; 

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        console.log(` 사용자이름: ${JSON.stringify(bmiRequest)}`)
        memberBmi(bmiRequest)
        .then( res => {
            alert(res.data)
        })
        .catch( err => console.log(`에러발생 : ${err}`))
    }


    return (<>
        <form>
        <h1>Bmi폼</h1>
   
    
    <div>
    <label><b>Username</b></label>
    <input type="text" name="name" onChange={handleChange}/><br />

    <label htmlFor=""><b>height</b></label>
    <input type="text" name="height" onChange={handleChange} /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="text" name="weight" onChange={handleChange} /><br />
    <button onClick={handleClick}>BMI 체크</button>
    </div> 
    </form>
   
    </>)
}