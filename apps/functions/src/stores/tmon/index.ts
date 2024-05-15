import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onDocumentCreated } from 'firebase-functions/v2/firestore'

import { REGION } from '@/constant'
import { IScraper, SCRAPER } from '@/store.scraper.interface'
import tmonContainer from './tmon.container'

export const tmon = {
  monitorCron: onSchedule(
    { schedule: 'TODO', region: REGION },
    async () => {
      const tmonScraper = tmonContainer.get<IScraper>(SCRAPER)
      await tmonScraper.monitor()
    },
  ),

  extractTrigger: onDocumentCreated(
    { document: 'TODO', region: REGION },
    async () => {
      const tmonScraper = tmonContainer.get<IScraper>(SCRAPER)
      await tmonScraper.extract()
    },
  ),
}
