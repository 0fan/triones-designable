import { ICustomEvent } from '@0fan/designable-shared'
import { AbstractHistoryEvent } from './AbstractHistoryEvent'

export class HistoryUndoEvent
  extends AbstractHistoryEvent
  implements ICustomEvent
{
  type = 'history:undo'
}
