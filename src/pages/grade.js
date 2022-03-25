import React, {useState} from "react";


export default function Grade() { 
    const [inputs, setInputs] = useState({})
    const { name, kor, eng, math } = inputs;
    const [result, setResult] = useState(0)
    
    
    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberGrade({name, kor, eng, math})
        .then(res => setResult(res.data))
        .catch( err => console.log(`에러발생 : ${err}`)) 
    }
    /*const execute = () => {
        let username = document.getElementById('username').value
        console.log(username)
        let kor = document.getElementById('kor').value
        console.log(kor)
        let eng = document.getElementById('eng').value
        console.log(eng)
        let math = document.getElementById('math').value
        console.log(math)
        setUsername(username)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult('이름 : ' + (username) + '국어 : ' + Number(kor) + '영어 : ' + Number(eng) + '수학 : ' + Number(math))
        setTotal('총점 : ' +(Number(kor)+Number(eng)+Number(math)) + ' 평균 : '+(Number(kor)+Number(eng)+Number(math))/3)
    }*/
    return (<><h1>성적표</h1>
            <form>
            <div>
            
            <label><b>Username</b></label>
            <input type="text" name="name" onChange={handleChange} /><br />

            <label htmlFor=""><b>kor score</b></label>
            <input type="text" name="kor" onChange={handleChange} /><br />

            <label htmlFor=""><b>eng score</b></label>
            <input type="text" name="eng" onChange={handleChange} /><br />

            <label htmlFor=""><b>math score</b></label>
            <input type="text" name="math" onChange={handleChange} /><br />

            <button onClick={handleClick}>성적계산</button>
            <div>성적표 : {result}</div>
            
            
            </div>
            </form>
    </>)
}
;