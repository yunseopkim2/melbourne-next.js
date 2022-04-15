import axios from "axios";
import styled from '/pages/common/styles/table.module.css'
import React, {useEffect, useState} from "react";


const Table = ({ columns, colSpan, data }) => {
  return(
    <table className={styled.table}>
      <thead>
        <tr className={styled.tr}>
          {columns.map((x) => (<th key={x.passengerId} className={styled.td}>{x}</th>) )}
        </tr>
      </thead>
      <tbody>
        {data.length == 0 ? <td colSpan={colSpan} className={styled.td}>데이터가 없습니다.</td>
          : data.map((x) => (
            <tr className={styled.tr} key={x.passengerId}>
             <td className={styled.td}>{ x.passengerId}</td>
                        <td className={styled.td}>{ x.name}</td>
                        <td className={styled.td}>{ x.teamId}</td>
                        <td className={styled.td}>{ x.subject}</td>
            </tr>
      )) }
      </tbody>
    </table>
  )
  
}

export default function Boardlist() {
  const columns = ["글번호", "제목", "작성자", "주제"];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/board/list').then(res => {
      setData(res.data.boards)
    }).catch()
  },[])
  return (<>
    <h1>게시판</h1>
    <div>
    <Table columns={columns} colSpan ={4} data={data}/>
    </div>
   
    </>
  )
}