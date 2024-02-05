import { GlobalRegistry, IDesignerRegistry } from '@0fan/designable-core'
import { globalThisPolyfill } from '@0fan/designable-shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
