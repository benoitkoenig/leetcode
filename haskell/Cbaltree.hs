module Cbaltree(main) where

import System.Environment

data Tree a = Empty | Branch a (Tree a) (Tree a)
  deriving (Show, Eq)

cbaltree :: Int -> [Tree Char]
cbaltree x
  | x == 0 = [Empty]
  | (mod (x - 1) 2 == 0) = [Branch 'x' a b | a <- cbaltree y, b <- cbaltree y]
  | (mod (x - 1) 2 == 1) = [Branch 'x' a b | a <- cbaltree (y + 1), b <- cbaltree y] ++ [Branch 'x' a b | a <- cbaltree y, b <- cbaltree (y + 1)]
  where y = div (x - 1) 2

main :: IO ()
main = do
  x <- getArgs
  let y = read $ head x

  print $ cbaltree y
