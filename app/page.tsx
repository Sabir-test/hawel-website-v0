import { SiteHeader } from '@/components/hawel/site-header'
import { Hero } from '@/components/hawel/hero'
import { ExecutiveSummary } from '@/components/hawel/executive-summary'
import { CompanyIdentity } from '@/components/hawel/company-identity'
import { MarketOpportunity } from '@/components/hawel/market-opportunity'
import { Products } from '@/components/hawel/products'
import { Comparison } from '@/components/hawel/comparison'
import { Pricing } from '@/components/hawel/pricing'
import { GoToMarket } from '@/components/hawel/go-to-market'
import { Architecture } from '@/components/hawel/architecture'
import { Roadmap } from '@/components/hawel/roadmap'
import { WhyHawel } from '@/components/hawel/why-hawel'
import { SiteFooter } from '@/components/hawel/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ExecutiveSummary />
        <CompanyIdentity />
        <MarketOpportunity />
        <Products />
        <Comparison />
        <Pricing />
        <GoToMarket />
        <Architecture />
        <Roadmap />
        <WhyHawel />
      </main>
      <SiteFooter />
    </div>
  )
}
