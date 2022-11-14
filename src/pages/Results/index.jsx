import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useFetch } from '../../utils/hooks'
import { StyledLink, Loader } from '../../utils/style/Atoms'
import { ThemeContext } from '../../utils/context'
import { Title } from '../../utils/style/title'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`


function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers)
  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

function Results() {
  const { answers } = useContext(SurveyContext)
  console.log(answers)
  //const fetchParams = formatFetchParams(answers)
  //console.log(fetchParams)

  return (
    <div>
    <Title $level_2>R2sultats:</Title>
    <Title $level_3> Voici la liste des réponses:</Title>
    <ResultsContainer >
    {
    Object.entries(answers)
    .map( ([key, value]) => <div> {key}: {value.toString()} -</div> )
    }
    <StyledLink $isFullLink to="/cmdbci">
            Découvrez nos profils
    </StyledLink>
    </ResultsContainer>

    </div>
  )
}

export default Results
