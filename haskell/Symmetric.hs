module Symmetric(main) where

data Tree a = Empty | Branch a (Tree a) (Tree a)
  deriving (Show, Eq)

equivalent :: Eq a => Tree a -> Tree a -> Bool
equivalent Empty Empty = True
equivalent Empty _ = False
equivalent _ Empty = False
equivalent (Branch _ b1 b2) (Branch _ b3 b4) = (equivalent b1 b3) && (equivalent b2 b4)

mirror :: Eq a => Tree a -> Tree a
mirror Empty = Empty
mirror (Branch a b c) = Branch a (mirror c) (mirror b)

symmetric :: Eq a => Tree a -> Bool
symmetric x = equivalent x $ mirror x

main :: IO ()
main = do
  print $ symmetric (Branch 'x' (Branch 'x' Empty Empty) (Branch 'x' Empty Empty))
