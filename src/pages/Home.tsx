import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: #008040;
  font-size: 14rem;
  font-weight: 300;
  margin-top: 10rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const buttonStyle = `
  border-radius: 100px;
  cursor: pointer;
`

const LinkButton = styled(Link)` ${buttonStyle} `

const SimpleButton = styled.a` ${buttonStyle} `

const SurveyButton = styled(LinkButton)`
  background-image: linear-gradient(328deg, #84fab0, #8fd3f4);
`

const DashboardButton = styled(LinkButton)`
  background-image: linear-gradient(72deg, #a5d4ff, #a5d4ff, #ffb1c7, #ffdfc0);
`

const FacebookButton = styled(SimpleButton)`
  background-image: linear-gradient(72deg, #e2b9ff, #cadfff);
`

const GuestBookButton = styled(LinkButton)`
  background-image: linear-gradient(72deg, #a2d2a4, #a2d2a4, #a2d2a4, #2f66b1, #ffe9a5, #ffbd83);
`


export const Home = () => (
  <div>
    <Title>coinboard</Title>
    <ButtonWrapper>
      <SurveyButton to='/survey'>설문{'\n'}조사</SurveyButton>
      <DashboardButton to='/dashboard'>대쉬{'\n'}보드</DashboardButton>
      <FacebookButton href='https://fb.com/dimicoin'>페이{'\n'}스북</FacebookButton>
      <GuestBookButton to='/guestbook'>방명{'\n'}로ㄱ</GuestBookButton>
    </ButtonWrapper>
  </div>
)
