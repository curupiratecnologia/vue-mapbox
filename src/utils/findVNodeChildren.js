import get from 'lodash/get'
import has from 'lodash/has'
/**
 * Find If componente/Vnode has any children of type
*/

export default function (Node, componentNameToFind, depthLevel = 1, slots = [], scopedSlots = []) {
  const foundInstances = []

  const findInstance = (theNodesChildren, currentDepth = 0) => {
    if (!theNodesChildren) return
    if (Array.isArray(theNodesChildren) === false) {
      theNodesChildren = [theNodesChildren]
    }
    theNodesChildren.forEach(vnode => {
      if ((get(vnode, '$options.name', get(vnode, 'componentOptions.Ctor.options.name')) === componentNameToFind)) {
        foundInstances.push(vnode)
      } else if ((vnode.$slots || vnode.$scopedSlots) && currentDepth <= depthLevel) {
        // find in slots
        const mySlots = (slots.length === 0) ? Object.keys(vnode.$slots) : slots
        mySlots.forEach(slotName => {
          if (has(vnode.$slots, slotName)) {
            findInstance(vnode.$slots[slotName], currentDepth++)
          }
        })
        // find in scoptSlots
        const myScopedSlots = (scopedSlots.length === 0) ? Object.keys(vnode.$scopedSlots) : scopedSlots
        myScopedSlots.forEach(slotName => {
          if (has(vnode.$myScopedSlots, slotName)) {
            const vnodeScopeSlots = vnode.$slots[slotName]()
            findInstance(vnodeScopeSlots, currentDepth++)
          }
        })
      }
    })
  }

  // check for it
  findInstance(Node)
  if (foundInstances.length === 0) {
    return undefined
  }
  return foundInstances
}
