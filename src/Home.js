import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper className='Homepage'>This is my HomePage</Wrapper>
  )
};

const Wrapper = styled.section`
background-color : ${({theme}) => theme.colors.bg };
width : 100%;
height : 100%;
`

export default Home