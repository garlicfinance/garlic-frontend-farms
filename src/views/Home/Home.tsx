import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/garlic/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/garlic/3.png'), url('/images/garlic/3b.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'Garlic Finance')}
        </Heading>
        <Text>{TranslateString(578, 'The Best Yield Farm DApp on Binance Smart Chain.')}</Text>
      </Hero>
      <div>
        <div style={{ fontSize: "32px", textAlign: "center", margin: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center',}}>
          <Text style={{ fontSize: "32px" }} > Farming will start on Block <a style={{ color: "blue"}} href="https://bscscan.com/block/countdown/5768900">#5768900</a>. But you can still deposit.</Text>
        </div>
        <div style={{ fontSize: "32px", textAlign: "center", margin: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center',}}>
          <Text style={{ fontSize: "32px" }}>ETA :  Wed Mar 17 2021 +-20:18:41 UTC</Text>
        </div>
        <div style={{ fontSize: "32px", textAlign: "center", margin: 'auto', alignItems: 'center', display: 'flex', justifyContent: 'center',}}>
          <Text>.</Text>
        </div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard/>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
