module MyLast(main) where

import System.Environment

myLast = head.reverse

main :: IO ()
main = do
  x <- getArgs
  print $ myLast x
