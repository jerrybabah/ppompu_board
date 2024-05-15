export interface IScraper {
  monitor: () => Promise<void>,

  extract: () => Promise<void>,
}

export const SCRAPER = Symbol('SCRAPER')
