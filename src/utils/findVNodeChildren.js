import get from 'lodash/get'
import has from 'lodash/has'
/**
 * Find If componente/Vnode has any children of type
*/

export default function (Node, componentNameToFind, depthLevel = 1, slots = [], scopedSlots = []) {
  let foundInstances = []

  // const findInstance = (theNodesChildren, currentDepth = 0) => {
  //   if (!theNodesChildren) return
  //   if (Array.isArray(theNodesChildren) === false) {
  //     theNodesChildren = [theNodesChildren]
  //   }

  //   theNodesChildren.forEach(vnode => {
  //     if ((get(vnode, '$options.name', get(vnode, 'componentOptions.Ctor.options.name')) === componentNameToFind)) {
  //       foundInstances.push(vnode)
  //     }
      
  //     if ((vnode.$slots || vnode.$scopedSlots) && currentDepth <= depthLevel) {
  //       // find in slots
  //       const mySlots = (slots.length === 0) ? Object.keys(vnode.$slots) : slots
  //       mySlots.forEach(slotName => {
  //         if (has(vnode.$slots, slotName)) {
  //           findInstance(vnode.$slots[slotName], currentDepth++)
  //         }
  //       })
  //       // find in scoptSlots
  //       const myScopedSlots = (scopedSlots.length === 0) ? Object.keys(vnode.$scopedSlots) : scopedSlots
  //       myScopedSlots.forEach(slotName => {
  //         if (has(vnode.$myScopedSlots, slotName)) {
  //           const vnodeScopeSlots = vnode.$slots[slotName]()
  //           findInstance(vnodeScopeSlots, currentDepth++)
  //         }
  //       })
  //     }

  //     const children = get(Node, 'children') || get(Node, 'componentOptions.children')
  //     if (Array.isArray(children)) {
  //       children.forEach(node => {
  //         findInstance(node)
  //       })
  //     }


  //   })
  // }


  // const findLayers = (VNode, bag) => {
  //   bag = bag || []
  //   if (Array.isArray(VNode)) {
  //     VNode.forEach(node => {
  //       findLayers(node, bag)
  //     })
  //     return bag
  //   }
  //   if ((get(VNode, '$options.name', get(VNode, 'componentOptions.Ctor.options.name')) === componentNameToFind)) {
  //     bag.push(VNode)
  //     //console.log(VNode.componentOptions.propsData.name)
  //   }
  //   const children = get(VNode, 'children') || get(VNode, 'componentOptions.children')
  //   if (Array.isArray(children)) {
  //     children.forEach(node => {
  //       findLayers(node, bag)
  //     })
  //   }
  //   if (has(VNode, '$slots')) {
  //     const mySlots = Object.keys(VNode.$slots)
  //     mySlots.forEach(slotName => {
  //       findLayers(VNode.$slots[slotName], bag)
  //     })
  //   }
  //   if (has(VNode, '$scopedSlots')) {
  //     const mySlots = Object.keys(VNode.$scopedSlots)
  //     mySlots.forEach(slotName => {
  //       findLayers(VNode.$scopedSlots[slotName](), bag)
  //     })
  //   }
  //   return bag
  // }

  // check for it
  // findInstance(Node)

  const findLayers = (VNode, bag) => {
    bag = bag || []
    
    if (Array.isArray(VNode)) {
      VNode.forEach(node => {
        findLayers(node, bag)
      })
      return bag
    }


  //   // I will allways get the component instance
    let VNodeInstance

    if( get(VNode, 'componentInstance') ) {
      VNodeInstance = get(VNode, 'componentInstance')
    } else {
      VNodeInstance = VNode
    }

    if ((get(VNodeInstance, '$options.name', get(VNodeInstance, 'componentOptions.Ctor.options.name')) === componentNameToFind)) {
      bag.push(VNodeInstance)
      //console.log( get(VNodeInstance, '$props.name') )
    }
    // let children = get(VNode, 'children') || get(VNode, 'componentOptions.children')
    // if (!children) children = get(VNode, 'componentInstance.$children')
    // if (!children) 
    const children = get(VNodeInstance, '$children') || get(VNodeInstance, 'children')
    if (Array.isArray(children)) {
      children.forEach(node => {
        findLayers(node, bag)
      })
    }
    if (has(VNodeInstance, '$slots')) {
      const mySlots = Object.keys(VNodeInstance.$slots)
      mySlots.forEach(slotName => {
        findLayers(VNodeInstance.$slots[slotName], bag)
      })
    }
    if (has(VNodeInstance, '$scopedSlots')) {
      const mySlots = Object.keys(VNodeInstance.$scopedSlots)
      mySlots.forEach(slotName => {
        findLayers(VNodeInstance.$scopedSlots[slotName](), bag)
      })
    }
    return bag
  }

  foundInstances = findLayers(Node)
  if (foundInstances.length === 0) {
    return undefined
  }
  return foundInstances
}
