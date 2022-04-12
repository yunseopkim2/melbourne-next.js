import axios from "axios";
import { useState } from "react"

export default function Singup() {
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target;
        setInputs({...inputs, [name]:value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/signup', inputs).then(res => {
            const result = res.data
            document.getElementById('result-span').innerHTML=`
            <h3>${result.name}님 로그인 완료.</h3>
            `
            
        }).catch(err =>alert(err))
    }
    return <>
        <h1>회원가입폼</h1>
        <form  action="" onSubmit={handleSubmit}>
     <div>
     <label><b>사용자 ID</b></label><br/>
     <input name="username" onChange={handleChange} placeholder="사용자 ID"/><br/>
     <label><b>비밀번호</b></label><br/>
            <input name="pw" onChange={handleChange} placeholder="비밀번호" /><br />
        
     
                <input type="submit" value="로그인" /><br />
                 <div> <span id='result-span'></span></div>
     </div>
    </form>
    
     </>
}