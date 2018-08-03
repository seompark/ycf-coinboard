import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const WholeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 9rem;
  font-weight: 200;
  margin-bottom: 6rem;
  @media(max-width: 998px) {
    font-size: 4rem;
    margin-bottom: 4rem;
  }
  @media(max-width: 768px) {
    font-size: 3.25rem;
    margin-bottom: 3.75rem;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media(max-width: 998px) {
    display: block;
  }
`

const ButtonGroup = styled.div`
  display: flex;
`

const buttonStyle = css`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  color: white;
  font-family: 'Spoqa Han Sans', sans-serif;
  text-decoration: none;
  font-size: 6rem;
  padding: 4rem;
  width: 20vw;
  height: 20vw;
  line-height: 1;
  margin: 1rem;
  border-radius: 50%;
  cursor: pointer;
  @media(max-width: 1524px) {
    font-size: 4rem;
  }
  @media(max-width: 1232px) {
    font-size: 3.5rem;
    padding: 3rem;
  }
  @media(max-width: 998px) {
    font-size: 6rem;
    padding: 3.5rem;
    width: 40vw;
    height: 40vw;
  }
  @media(max-width: 768px) {
    font-size: 3.5rem;
    margin: 0.5rem;
    padding: 3.75rem;
  }
  @media(max-width: 560px) {
    font-size: 2.75rem;
    padding: 3rem;
  }
  @media(max-width: 450px) {
    font-size: 2.25rem;
    padding: 2.75rem;
  }
  @media(max-width: 387px) {
    font-size: 1.75rem;
    padding: 2.25rem;
  }
`

const LinkButton = styled(Link)<{ gradient?: string }>`
  ${buttonStyle}
  background-image: ${props => props.gradient};
`

const RawLinkButton = styled.a <{ gradient?: string }>`
  ${buttonStyle}
  background-image: ${props => props.gradient};
`

export const Home = () => (
  <WholeWrapper>
    <Title>Coinboard</Title>
    <ButtonWrapper>
      <ButtonGroup>
        <LinkButton gradient='linear-gradient(328deg, #84fab0, #8fd3f4)' to='/survey'>설문<br/>조사</LinkButton>
        <LinkButton gradient='linear-gradient(72deg, #ffb1c7, #ffdfc0)' to='/dashboard'>대쉬<br/>보드</LinkButton>
      </ButtonGroup>
      <ButtonGroup>
        <RawLinkButton gradient='linear-gradient(72deg, #e2b9ff, #cadfff)' href='https://fb.com/dimicoin'>페이<br />스북</RawLinkButton>
        <LinkButton gradient='linear-gradient(72deg, #ffe9a5, #ffbd83)' to='/guestbook'>방명<br />로그</LinkButton>
      </ButtonGroup>
    </ButtonWrapper>
  </WholeWrapper>
)
