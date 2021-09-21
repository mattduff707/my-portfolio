
import styled from 'styled-components'
import CoolButton from '../../../CoolButton'
import DemoIcon from '../../../../icons/Demo'
import GithubIcon from '../../../../icons/Github'

const ButtonTray = ({github, demo}) => {
    return (
        <Wrapper>
            {github &&
             <BtnLink href={github} target="_blank" rel="noreferrer">
                <StyledButton>
                     <GithubIcon style={{marginRight: '5px'}} />
                     <BtnText>GitHub</BtnText>
                </StyledButton>
             </BtnLink>
             }
            {demo &&
             <BtnLink href={demo} target="_blank" rel="noreferrer">
                 <StyledButton>
                     <DemoIcon style={{marginRight: '5px'}} />
                     <BtnText>Demo</BtnText>
                 </StyledButton>
             </BtnLink>
                     }
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
padding: 20px;
background-color: var(--color-primary);
border: 8px solid var(--color-inset-light);
  border-right: 8px solid var(--color-inset);
  border-bottom: none;
  border-radius: 15px 15px 0px 0px;
  z-index: 20;
  transform: translateY(8px);
`
const BtnLink = styled.a`
    margin: 0px 5px;
`

const StyledButton = styled(CoolButton)`
  padding: 12px 14px;
  font-size: 1.1rem;
  display: flex;
  align-items: stretch;
  @media (max-width: 1024px) {
      font-size: 0.9rem
  }
`
const BtnText = styled.p`
  display: block;
  /* padding-top: 2px; */
`

export default ButtonTray
