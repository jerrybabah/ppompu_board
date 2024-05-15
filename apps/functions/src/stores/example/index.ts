import { onSchedule } from 'firebase-functions/v2/scheduler'
import { onDocumentCreated } from 'firebase-functions/v2/firestore'

import { REGION } from '@/constant'
import { IScraper, SCRAPER } from '@/store.scraper.interface'
import exampleContainer from './example.container'

export const example = {
  monitorCron: onSchedule(
    { schedule: 'TODO', region: REGION },
    async () => {
      const exampleScraper = exampleContainer.get<IScraper>(SCRAPER)
      await exampleScraper.monitor()
    },
  ),

  extractTrigger: onDocumentCreated(
    { document: 'TODO', region: REGION },
    async () => {
      const exampleScraper = exampleContainer.get<IScraper>(SCRAPER)
      await exampleScraper.extract()
    },
  ),
}
