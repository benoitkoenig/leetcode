module IsPrime(main, isPrime) where

import System.Environment

isPrime 0 = False
isPrime 1 = False
isPrime x = and $ map (\a -> x `mod` a /= 0) [2..x-1]

main :: IO ()
main = do
  x <- getArgs
  let y = read $ head x
  print $ isPrime y
