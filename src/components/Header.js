import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <div style={{padding:20}}>
      <h1 class="ml9" style={{fontFamily: 'Cardo',fontSize:40}}>Digital Hangman!</h1>
      <p style={{fontFamily: 'Carrois Gothic SC',fontSize:20}}>Look at the empty field, guess the term, type a letter and find the word!</p>
      <p style={{fontFamily: 'Carrois Gothic SC',fontSize:20}}>You will lose if you guess more than five wrong letters.</p>
      <p style={{fontFamily: 'Carrois Gothic SC',fontSize:18,fontStyle:'italic'}}>(All the Terms are related to computer science and Engineering)</p>
    </div>
  )
}

export default Header
