import { injectable } from 'inversify'

import { IScraper } from '@/store.scraper.interface'

@injectable()
export class WemakepriceScraper implements IScraper {
  async monitor() {
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  async extract() {
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
}
