import { translations } from '@aws-amplify/ui'
import { Amplify } from 'aws-amplify'
import { I18n } from 'aws-amplify/utils'

import resourceConfig from '@/aws-exports'

Amplify.configure(resourceConfig)
I18n.putVocabularies(translations)
I18n.setLanguage("ja")

console.log('Amplify configured')
console.log('configured resources: ', resourceConfig)
