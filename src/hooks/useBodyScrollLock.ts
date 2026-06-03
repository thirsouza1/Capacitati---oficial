import { useEffect } from "react";

/**
 * Custom hook to lock the body scroll when a modal is open.
 * Prevents main page shifting by calculating and applying the scrollbar width offset.
 * Restores original body styling and scroll position on close.
 * 
 * @param isOpen Boolean indicating whether the modal is open.
 */
export function useBodyScrollLock(isOpen: boolean) {
  useEffect(() => {
    if (!isOpen) return;

    // Calculate current scrollbar width to prevent layout shifts (horizontal jump)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Save current inline styles to restore them perfectly
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Apply scroll lock to body
    document.body.style.overflow = "hidden";
    
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      // Restore original text-align and styles when closing or unmounting
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);
}
