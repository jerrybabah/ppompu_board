import { Container } from 'inversify'

import { IScraper, SCRAPER } from '@/store.scraper.interface'
import { TmonScraper } from './tmon.scraper'

const tmonContainer = new Container()
tmonContainer.bind<IScraper>(SCRAPER).to(TmonScraper)

export default tmonContainer
