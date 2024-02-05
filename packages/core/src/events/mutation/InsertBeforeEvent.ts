import { ICustomEvent } from '@0fan/designable-shared'
import { AbstractMutationNodeEvent } from './AbstractMutationNodeEvent'

export class InsertBeforeEvent
  extends AbstractMutationNodeEvent
  implements ICustomEvent
{
  type = 'insert:before'
}
