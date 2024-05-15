import { injectable } from 'inversify'

import { IScraper } from '@/store.scraper.interface'

@injectable()
export class TmonScraper implements IScraper {
  async monitor() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  async extract() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
}
