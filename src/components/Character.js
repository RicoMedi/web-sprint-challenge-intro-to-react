import React, {useState} from 'react'
import styled from 'styled-components';

const Card = styled.div`

background-color: black;
width: 300px;
border: 15px solid grey;
padding: 50px;
margin: auto;

`

const CharacterList = styled.div`

font-family:'Gill Sans'


`
const CharName= styled.h2`
font-family: 'bungee spice'

`
const Details= styled.li`
display:flex;
justify-content:space-around;
color: white;
font-size: 20px;
font-family: cursive;

`
const CollapseButton = styled.button`
margin-top: 5px;
`
  
;


const Character= (props) => {
    const { data } = props;
    const [detailsVisible, setDetailsVisible] = useState({});

    // Function to toggle the visibility of character details
    const toggleDetails = (characterName) => {
      setDetailsVisible((prevDetailsVisible) => ({
        ...prevDetailsVisible,
        [characterName]: !prevDetailsVisible[characterName],
      }));
    };
    return (
        <Card>
            {data.map((character) => {
                const isDetailsVisible = detailsVisible[character.name] || false;
             return(

                 <CharacterList>
                   <CharName><br></br>{character.name}</CharName>
                   <CollapseButton onClick={() => toggleDetails(character.name)}>
                    {isDetailsVisible ? 'Collapse' : 'Expand'}
                       </CollapseButton>
                {isDetailsVisible && ( 
                    <>  
                        <Details> DOB: {character.birth_year}</Details>
                        <Details> Gender: {character.gender}</Details>
                        <Details> Height: {character.height}</Details>
                    </>
                    )}  
                 </CharacterList>
             )
             
       })}

    </Card>

)



}
export default Character;