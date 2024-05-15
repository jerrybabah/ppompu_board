import { Container } from 'inversify'

import { IScraper, SCRAPER } from '@/store.scraper.interface'
import { WemakepriceScraper } from './wemakeprice.scraper'

const wemakepriceContainer = new Container()
wemakepriceContainer.bind<IScraper>(SCRAPER).to(WemakepriceScraper)

export default wemakepriceContainer
