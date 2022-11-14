
import DefaultPicture from '../../assets/ci.png'
import Card from '../../components/Card'
import { Title } from '../../utils/style/title'
import { useFetch } from '../../utils/hooks'
import { useEffect, useState, useContext } from 'react'
import { Loader } from '../../utils/style/Atoms'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { ThemeContext } from '../../utils/context'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`


function Cmdbci() {
  const { theme } = useContext(ThemeContext)
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [freelancersList, setFreelancesList] = useState([])

  useEffect(() => {
  async function fetchFreelances() {
    setDataLoading(true)
    try {
      const response = await fetch(`http://localhost:8000/freelances`)
      const { freelancersList } = await response.json()
      setFreelancesList(freelancersList)
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setDataLoading(false)
    }
  }
  fetchFreelances()
}, [])

if (error) {
  return <span>Oups il y a eu un problème</span>
}

  return (
    <div>

    <Title $level_2>Freelance :</Title>
    <Title $level_3> Voici la liste des freelancers :</Title>
    <ResultsContainer theme={theme}>
        {freelancersList.map((free, index) => (
            <Card theme={theme}
                key={`${free.name}-${index}`}
                label={free.job}
                picture={free.picture}
            />

        ))}
    </ResultsContainer>

    </div>
  )
}
export default Cmdbci
