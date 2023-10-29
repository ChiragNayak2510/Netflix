import React from 'react'
import movieLogo from '../assets/movielogo.jpeg'
import styled from 'styled-components'
export default function MovieLogo() {
  return (
    <Container>
      <img src={movieLogo} alt="movielogo" />
    
    </Container>
  )
}
const Container = styled.div`
`;

