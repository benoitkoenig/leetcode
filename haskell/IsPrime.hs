module IsPrime(main) where

import System.Environment

isPrime x = and $ map (\a -> x `mod` a /= 0) [2..x-1]

main :: IO ()
main = do
  x <- getArgs
  let y = read $ head x
  print $ isPrime y
