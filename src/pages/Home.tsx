import * as React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-family: "NanumSqaure", system-ui;
  color: #008040;
  font-size: 3em;
  font-weight: 600;
  margin-top: 10rem;
`

export const Home = () => (
  <Wrapper>
    <Title>COIN in Dimigo 설문조사</Title>
    <Button type='primary' size='large'>설문조사</Button>
    <Button type='primary' size='large'>대쉬보드</Button>
  </Wrapper>
)
