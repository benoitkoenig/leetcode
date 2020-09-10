module Goldbach(main) where

import System.Environment
import Data.List (find)
import IsPrime (isPrime)

goldbach:: Integer -> Maybe (Integer, Integer)
goldbach x = find (\(a, b) -> (isPrime(a) && isPrime(b))) $ zip [0..x] $ reverse [0..x]

main :: IO ()
main = do
  x <- getArgs
  let y = read $ head x
  print $ goldbach y
