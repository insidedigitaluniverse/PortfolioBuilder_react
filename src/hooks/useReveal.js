import { useEffect } from 'react'

function show(element) {
  element.dataset.visible = 'true'
}

export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(show)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    function watch(root) {
      if (root.nodeType !== 1) {
        return
      }
      if (root.matches('.reveal') && !root.dataset.visible) {
        observer.observe(root)
      }
      root.querySelectorAll('.reveal:not([data-visible])').forEach((element) => observer.observe(element))
    }

    watch(document.body)
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(watch))
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
    }
  }, [])
}
