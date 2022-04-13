import axios from "axios";
import styled from '/pages/common/styles/table.module.css'
import React, {useEffect, useState} from "react";


const Table = ({ columns, colSpan, data }) => {
    const [value, setValue] =useState('')
    return (
      <>
           <h3>{data.length}개 남은 일정</h3>
            
      <table className={styled.table}>
      <thead>
        <tr className={styled.tr}>
          {columns.map((x) => (<th key={ x.listheading} className={styled.td}>일정</th>) )}
        </tr>
      </thead>
      <tbody>
        {data.length == 0 ? <td colSpan={colSpan} className={styled.td}>일정이 없습니다.</td>
          :  <td className={styled.td}>{data}</td>
  
         
       }
      </tbody>
                </table>
                
     </>
      
  )
  
}

export default function Todolist() {
    const columns = ['listheading'];
    const [data, setDate] = useState([])
  return (<>
    <h1>스케줄 목록</h1>
      <div>
          <Table columns={columns} data={data} colspan={4}/>
    </div>
    
    </>
  )
}