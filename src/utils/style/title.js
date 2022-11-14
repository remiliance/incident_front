import styled from 'styled-components'
import colors from './colors'


export const Title = styled.h1`
    text-align: center;
    padding-bottom: 10px;
    ${(props) =>
        props.$islevel_2 &&
        `color: ${colors.secondary}; font-size: 50px;`}
    ${(props) =>
        props.$islevel_3 &&
        `color: ${colors.secondary}; font-size: 12px;`}
`
