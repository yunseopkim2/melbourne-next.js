import axios from "axios";
import React,{useState} from "react"
import style from '/pages/board/styles/board-form.module.css'
    
export default function BoardhtmlhtmlForm() {
     const [inputs, setInputs] = useState({})
    const handleChange = e => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value })
    }
    const handleClick = e => {
        e.preventDefault()
        alert(`등록할 게시글 :  ${ JSON.stringify(inputs) }` )
        axios.post('http://localhost:5000/api/board/write', inputs).then(res => {
                const result = res.data
            document.getElementById('result-span').innerHTML=`
            <h3>${result.name}님의 회원가입을 축하드립니다.</h3>
            `
            }).catch(err =>alert(err))
    }
   
    return (<>
        <h1>게시물 등록</h1>
        <form  action="" onSubmit={handleClick}>
        <div className={style.container}>
            
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">PassengerId</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="passengerId" name="passengerId" placeholder="게시글 작성자 ID 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText} onChange={handleChange}
                id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="teamId">응원팀</label>
                </div>
                <div className={style.col75}> 
                        <select id="teamId" name="teamId" onChange={handleChange}>
                             <option value="">응원팀 선택</option>
                    <option value="K09" >Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject"  style={{height:200 + "px"}} onChange={handleChange}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                        <input className={style.inputsubmit} type="submit" value="로그인" /><br />
                 <div> <span id='result-span'></span></div>
                </div>
        
        
            </div>
            </form>
    </>)
}