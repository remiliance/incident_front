import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/ci.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors.js'
import { ThemeContext } from '../../utils/context'
import { useContext, useState } from 'react'

const CardsContainer = styled.div`
  display: grid;
  gap: 2px;
  align-items: center;
  justify-items: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  align-items: center;
  justify-items: center;
`

const CardTitle = styled.span`
  color: #5843e8;
  font-size: 12px;
  font-weight: bold;
`


function Card({ label, title, picture }) {
  const { theme } = useContext(ThemeContext)
  const [isFavorite, setIsFavorite] = useState(false)
  const star = isFavorite ? '⭐️' : ''
  return (
  <CardsContainer theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
  <CardWrapper theme={theme}>
    <CardLabel>{label}</CardLabel>
    <CardImage src={picture} alt="ci" />
    <CardTitle>{star} {title} {star}</CardTitle>
  </CardWrapper>
  </CardsContainer>
)
}

Card.propTypes = {
label: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
label: '',
title: '',
picture: DefaultPicture,
}

export default Card
