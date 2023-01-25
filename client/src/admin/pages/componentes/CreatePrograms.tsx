import React, {useState} from 'react'
import axios from 'axios';
import styled from "styled-components";
import InputAdmin from '../../components/UI/Input';
import TextArea from '../../components/UI/Textarea';
import SelectBox from '../../components/UI/SelectBox';

interface CreateProgram {
  id: string,
  startingtime:string,
  endtime: string,
  regularnumber:string,
  title: string,
  description:string,
  price: string,
  tag?: string,
  url: string,
}

export const ScreenWrapper = styled.div<{modal : boolean}>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #00000042;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: ${props => !props.modal ? "none" : null};
  &.closed {
    display: none;
  }
`

const RowWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: auto;
  padding: 3%;
  justify-content: center;
  align-items: center;
  gap: 1vh;
`
const Row1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  grid-column: 1 / 2;
  width: 100%;
  /* height: 5%; */
  align-items: center;
  div{
    height: 30%;

  }
  input{
    width: 15%;
    height: 30%;
  }
  label{
    height: 30%;

    margin-left: 5px;
    margin-right: 10px;
  }
  div {
    width: 100%;
  }
`
const Row2 = styled.div`
  display: flex;
  align-items: center;
  label{
    margin-left: 5px;
    margin-right: 5px;
  }
  width: 100%;
  height: 10%;
  input {
    width: 80%;
    height: 30px;
  }

`
const Row3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
  align-items: center;
  div {
    width: 70%;
  }
  
  :nth-child(1){
    width: 80%;
  }

`
const Row4 = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  input {
    width: 80%;
    height: 30px;
  }
  

`
const Row5 = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: flex-end;
  button{
    margin-right: 20px;

  }
`
const PriceDiv = styled.div`
  label {
    margin-right: 5px;
  }
`

export const Button = styled.button`
  width: 100px;
  height: 80px;
  background-color: blue;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
  &.closeButton {
    width: 40px;
    height: 40px;
    padding: 5px;
    font-size: 16px;
    background-color: #991515;
    border-radius: 5px;
    border: none;
  } 
`

const CreatePrograms = () =>{
  const [id,setId] = useState<string>('');
  const [startingtime,setStartingtime] = useState<string>('');
  const [endtime,setEndtime] = useState<string>('');
  const [title,setTitle] = useState<string>('');
  const [description,setDescription] = useState<string>('');
  const [tag,setTag] = useState<string>('');
  const [url,setUrl] = useState<string>('');
  const [regularnumber,setRegularnumber] = useState<any>();
  const [modal, setModal] = useState<boolean>(true);
  const [price,setPrice] = useState<any>(0);
  const handleTitleChange =(e: React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement
    setTitle(target.value);
  }
  const handleDescriptionChange =(e: React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement
    setDescription(target.value);
  }
  const handleTagChange =(e: React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement
    setTag(target.value);
  }
  const handleUrlChange =(e: React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement
    setUrl(target.value);
  }
  const handleTherapistChange =(e: React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement
    setId(target.value);
  }
  const handleRegularnumberChange =(e: React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement
    setRegularnumber(target.value);
  }
  const handleStartingtimeChange =(e: React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement
    setStartingtime(target.value);
  }
  const handleEndtimeChange =(e: React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement
    setEndtime(target.value);
  }
  const handlePriceChange =(e: React.ChangeEvent) =>{
    const target = e.target as HTMLInputElement
    setPrice(target.value);
  }
  const handleSubmit =(e:React.FormEvent) =>{
    e.preventDefault();
    const reqbody:CreateProgram = {
    id,
    startingtime,
    endtime,
    regularnumber,
    title,
    price,
    description,
    tag,
    url,
    }
    console.log(id,startingtime,endtime,regularnumber,title,description,tag,url)
    axios.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(reqbody))
    .then((res)=>console.log)
    .catch((err)=>console.log)
  }
  return (
    <ScreenWrapper modal={modal}>
      <form onSubmit={handleSubmit}>
        <Button className='closeButton' type='button' onClick={()=>setModal(!modal)}>X</Button>
      <RowWrapper>
        <Row1>
          <div>세션시간</div>
          <div>
            <label htmlFor='startingtime'>시작일시</label>
            <InputAdmin category='date' type='datetime-local'  id='startingtime' onChange={handleStartingtimeChange}/>
            <label htmlFor='endtime' >종료일시</label>
            <InputAdmin type='datetime-local' id='endtime' onChange={handleEndtimeChange}/>
            <label htmlFor='regularnumber'>정원</label>
            <InputAdmin type='number' id='regularnumber'/>
            <label htmlFor='therapist'>상담사</label>
            <InputAdmin type='text' id='therapist'/>
          </div>
        </Row1>
        <Row2>
          <label htmlFor='title'>제목</label>
          <InputAdmin type='text' id='title' onChange={handleTitleChange}/>
        </Row2>
        <Row3>
          <PriceDiv>
            <label htmlFor='price'>가격</label>
          <InputAdmin category='birth' type='number' id='price' onChange={handlePriceChange}></InputAdmin>
          </PriceDiv>
          <SelectBox></SelectBox>
          <TextArea id='description' cols={30} rows={15} child='설명' onChange={handleDescriptionChange} placeholder='프로그램 설명'/>
        </Row3>
        <Row4>
          <label htmlFor='url'>이미지 url</label>
          <InputAdmin type='text'id='url' placeholder='url을 입력해주세요' onChange={handleUrlChange}/>
        </Row4>
        <Row5>
          <Button>등록</Button>
        </Row5>
      </RowWrapper>
      </form>
    </ScreenWrapper>   
  )



}

export default CreatePrograms;