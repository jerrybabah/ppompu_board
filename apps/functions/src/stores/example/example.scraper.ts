import { injectable } from 'inversify'

import { IScraper } from '@/store.scraper.interface'

@injectable()
export class ExampleScraper implements IScraper {
  async monitor() {
    await new Promise((resolve) => setTimeout(resolve, 100))
    throw new Error('Not to use production')
  }

  async extract() {
    await new Promise((resolve) => setTimeout(resolve, 100))
    throw new Error('Not to use production')
  }
}
