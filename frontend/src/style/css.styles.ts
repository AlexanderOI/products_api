import { css } from 'styled-components'
import { colors } from '../theme/theme'

export const headerStyle = css`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.greenBlue};
  padding: 15px;
  width: 100%;
  height: 60px;
`

export const asideStyle = css`
  display: flex;
  flex-direction: column;
  background-color: ${colors.greenBlue};
  width: 20%;
  min-width: 300px;
  min-height: 100%;
`