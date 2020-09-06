module MyLength(main) where

import System.Environment

myLength :: Eq a => [a] -> Int
myLength []     = 0
myLength (_:xs) = 1 + myLength xs

main :: IO ()
main = do
  x <- getArgs
  print $ myLength x
