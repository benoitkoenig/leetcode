module IsPalindrome(main) where

import System.Environment

-- isPalindrome x = foldl (\acc (y1, y2) -> (acc && (y1 == y2))) True $ zip x $ reverse x
isPalindrome x = (x == (reverse x))

main :: IO ()
main = do
  x <- getArgs
  print $ isPalindrome x
