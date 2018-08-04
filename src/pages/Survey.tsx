import * as React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import swal from 'sweetalert2'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffeef3;
  min-height: 100vh;
`

const Title = styled.h1`
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  margin: 2.75rem 0;
  word-break: keep-all;
`

const Empathized = styled.span`
  color: #ff0054;
`

const TextArea = styled.textarea`
  box-sizing: border-box;
  font-family: "Spoqa Han Sans", sans-serif;
  font-size: 1.5rem;
  background-color: white;
  border-radius: 30px;
  width: 100%;
  border: 0;
  box-shadow: 0 -21px 111px 0 rgba(255, 64, 95, 0.2);
  padding: 0.5rem 1rem;
  min-height: 40vh;
`

const Input = styled.input`
  box-sizing: border-box;
  font-family: "Spoqa Han Sans", sans-serif;
  font-size: 1.5rem;
  width: 80%;
  border: 0;
  border-radius: 30px;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
`

const SubmitButton = styled.button`
  box-sizing: border-box;
  border-radius: 40px;
  background-color: #ff0054;
  color: white;
  font-weight: bold;
  font-size: 1.75rem;
  width: 90%;
  margin: 2rem 2rem;
  padding: 1rem 0;
  border: 0;
  cursor: pointer;

  &:active {
    background-color: #ff0094;
  }
`

export class Survey extends React.Component<{}, {
  content: string,
  name: string,
  phone: string,
  age: string,
  isLoading: boolean
}> {
  constructor (props: any) {
    super(props)
    this.state = {
      content: '',
      name: '',
      phone: '',
      age: '',
      isLoading: false
    }
  }
  public handleChangeFactory (key: string) {
    return function (event: any) {
      this.setState({
        [key]: event.target.value
      })
      console.log(event.target.value)
    }.bind(this)
  }
  public async submit () {
    if (this.state.isLoading) return

    console.log(this.validateForm())
    if (!this.validateForm()) {
      swal({
        type: 'warning',
        text: '모든 정보를 채워주세요!'
      })
      return
    }

    this.setState({
      isLoading: true
    })

    const { data } = await axios.request({
      url: '/posts',
      baseURL: 'http://45.76.196.33:8081',
      method: 'post',
      data: {
        ...this.state
      }
    })

    this.setState({
      isLoading: false,
    })

    if (data.result === true) {
      await swal({
        type: 'success',
        text: `당첨을 축하합니다! 본 화면을 스크린샷 찍고 코인 부스에 오시면 아마 ${data.name}를 드립니다.`
      })
    } else {
      await swal({
        type: 'error',
        text: '아쉽게도 당첨되지 않으셨습니다 ㅠㅠ..'
      })
    }


  }
  public validateForm () {
    return (this.state.content && this.state.name && this.state.age && this.state.phone)
  }
  render () {
    return (
      <div>
        <Wrapper>
          <Title><Empathized>청소년</Empathized>들이 겪고 있는 <br/> <Empathized>사회 문제</Empathized>는 무엇이 있을까요?</Title>
          <TextArea onChange={e => this.handleChangeFactory.bind(this)('content')(e)}>여기 적어주세요</TextArea>
          <Input placeholder='이름' onChange={e => this.handleChangeFactory.bind(this)('name')(e)}/>
          <Input placeholder='나이' onChange={e => this.handleChangeFactory.bind(this)('age')(e)}/>
          <Input placeholder='전화번호' onChange={e => this.handleChangeFactory.bind(this)('phone')(e)}/>
          <SubmitButton onClick={e => this.submit()}>{ this.state.isLoading ? '제출 중..' : '제출'}</SubmitButton>
          <p>수집된 개인정보는 경품 전달 시 본인 확인 용도로만 쓰이며, YCF가 끝나면 모두 폐기처분합니다.</p>
        </Wrapper>
      </div>
    )
  }
}
