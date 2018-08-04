import * as React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap-reverse row-reverse;
`

const Card = styled.div`
  font-family: "Spoqa Han Sans", sans-serif;
  font-size: 3rem;
  box-sizing: border-box;
  width: 400px;
  height: 400px;
  margin: 1rem;
  padding: 2rem;
  border: 3px solid;
  word-break: keep-all;
  text-align: center;
`

const Title = styled.h1`
  font-family: "Spoqa Han Sans", sans-serif;
  font-weight: bold;
  font-size: 4rem;
  margin: 3rem 0 4rem 2rem;
`

export class Dashboard extends React.Component<{}, {
  posts: Array<{
    content: string,
    date: Date,
    name: string,
    age: string,
    phone: string
  }>
}> {
  constructor (props: any) {
    super(props)

    this.state = {
      posts: []
    }

    setInterval(this.updatePosts.bind(this), 3000)
  }

  public async updatePosts () {
    const { data } = await axios.get('http://45.76.196.33:8081/posts')

    this.setState({
      posts: data
    })
  }

  render () {
    return (
      <div>
        <Title>COIN DASHBOARD - 청소년들이 느끼는 사회문제</Title>
        <CardWrapper>
          {this.state.posts.map((v, i) => <Card key={i}>{v.content}</Card>)}
        </CardWrapper>
      </div>
    )
  }
}
