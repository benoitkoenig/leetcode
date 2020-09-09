module CoPrime(main) where

import System.Environment

coPrime x y = and $ map (\a -> x `mod` a /= 0 || y `mod` a /= 0) [2..(minimum [x, y])]

main :: IO ()
main = do
  x <- getArgs
  let x1 = read $ head x
  let x2 = read $ head $ tail x

  print $ coPrime x1 x2
