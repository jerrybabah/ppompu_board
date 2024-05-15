import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onDocumentCreated } from 'firebase-functions/v2/firestore'

import { REGION } from '@/constant'
import { IScraper, SCRAPER } from '@/store.scraper.interface'
import wemakepriceContainer from './wemakeprice.container'

export const wemakeprice = {
  monitorCron: onSchedule(
    { schedule: 'TODO', region: REGION },
    async () => {
      const wemakepriceScraper = wemakepriceContainer.get<IScraper>(SCRAPER)
      await wemakepriceScraper.monitor()
    },
  ),

  extractTrigger: onDocumentCreated(
    { document: 'TODO', region: REGION },
    async () => {
      const wemakepriceScraper = wemakepriceContainer.get<IScraper>(SCRAPER)
      await wemakepriceScraper.extract()
    },
  ),
}
