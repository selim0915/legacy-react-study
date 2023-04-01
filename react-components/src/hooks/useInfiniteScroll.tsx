import { RefObject, useEffect, useState } from 'react'

function useIntersectionObserver(
  targetRef: RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: '0%',
  },
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const isIntersecting = entry?.isIntersecting;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    const target = targetRef?.current // DOM Ref

    if (isIntersecting || !target) return;

    const observer = new IntersectionObserver(updateEntry, options)

    observer.observe(target)

    return () => observer.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef, options.threshold, options.root, options.rootMargin, isIntersecting])

  return entry
}

export default useIntersectionObserver