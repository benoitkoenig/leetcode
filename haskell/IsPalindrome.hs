module IsPalindrome(main) where

import System.Environment

isPalindrome x = (x == (reverse x))

main :: IO ()
main = do
  x <- getArgs
  print $ isPalindrome x
