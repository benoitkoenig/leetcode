module MyButLast(main) where

import System.Environment

myButLast [] = error "Not enough element"
myButLast [x] = error "Not enough element"
myButLast x = reverse x !! 1

main :: IO ()
main = do
  x <- getArgs
  print $ myButLast x
