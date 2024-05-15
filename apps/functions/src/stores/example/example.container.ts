import { Container } from 'inversify'

import { IScraper, SCRAPER } from '@/store.scraper.interface'
import { ExampleScraper } from './example.scraper'

const exampleContainer = new Container()
exampleContainer.bind<IScraper>(SCRAPER).to(ExampleScraper)

export default exampleContainer
